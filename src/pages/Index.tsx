import HeroSection from "@/components/HeroSection"
import ShiftsSection from "@/components/ShiftsSection"
import InfrastructureSection from "@/components/InfrastructureSection"
import BottomSections from "@/components/BottomSections"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <HeroSection />
      <ShiftsSection />
      <InfrastructureSection />
      <BottomSections />
    </div>
  )
}

export default Index
