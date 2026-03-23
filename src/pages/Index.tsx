import { Tent, Lock, ShieldCheck, Heart, Flame, Plus, Minus, Mail, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface Shift {
  number: number
  start: string
  end: string
  duration: string
  label: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const [activeShift, setActiveShift] = useState(0)

  const shifts: Shift[] = [
    { number: 1, start: "1 июня", end: "21 июня", duration: "21 день", label: "2026" },
    { number: 2, start: "24 июня", end: "14 июля", duration: "21 день", label: "2026" },
    { number: 3, start: "17 июля", end: "6 августа", duration: "21 день", label: "2026" },
    { number: 4, start: "9 августа", end: "29 августа", duration: "21 день", label: "2026" },
  ]

  const faqs: FAQ[] = [
    {
      question: "Какой возраст подходит для лагеря?",
      answer:
        "Лагерь «ЗКД» принимает детей от 7 до 16 лет. Мы делим ребят по возрастным группам, чтобы каждому было комфортно и интересно. Вожатые живут вместе с детьми 24/7 и несут полную ответственность за каждого ребёнка.",
    },
    {
      question: "Где находится лагерь?",
      answer:
        "Лагерь расположен в самом сердце Краснознаменска. Территория огорожена — дети находятся в безопасном пространстве, вдали от городского шума, но при этом не слишком далеко от дома.",
    },
    {
      question: "Есть ли душ и удобства?",
      answer:
        "Мы честны: лагерь палаточный, и это его главная фишка! Душа пока нет, зато в этом году появились биотуалеты — это большой шаг вперёд. Палатки стоят на фундаменте с тёплым полом, так что ночью комфортно.",
    },
    {
      question: "Как записать ребёнка?",
      answer:
        "Заполните форму обратной связи или напишите нам напрямую. Мы свяжемся с вами в течение одного рабочего дня, расскажем о доступных сменах и ответим на все вопросы.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/810fdd6f-1096-402c-91e6-c1e7f13a3d2b/files/f0d8bad4-adf4-49d9-8489-f594924d791b.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Tent className="w-5 h-5" />
            <span className="font-medium text-balance">Лагерь «ЗКД»</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О лагере", "Безопасность", "Программа", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Палаточный лагерь · Краснознаменск</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Настоящее детство.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Никаких корпусов и вай-фая — только палатки, костры, гитара и вожатые, которые живут рядом 24/7. Добро пожаловать в лагерь «ЗКД».
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Записать ребёнка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о программе
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Вожатые с детьми круглосуточно</span>
          </div>
        </div>
      </div>

      {/* Shifts Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Смены 2026</h2>
            <p className="text-white/70 text-lg">Выберите подходящее время — и мы забронируем место за вашим ребёнком</p>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shifts.map((shift, index) => (
                <div
                  key={shift.number}
                  onClick={() => setActiveShift(index)}
                  className={`cursor-pointer rounded-2xl p-8 ring-1 backdrop-blur transition-all duration-300 flex flex-col gap-6 ${
                    activeShift === index
                      ? "bg-white text-black ring-white scale-105 shadow-2xl"
                      : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-widest ${activeShift === index ? "text-black/50" : "text-white/40"}`}>
                      {shift.label}
                    </span>
                    <Calendar className={`w-5 h-5 ${activeShift === index ? "text-black/50" : "text-white/40"}`} />
                  </div>
                  <div>
                    <div className={`text-5xl font-bold mb-1 ${activeShift === index ? "text-black" : "text-white"}`}>
                      {shift.number}
                    </div>
                    <div className={`text-sm font-medium ${activeShift === index ? "text-black/60" : "text-white/50"}`}>смена</div>
                  </div>
                  <div>
                    <div className={`text-lg font-semibold ${activeShift === index ? "text-black" : "text-white"}`}>
                      {shift.start} — {shift.end}
                    </div>
                    <div className={`text-sm mt-1 ${activeShift === index ? "text-black/60" : "text-white/50"}`}>
                      {shift.duration}
                    </div>
                  </div>
                  <Button
                    className={`rounded-full text-sm mt-auto ${
                      activeShift === index
                        ? "bg-black text-white hover:bg-black/80"
                        : "bg-white/10 text-white hover:bg-white/20 border-0"
                    }`}
                  >
                    Записаться
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Counselors 24/7 */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Вожатые 24/7</h3>
              <p className="text-white/80 leading-relaxed">Взрослые живут вместе с детьми и отвечают за каждого лично.</p>
            </div>

            {/* Tents on foundation */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Tent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">10 палаток</h3>
              <p className="text-white/80 leading-relaxed">На фундаменте с тёплым полом — уют и настоящая атмосфера лагеря.</p>
            </div>

            {/* Health & Activity */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Здоровье и активность</h3>
              <p className="text-white/80 leading-relaxed">Зарядки, закаливание, оздоровительные часы каждый день.</p>
            </div>

            {/* Campfire */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Костры и гитары</h3>
              <p className="text-white/80 leading-relaxed">Живое общение, ночи под звёздами и настоящий дух лагеря.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Каждый день в лагере</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Насыщенная программа, в которой нет места скуке.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Утро</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Зарядка на свежем воздухе, закаливание и завтрак. Начало дня, которое заряжает энергией на весь день.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">День</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Активности, игры, командные задания и оздоровительный час. Дети учатся дружить и работать в команде.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Вечер</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Общий костёр, песни под гитару, разговоры и смех. Именно такие вечера запоминаются на всю жизнь.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Ночь</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Звёздное небо над головой, тёплый пол в палатке и вожатый рядом. Дети засыпают счастливыми.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Узнать о свободных местах
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что хотят знать родители перед тем, как отправить ребёнка в настоящее приключение.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Записать ребёнка</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Имя родителя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Возраст ребёнка, вопросы, пожелания..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня, расскажем о доступных сменах и ответим на все вопросы.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                      🏕️
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Администрация лагеря</h4>
                      <p className="text-gray-600">Палаточный лагерь «ЗКД»</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Tent className="w-6 h-6" />
                  <span className="text-xl font-semibold">Лагерь «ЗКД»</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Палаточный детский лагерь в Краснознаменске. Вожатые рядом 24/7, палатки на тёплом полу, костры и настоящее детство без гаджетов.
                </p>
              </div>

              {/* Program Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОГРАММА</h3>
                <ul className="space-y-3">
                  {["О лагере", "Расписание", "Активности", "Галерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Безопасность", "Вожатые", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Как записаться", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости лагеря</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Палаточный лагерь «ЗКД»</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index