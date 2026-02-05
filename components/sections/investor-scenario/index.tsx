"use client"

import { InvestorIntroSection } from "./investor-intro-section"
import { InvestorOpportunitySection } from "./investor-opportunity-section"
import { InvestorInvestmentSection } from "./investor-investment-section"
import { InvestorRevenueSection } from "./investor-revenue-section"
import { InvestorWhyNowSection } from "./investor-why-now-section"
import { InvestorValuationSection } from "./investor-valuation-section"

export function InvestorScenarioSections() {
  return (
    <>
      {/* Transition banner to new scenario */}
      <div className="bg-[#003399] py-8">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-[#FFCC00] text-[#003399] text-sm font-bold px-6 py-2 rounded-full mb-3">
            NUEVA SECCION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Escenario Inversor
          </h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Oportunidad estrategica para socios del sector salud
          </p>
        </div>
      </div>

      {/* Slide 1 - Vision General */}
      <InvestorIntroSection />

      {/* Slide 2 - Oportunidad Estrategica */}
      <InvestorOpportunitySection />

      {/* Slide 3 - Modelo de Inversion */}
      <InvestorInvestmentSection />

      {/* Slide 4 - Rentabilidad y Flujo de Caja */}
      <InvestorRevenueSection />

      {/* Slide 5 - Por que Invertir Ahora */}
      <InvestorWhyNowSection />

      {/* Slide 6 - Valoracion y CTA */}
      <InvestorValuationSection />
    </>
  )
}
