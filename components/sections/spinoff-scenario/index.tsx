"use client"

import { SpinoffIntroSection } from "./spinoff-intro-section"
import { SpinoffTransferSection } from "./spinoff-transfer-section"
import { SpinoffUnifiedQuotaSection } from "./spinoff-unified-quota-section"
import { SpinoffCriticalMilestoneSection } from "./spinoff-critical-milestone-section"
import { SpinoffBarrierEliminationSection } from "./spinoff-barrier-elimination-section"
import { SpinoffCommitmentSection } from "./spinoff-commitment-section"
import { SpinoffInvestmentBreakdownSection } from "./spinoff-investment-breakdown-section"
import { SpinoffCashflowSection } from "./spinoff-cashflow-section"
import { SpinoffGrowthOptimizationSection } from "./spinoff-growth-optimization-section"
import { SpinoffValuationSection } from "./spinoff-valuation-section"

export function SpinoffScenarioSections() {
  return (
    <>
      {/* Transition banner to new scenario */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-6">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-[#003399] text-white text-sm font-bold px-6 py-2 rounded-full mb-2">
            NUEVA SECCIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003399]">
            Escenario Spin-Off
          </h2>
          <p className="text-[#003399]/80 mt-2 max-w-2xl mx-auto">
            Modelo de ejecución optimizado que complementa y escala la visión inicial
          </p>
        </div>
      </div>

      {/* Slide 1 - Concepto de la Nueva Entidad */}
      <SpinoffIntroSection />

      {/* Slide 2 - Transferencia de Activos y Derechos */}
      <SpinoffTransferSection />

      {/* Slide 3 - Cuota Unificada */}
      <SpinoffUnifiedQuotaSection />

      {/* Slide 4 - Hito Crítico de las 100 Adhesiones */}
      <SpinoffCriticalMilestoneSection />

      {/* Slide 5 - Eliminación de Barreras */}
      <SpinoffBarrierEliminationSection />

      {/* Slide 6 - Condiciones de Éxito y Permanencia */}
      <SpinoffCommitmentSection />

      {/* Slide 7 - Desglose de Inversión */}
      <SpinoffInvestmentBreakdownSection />

      {/* Slide 8 - Análisis de Flujo de Caja */}
      <SpinoffCashflowSection />

      {/* Slide 9 - Optimización del Gasto */}
      <SpinoffGrowthOptimizationSection />

      {/* Slide 10 - Valoración de Mercado */}
      <SpinoffValuationSection />
    </>
  )
}
