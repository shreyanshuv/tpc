import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { AboutPreview } from "@/components/home/about-preview"
import { CtaSection } from "@/components/home/cta-section"
import { RecruitersSection } from "@/components/home/recruiters-section"
import AutoModal from "@/components/ui/auto-modal"

export default function HomePage() {
  return (
    <>
    <AutoModal/>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <RecruitersSection />
      <CtaSection />
    </>
  )
}
