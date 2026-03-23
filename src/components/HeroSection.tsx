import { Tent, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://cdn.poehali.dev/projects/810fdd6f-1096-402c-91e6-c1e7f13a3d2b/files/f0d8bad4-adf4-49d9-8489-f594924d791b.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Tent className="w-5 h-5" />
          <span className="font-medium text-balance">Лагерь «ЗКД»</span>
        </div>

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

        <div className="flex items-center gap-3">
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <span className="text-sm font-medium">Палаточный лагерь · Краснознаменск</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Палаточный лагерь<br />«ЗКД»</h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          Никаких корпусов и вай-фая — только палатки, костры, гитара и вожатые, которые живут рядом 24/7. Добро пожаловать в лагерь «ЗКД».
        </p>

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

        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Lock className="w-4 h-4" />
          <span className="text-sm font-medium">Вожатые с детьми круглосуточно</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection