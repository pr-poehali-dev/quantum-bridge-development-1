import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Shift {
  number: number
  start: string
  end: string
  duration: string
  label: string
}

const ShiftsSection = () => {
  const [activeShift, setActiveShift] = useState(0)

  const shifts: Shift[] = [
    { number: 1, start: "1 июня", end: "21 июня", duration: "21 день", label: "2026" },
    { number: 2, start: "24 июня", end: "14 июля", duration: "21 день", label: "2026" },
    { number: 3, start: "17 июля", end: "6 августа", duration: "21 день", label: "2026" },
    { number: 4, start: "9 августа", end: "29 августа", duration: "21 день", label: "2026" },
  ]

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Смены 2026</h2>
          <p className="text-white/70 text-lg">Выберите подходящее время — и мы забронируем место за вашим ребёнком</p>
        </div>

        <div className="relative">
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
  )
}

export default ShiftsSection
