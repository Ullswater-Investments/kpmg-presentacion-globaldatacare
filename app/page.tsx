import { HeroSection } from "@/components/sections/hero-section"
import { OriginSection } from "@/components/sections/origin-section"
import { VerticalsSection } from "@/components/sections/verticals-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { HookSection } from "@/components/sections/hook-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { RegulatorySection } from "@/components/sections/regulatory-section"
import { FooterLogos } from "@/components/sections/footer-logos"

export default function GlobalDataCarePage() {
  return (
    <main className="min-h-screen">
      {/* Slide 1 - Hero */}
      <HeroSection />
      
      {/* Slide 2 - Origin */}
      <OriginSection />
      
      {/* Slide 3 - Verticals */}
      <VerticalsSection />
      
      {/* Slide 4 - Credibility */}
      <CredibilitySection />
      
      {/* Slide 5 - Hook */}
      <HookSection />
      
      {/* Slide 6 - Technology */}
      <TechnologySection />
      
      {/* Slide 7 - Regulatory */}
      <RegulatorySection />
      
      {/* Footer Logos */}
      <FooterLogos />
    </main>
  )
}
