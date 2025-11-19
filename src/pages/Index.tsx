import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const collections = [
    {
      id: 1,
      title: 'Классика',
      description: 'Вечные силуэты для традиционной церемонии',
      image: 'https://cdn.poehali.dev/projects/eb8af959-1231-49a1-bac6-7c7aaac6593b/files/3a76a498-59dc-43c4-b3ab-7ae3a9903524.jpg',
      price: 'от 80 000 ₽'
    },
    {
      id: 2,
      title: 'Современная роскошь',
      description: 'Смелые формы и изысканные детали',
      image: 'https://cdn.poehali.dev/projects/eb8af959-1231-49a1-bac6-7c7aaac6593b/files/d3b2caea-0980-4dc2-ba40-dd819cdc1211.jpg',
      price: 'от 120 000 ₽'
    },
    {
      id: 3,
      title: 'Романтика',
      description: 'Воздушные ткани и нежные кружева',
      image: 'https://cdn.poehali.dev/projects/eb8af959-1231-49a1-bac6-7c7aaac6593b/files/5877176c-4ba5-4dff-8793-333c81f2bcac.jpg',
      price: 'от 95 000 ₽'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Индивидуальная примерка',
      description: 'Персональный консультант и комфортная атмосфера'
    },
    {
      icon: 'Scissors',
      title: 'Подгонка по фигуре',
      description: 'Профессиональное ателье для идеальной посадки'
    },
    {
      icon: 'Crown',
      title: 'Аксессуары',
      description: 'Фата, украшения и обувь в едином стиле'
    },
    {
      icon: 'Calendar',
      title: 'Бронирование',
      description: 'Резервируем платье на вашу дату'
    }
  ];

  const prices = [
    { name: 'Консультация стилиста', price: 'Бесплатно' },
    { name: 'Примерка платьев', price: 'Бесплатно' },
    { name: 'Подгонка платья', price: 'от 5 000 ₽' },
    { name: 'Экспресс-подгонка (3 дня)', price: 'от 15 000 ₽' },
    { name: 'Химчистка', price: 'от 8 000 ₽' },
    { name: 'Аренда аксессуаров', price: 'от 3 000 ₽' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setIsDialogOpen(false);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">Гармония</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">Коллекции</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#prices" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Запись на примерку</DialogTitle>
                <DialogDescription>
                  Оставьте свои контакты, и мы подберём удобное время
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Желаемая дата примерки</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о своих пожеланиях"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
            Гармония
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Салон свадебных платьев премиум-класса
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Создаём образ вашей мечты с вниманием к каждой детали
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Начать подбор платья
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="collections" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 animate-fade-in">Наши коллекции</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Эксклюзивные модели от ведущих мировых дизайнеров
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-primary mb-4">{item.price}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Полный спектр сервиса для идеального образа
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-5xl font-bold text-center mb-4">Цены</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <Card className="border-border">
            <CardContent className="p-8">
              {prices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-border last:border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg">{item.name}</span>
                  <span className="text-lg font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl font-bold mb-4">Посетите наш салон</h3>
          <p className="text-muted-foreground mb-12 text-lg">
            Запишитесь на индивидуальную консультацию
          </p>
          <Card className="p-8 border-border">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес
                </h4>
                <p className="text-muted-foreground mb-6">
                  Улица Садовая, 25
                </p>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Часы работы
                </h4>
                <p className="text-muted-foreground">
                  Ежедневно: 10:00 - 21:00
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Контакты
                </h4>
                <p className="text-muted-foreground mb-6">
                  +7 978 678-41-92<br />
                  Chuykovayuliya24@gmail.com
                </p>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Share2" size={24} className="text-primary" />
                  Социальные сети
                </h4>
                <div className="flex gap-4">
                  <a href="https://t.me/salon_platiya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="QrCode" size={24} className="text-primary" />
                    QR-код сайта
                  </h4>
                  <div className="inline-block p-4 bg-white rounded-lg">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(window.location.origin)}`}
                      alt="QR-код сайта"
                      className="w-32 h-32"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 mb-3">
                    Отсканируйте для быстрого доступа
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(window.location.origin)}`;
                      link.download = 'salon-harmonia-qr.png';
                      link.click();
                    }}
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать QR-код
                  </Button>
                </div>
              </div>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-8 w-full md:w-auto">
                  Записаться на примерку
                </Button>
              </DialogTrigger>
            </Dialog>
          </Card>
          
          <Card className="mt-8 overflow-hidden border-border">
            <div className="aspect-video w-full">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d3e8e6c8f3b4e5c8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Карта расположения салона"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Салон свадебных платьев "Гармония". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;