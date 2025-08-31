import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/ui/header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageCircle, CreditCard, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });

  const [paymentData, setPaymentData] = useState({
    service: "",
    package: "",
    amount: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    if (!contactForm.consent) {
      toast({
        title: "Ошибка", 
        description: "Необходимо согласие на обработку данных",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в течение 24 часов"
    });
  };

  const handlePayment = () => {
    if (!paymentData.service) {
      toast({
        title: "Выберите услугу",
        description: "Необходимо выбрать услугу для оплаты",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Переход к оплате",
      description: "Сейчас откроется страница оплаты"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Контакты и запись на прием | Центр консультативной психологии ИНТЕНЦИЯ</title>
        <meta name="description" content="Контакты центра психологии ИНТЕНЦИЯ в Минске. Телефон +375 29 237-57-30, email info@intention.by. Онлайн запись и оплата услуг." />
        <meta property="og:title" content="Контакты центра психологии ИНТЕНЦИЯ" />
        <meta property="og:description" content="Свяжитесь с нами для записи на консультацию. Работаем онлайн и очно в Минске." />
        <meta property="og:url" content="https://intention.by/contacts" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Контакты и оплата
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или оплатите услуги онлайн
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-2">+375 (29) 237-57-30</p>
                <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-2">info@intention.by</p>
                <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Мессенджеры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-medium">Telegram / Instagram / Viber / VK</p>
                  <p className="text-sm text-muted-foreground">+375 (29) 237-57-30</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address and Hours */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <CardTitle>Адрес центра</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Юридический адрес:</p>
                  <p>220069, г. Минск, пр-т Дзержинского 11-843-3</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Почтовый адрес:</p>
                  <p>220117, г. Минск, ул. Рафиева, д. 54, кв. 4</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Учредитель: частное предприятие «ЭЛЬМОТО»</p>
                  <p className="text-sm text-muted-foreground">УНП: 193334920</p>
                </div>
                <div className="bg-secondary/30 rounded-lg h-32 flex items-center justify-center">
                  <p className="text-muted-foreground">Здесь будет карта</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <CardTitle>Режим работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Онлайн-консультации доступны в любое время по предварительной записи. Работаем с клиентами по всей Беларуси.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Банковские реквизиты:</p>
                    <p className="text-xs text-muted-foreground">BY03ALFA30122559870010270000</p>
                    <p className="text-xs text-muted-foreground">БИК: ALFABY2X</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Напишите нам
              </h2>
              <p className="text-lg text-muted-foreground">
                Задайте вопрос или оставьте отзыв — мы обязательно ответим
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Все поля обязательны для заполнения</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Имя *</Label>
                      <Input
                        id="contact-name"
                        placeholder="Ваше имя"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Тема</Label>
                    <Select value={contactForm.subject} onValueChange={(value) => setContactForm({...contactForm, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему сообщения" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="question">Общий вопрос</SelectItem>
                        <SelectItem value="consultation">Вопрос о консультации</SelectItem>
                        <SelectItem value="school">Школа ЭИ</SelectItem>
                        <SelectItem value="mindfulness">Практики осознанности</SelectItem>
                        <SelectItem value="feedback">Отзыв</SelectItem>
                        <SelectItem value="cooperation">Сотрудничество</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Сообщение *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Напишите ваше сообщение..."
                      className="min-h-[120px]"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="contact-consent"
                      checked={contactForm.consent}
                      onCheckedChange={(checked) => setContactForm({...contactForm, consent: checked as boolean})}
                      required
                    />
                    <Label htmlFor="contact-consent" className="text-sm leading-relaxed cursor-pointer">
                      Согласен с обработкой персональных данных и <a href="/privacy" className="text-primary underline">политикой конфиденциальности</a> *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Онлайн-оплата
              </h2>
              <p className="text-lg text-muted-foreground">
                Оплатите услуги безопасно через наш сайт
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <CardTitle>Выберите услугу для оплаты</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Услуга</Label>
                  <Select value={paymentData.service} onValueChange={(value) => setPaymentData({...paymentData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Индивидуальная консультация</SelectItem>
                      <SelectItem value="family">Семейная консультация</SelectItem>
                      <SelectItem value="teen">Подростковая консультация</SelectItem>
                      <SelectItem value="school-6-8">Школа ЭИ (6-8 лет)</SelectItem>
                      <SelectItem value="school-9-12">Школа ЭИ (9-12 лет)</SelectItem>
                      <SelectItem value="school-13-17">Школа ЭИ (13-17 лет)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Пакет</Label>
                  <Select value={paymentData.package} onValueChange={(value) => setPaymentData({...paymentData, package: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите пакет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Разовая сессия</SelectItem>
                      <SelectItem value="package-4">Пакет 4 сессии (-10%)</SelectItem>
                      <SelectItem value="package-8">Пакет 8 сессий (-15%)</SelectItem>
                      <SelectItem value="trial">Пробное занятие</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">К оплате:</span>
                    <span className="text-2xl font-bold text-primary">
                      {paymentData.service && paymentData.package ? "150 BYN" : "— BYN"}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Перейти к оплате
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Принимаем карты Visa, Mastercard, Белкарт, Интернет-банкинг
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Безопасная оплата через защищённое соединение
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Документы и правила
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Договор оферты</h3>
                  <p className="text-sm text-muted-foreground">Условия оказания услуг</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Политика конфиденциальности</h3>
                  <p className="text-sm text-muted-foreground">Обработка персональных данных</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Правила отмены</h3>
                  <p className="text-sm text-muted-foreground">Условия переноса и возврата</p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;