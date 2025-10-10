<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';

// Load environment variables
if (file_exists(__DIR__ . '/.env')) {
    $env = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($env as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Configuration
$apiKey = $_ENV['RESEND_API_KEY'] ?? 're_123456789_REPLACE_WITH_YOUR_ACTUAL_API_KEY';
$fromEmail = $_ENV['FROM_EMAIL'] ?? 'onboarding@resend.dev';
$toEmail = $_ENV['TO_EMAIL'] ?? 'lyzodanny@gmail.com';

try {
    // Get the raw POST data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $requiredFields = ['name', 'phone', 'format'];
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Field '$field' is required");
        }
    }
    
    // Initialize Resend client
    $resend = Resend::client($apiKey);
    
    // Prepare email content
    $emailHtml = generateBookingEmailHtml($data);
    
    // Send email
    $result = $resend->emails->send([
        'from' => $fromEmail,
        'to' => $toEmail,
        'subject' => 'Новая заявка на консультацию - ' . htmlspecialchars($data['name']),
        'html' => $emailHtml
    ]);
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена',
        'emailId' => $result->id ?? null
    ]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}

function generateBookingEmailHtml($data) {
    $name = htmlspecialchars($data['name']);
    $phone = htmlspecialchars($data['phone']);
    $email = htmlspecialchars($data['email'] ?? 'Не указан');
    $format = htmlspecialchars($data['format']);
    $psychologist = htmlspecialchars($data['psychologist'] ?? 'Автоматический подбор');
    $timePreference = htmlspecialchars($data['timePreference'] ?? 'Не указано');
    $request = htmlspecialchars($data['request'] ?? 'Не указан');
    $additionalInfo = htmlspecialchars($data['additionalInfo'] ?? 'Не указана');
    $whatsappConsent = isset($data['agreements']['whatsapp']) && $data['agreements']['whatsapp'] ? 'Да' : 'Нет';
    
    return "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>Новая заявка на консультацию</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .highlight { background-color: #fff3cd; padding: 10px; border-radius: 4px; border-left: 4px solid #ffc107; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🎯 Новая заявка на консультацию</h2>
                <p>Получена заявка от клиента. Требуется связаться в течение 2 часов.</p>
            </div>
            
            <div class='field'>
                <div class='label'>👤 Имя клиента:</div>
                <div class='value'><strong>$name</strong></div>
            </div>
            
            <div class='field'>
                <div class='label'>📞 Телефон:</div>
                <div class='value'><strong>$phone</strong></div>
            </div>
            
            <div class='field'>
                <div class='label'>📧 Email:</div>
                <div class='value'>$email</div>
            </div>
            
            <div class='field'>
                <div class='label'>💻 Формат консультации:</div>
                <div class='value'><strong>" . ($format === 'online' ? 'Онлайн (видеосвязь)' : 'Очно (в центре)') . "</strong></div>
            </div>
            
            <div class='field'>
                <div class='label'>👩‍⚕️ Предпочтительный психолог:</div>
                <div class='value'>$psychologist</div>
            </div>
            
            <div class='field'>
                <div class='label'>⏰ Удобное время:</div>
                <div class='value'>$timePreference</div>
            </div>
            
            <div class='field'>
                <div class='label'>🎯 Тема обращения:</div>
                <div class='value'>$request</div>
            </div>
            
            " . (!empty($data['additionalInfo']) ? "
            <div class='field'>
                <div class='label'>💬 Дополнительная информация:</div>
                <div class='value'>$additionalInfo</div>
            </div>
            " : "") . "
            
            <div class='field'>
                <div class='label'>📱 Согласие на WhatsApp/Telegram:</div>
                <div class='value'>$whatsappConsent</div>
            </div>
            
            <div class='highlight'>
                <strong>⚡ Действие требуется:</strong> Связаться с клиентом в течение 2 часов для подтверждения записи.
            </div>
            
            <hr style='margin: 30px 0;'>
            <p style='color: #666; font-size: 14px;'>
                Это автоматическое уведомление от системы записи Growth Path Kit.<br>
                Время получения: " . date('d.m.Y H:i:s') . "
            </p>
        </div>
    </body>
    </html>
    ";
}
?>