import Icon from "@/components/ui/icon"

interface InfraItem {
  icon: string
  title: string
  description: string
}

const items: InfraItem[] = [
  {
    icon: "Tent",
    title: "10 палаток на фундаменте",
    description: "С тёплым полом — комфортный сон даже в прохладные ночи.",
  },
  {
    icon: "TreePine",
    title: "Самодельные шалаши",
    description: "Уютные пространства для кружков и творческих занятий.",
  },
  {
    icon: "Dumbbell",
    title: "Спортплощадка",
    description: "Активные игры, командные соревнования и физическое развитие.",
  },
  {
    icon: "Film",
    title: "Кинотеатр под открытым небом",
    description: "Вечерние показы под звёздным небом — незабываемые впечатления.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Столовая и медпункт",
    description: "Отдельные палатки для питания и оказания медицинской помощи.",
  },
  {
    icon: "TreeDeciduous",
    title: "Поляна с навесом",
    description: "Скамейки из цельного дерева — место для сборов, бесед и отдыха.",
  },
  {
    icon: "Flame",
    title: "Костровище с котелком",
    description: "Настоящий лагерный огонь, песни под гитару и горячий чай.",
  },
  {
    icon: "Toilet",
    title: "Биотуалеты",
    description: "Чистые и удобные — в этом году большое улучшение комфорта.",
  },
]

const InfrastructureSection = () => {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Инфраструктура</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Всё необходимое для настоящего лагерного лета — без лишнего, но с душой.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20">
                  <Icon name={item.icon} fallback="Star" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureSection
