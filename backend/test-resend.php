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

// Check if autoload exists
if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    echo json_encode(['error' => 'Composer dependencies not installed']);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';

try {
    // Test if we can create Resend client without import
    if (!class_exists('Resend')) {
        throw new Exception('Resend class not found');
    }
    
    $resend = Resend::client('re_test_key');
    
    echo json_encode([
        'success' => true,
        'message' => 'Resend client created successfully',
        'class' => get_class($resend)
    ]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine()
    ]);
}
?>