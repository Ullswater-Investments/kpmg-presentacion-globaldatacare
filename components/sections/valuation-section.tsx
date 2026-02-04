"use client"

import { Euro, Server, Network, Sparkles, TrendingUp } from "lucide-react"

const revenueItems = [
  {
    concept: "Cuotas Grupo 1 (100 subv.)",
    calculation: "100 clientes x 350€ x 15 meses",
    amount: "525.000€",
  },
  {
    concept: "Cuotas Grupo 2 (100 nuevos)",
    calculation: "100 clientes x 175€ x 9 meses",
    amount: "157.500€",
  },
  {
    concept: "Comisiones Transaccionales",
    calculation: "1.000 transacciones/año x 30€",
    amount: "30.000€",
  },
  {
    concept: "Servicios de Valor Añadido",
    calculation: "Algoritmos, indicadores, consultoría",
    amount: "Variable",
  },
]

const valuationPillars = [
  {
    icon: TrendingUp,
    title: "MRR Proyectado",
    value: "52.500€",
    subtitle: "mensuales (630K ARR)",
  },
  {
    icon: Server,
    title: "Activos Tecnológicos",
    value: "4",
    subtitle: "verticales operativas",
  },
  {
    icon: Network,
    title: "Efecto Red",
    value: "200",
    subtitle: "nodos federados activos",
  },
  {
    icon: Sparkles,
    title: "Servicios Escalables",
    value: "IA",
    subtitle: "algoritmos y datos",
  },
]

export function ValuationSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#002266] to-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Proyección Financiera
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ingresos y Valoración 2026
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Objetivo de valoración: 5M EUR como Spin-Off de Accuro Technology
          </p>
        </div>

        {/* Revenue Table */}
        <div className="bg-[#002266] border border-white/10 rounded-lg overflow-hidden mb-12">
          <div className="bg-[#001a4d] px-6 py-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">Proyección de Ingresos a Diciembre 2026</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {revenueItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg ${
                    index % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <div className="mb-2 md:mb-0">
                    <h4 className="font-semibold text-white">{item.concept}</h4>
                    <p className="text-sm text-white/50">{item.calculation}</p>
                  </div>
                  <span className="text-[#FFCC00] font-bold text-lg">{item.amount}</span>
                </div>
              ))}
            </div>
            
            {/* Total */}
            <div className="mt-6 pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between">
              <span className="text-xl font-bold text-white mb-2 md:mb-0">TOTAL ESTIMADO</span>
              <div className="text-right">
                <span className="text-4xl font-bold text-[#FFCC00]">712.500€</span>
                <p className="text-white/50 text-sm">Ingresos recurrentes y acumulados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Valuation Pillars */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Racional de Valoración: Objetivo 5M EUR
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valuationPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-lg p-5 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <pillar.icon className="w-6 h-6 text-[#FFCC00]" />
                </div>
                <p className="text-white/60 text-sm mb-1">{pillar.title}</p>
                <p className="text-3xl font-bold text-[#FFCC00] mb-1">{pillar.value}</p>
                <p className="text-white/50 text-xs">{pillar.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Message */}
        <div className="bg-[#FFCC00] rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Euro className="w-12 h-12 text-[#003399]" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-[#003399] mb-3 max-w-4xl mx-auto">
            "No solo construimos una plataforma; creamos el mercado donde se negociará el futuro de la salud en Europa"
          </h4>
          <p className="text-[#003399]/80 max-w-2xl mx-auto">
            Con ingresos garantizados por contrato y una infraestructura validada por el Gobierno de España
          </p>
        </div>
      </div>
    </section>
  )
}
