import { HeroSection } from "@/components/sections/hero-section"
import { OriginSection } from "@/components/sections/origin-section"
import { VerticalsSection } from "@/components/sections/verticals-section"
import { CredibilitySection } from "@/components/sections/credibility-section"
import { HookSection } from "@/components/sections/hook-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { RegulatorySection } from "@/components/sections/regulatory-section"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { EHDSAlignmentSection } from "@/components/sections/ehds-alignment-section"
import { SEDIALinkSection } from "@/components/sections/sedia-link-section"
import { DeadlineSection } from "@/components/sections/deadline-section"
import { EligibilitySection } from "@/components/sections/eligibility-section"
import { RequirementsSection } from "@/components/sections/requirements-section"
import { ActiveVerticalsSection } from "@/components/sections/active-verticals-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { SpinoffSection } from "@/components/sections/spinoff-section"
import { RevenueSection } from "@/components/sections/revenue-section"
import { InvestmentSection } from "@/components/sections/investment-section"
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
      
      {/* Slide 7 - Regulatory Framework */}
      <RegulatorySection />
      
      {/* Slide 7b - Health Ecosystem */}
      <EcosystemSection />
      
      {/* Slide 7c - EHDS Alignment (European Connection) */}
      <EHDSAlignmentSection />
      
      {/* Slide 7d - SEDIA Link (National Connection) */}
      <SEDIALinkSection />
      
      {/* Slide 8 - Deadline & Modalities */}
      <DeadlineSection />
      
      {/* Slide 8b - Eligibility */}
      <EligibilitySection />
      
      {/* Slide 9 - Requirements */}
      <RequirementsSection />
      
      {/* Slide 10 - Active Verticals */}
      <ActiveVerticalsSection />
      
      {/* Slide 11 - Pricing */}
      <PricingSection />
      
      {/* Slide 12 - Spin-Off */}
      <SpinoffSection />
      
      {/* Slide 13 - Revenue Projection */}
      <RevenueSection />
      
      {/* Slide 14 - Investment */}
      <InvestmentSection />
      
      {/* Footer Logos */}
      <FooterLogos />
    </main>
  )
}
