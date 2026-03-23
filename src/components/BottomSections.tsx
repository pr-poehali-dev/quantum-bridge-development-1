import { Tent, ShieldCheck, Heart, Flame, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Какой возраст подходит для лагеря?",
    answer:
      "Лагерь «ЗКД» принимает детей до 18 лет. Мы делим ребят по возрастным группам, чтобы каждому было комфортно и интересно. Вожатые живут вместе с детьми 24/7 и несут полную ответственность за каждого ребёнка.",
  },
  {
    question: "Где находится лагерь?",
    answer:
      "Лагерь находится в Краснознаменске. Территория огорожена проволокой — дети находятся в безопасном пространстве.",
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

const BottomSections = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Вожатые 24/7</h3>
              <p className="text-white/80 leading-relaxed">Взрослые живут вместе с детьми и отвечают за каждого лично.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Tent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">10 палаток</h3>
              <p className="text-white/80 leading-relaxed">На фундаменте с тёплым полом — уют и настоящая атмосфера лагеря.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Здоровье и активность</h3>
              <p className="text-white/80 leading-relaxed">Зарядки, закаливание, оздоровительные часы каждый день.</p>
            </div>

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
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Каждый день в лагере</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Насыщенная программа, в которой нет места скуке.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Утро</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Зарядка на свежем воздухе, закаливание и завтрак. Начало дня, которое заряжает энергией на весь день.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">День</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Активности, игры, командные задания и оздоровительный час. Дети учатся дружить и работать в команде.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Вечер</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Общий костёр, песни под гитару, разговоры и смех. Именно такие вечера запоминаются на всю жизнь.
                  </p>
                </div>
              </div>

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

      {/* Reviews Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Отзывы</h2>
            <p className="text-white/70 text-lg">Что говорят родители, дети и вожатые</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm flex-1">
                «Отправляла ребёнка с переживаниями, всё-таки палаточный формат — это не самый привычный вариант. Но уже через пару дней он звонил и с восторгом рассказывал про костры, новые знакомства и жизнь на природе. Вернулся более самостоятельным, уверенным и очень вдохновлённым. Спасибо за атмосферу, заботу и настоящий опыт, который не получить в обычном лагере.»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center text-lg flex-shrink-0">
                  👩
                </div>
                <div>
                  <p className="font-semibold text-sm">Иванова Светлана Андреевна</p>
                  <p className="text-white/50 text-xs">Родитель</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm flex-1">
                «Это был самый крутой лагерь! Мы жили в палатках, сидели у костра, готовили еду и постоянно что-то делали вместе. Я нашёл много друзей, научился новому и вообще не хотел уезжать. Было ощущение настоящего приключения каждый день. Хочу поехать ещё раз!»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-lg flex-shrink-0">
                  🧒
                </div>
                <div>
                  <p className="font-semibold text-sm">Вова, 10 лет</p>
                  <p className="text-white/50 text-xs">Ребёнок</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm flex-1">
                «Работа в этом лагере — это не просто смена, а полноценная жизнь вместе с детьми. Здесь нет дистанции, ты постоянно рядом, поддерживаешь, направляешь и сам становишься частью команды. Дети раскрываются, становятся сильнее и увереннее, а коллектив получается очень сплочённым. Атмосфера живая, настоящая — именно за этим сюда и едут.»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center text-lg flex-shrink-0">
                  🙋
                </div>
                <div>
                  <p className="font-semibold text-sm">Марина</p>
                  <p className="text-white/50 text-xs">Вожатый</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что хотят знать родители перед тем, как отправить ребёнка в настоящее приключение.
                </p>
              </div>

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
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Записать ребёнка</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня, расскажем о доступных сменах и ответим на все вопросы.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                        👩‍💼
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Директор лагеря</p>
                        <h4 className="text-base font-semibold leading-tight">Гребенщикова Полина Дмитриевна</h4>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">
                        👩‍💼
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Заместитель директора</p>
                        <h4 className="text-base font-semibold leading-tight">Богушевская Оксана Николаевна</h4>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-white text-black hover:bg-white/90 rounded-2xl p-6 flex items-center justify-center gap-2 h-auto ring-1 ring-white/20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Tent className="w-6 h-6" />
                  <span className="text-xl font-semibold">Лагерь «ЗКД»</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Палаточный детский лагерь в Краснознаменске. Вожатые рядом 24/7, палатки на тёплом полу, костры и настоящее детство без гаджетов.
                </p>
              </div>

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

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Палаточный лагерь «ЗКД»</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BottomSections