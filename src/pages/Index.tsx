import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const aiTools = [
    {
      name: "Генерация концептов",
      description:
        "Связка Midjourney + ChatGPT + DeepSeek для создания концепций по ТЗ",
      icon: "Lightbulb",
      status: "Активно",
    },
    {
      name: "Доработка изображений",
      description: "Ретушь и правки в Photoshop AI",
      icon: "Image",
      status: "Активно",
    },
    {
      name: "Векторизация",
      description: "Частичная автоматизация в Illustrator + ручная доработка",
      icon: "Vector",
      status: "Гибридно",
    },
    {
      name: "PowerPoint с ИИ",
      description: "Подходит для шаблонных презентаций и обработки текста",
      icon: "Presentation",
      status: "Ограниченно",
    },
  ];

  const projects = [
    {
      title: "Корпоративная айдентика",
      description: "Разработка логотипа и фирменного стиля с использованием AI",
      category: "Брендинг",
    },
    {
      title: "UI/UX дизайн приложения",
      description: "Создание пользовательского интерфейса с AI-генерацией",
      category: "Интерфейсы",
    },
    {
      title: "Маркетинговые материалы",
      description: "Серия визуалов для рекламной кампании",
      category: "Маркетинг",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Cpu" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI Design Department
                </h1>
                <p className="text-sm text-gray-500">Цифровизация в дизайне</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                О нас
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Проекты
              </a>
              <a href="#tools" className="text-gray-600 hover:text-gray-900">
                AI-инструменты
              </a>
              <a href="#contacts" className="text-gray-600 hover:text-gray-900">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Дизайн будущего</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Мы используем искусственный интеллект для создания инновационных
            решений в дизайне, сочетая технологии с творческим подходом
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Наши проекты
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Уровень цифровой зрелости
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Текущий уровень автоматизации процессов дизайна с использованием
              ИИ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">30%</CardTitle>
                <p className="text-gray-600">Автоматизировано с ИИ</p>
              </CardHeader>
              <CardContent>
                <Progress value={30} className="mb-4" />
                <p className="text-sm text-gray-500">
                  Концепты, ретушь, векторизация
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-slate-700">70%</CardTitle>
                <p className="text-gray-600">Требует ручной доработки</p>
              </CardHeader>
              <CardContent>
                <Progress value={70} className="mb-4" />
                <p className="text-sm text-gray-500">
                  Уникальность, бренд-гайдлайны, композиция
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              AI-инструменты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Технологии, которые мы используем для создания инновационных
              решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name={tool.icon} className="w-8 h-8 text-blue-600" />
                    <Badge
                      variant={
                        tool.status === "Активно" ? "default" : "secondary"
                      }
                    >
                      {tool.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Наши проекты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры работ, выполненных с использованием AI-технологий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{project.category}</Badge>
                    <Icon
                      name="ArrowUpRight"
                      className="w-4 h-4 text-gray-400"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Вызовы и решения
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Основные проблемы при работе с ИИ и наши подходы к их решению
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="AlertTriangle"
                    className="w-5 h-5 mr-2 text-red-500"
                  />
                  Болевые точки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Проблемы с уникальностью дизайна</li>
                  <li>• Технические ограничения (детали, векторизация)</li>
                  <li>• Юридические риски авторских прав</li>
                  <li>• Отсутствие понимания бренд-контекста</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    className="w-5 h-5 mr-2 text-green-500"
                  />
                  Наши решения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Гибридный подход: ИИ + ручная доработка</li>
                  <li>• Детальная проработка технических деталей</li>
                  <li>• Соблюдение корпоративных стандартов</li>
                  <li>• Креативный контроль на каждом этапе</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей командой для обсуждения вашего проекта
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Mail" className="w-4 h-4 mr-2" />
              Написать нам
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-800"
            >
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 AI Design Department. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
