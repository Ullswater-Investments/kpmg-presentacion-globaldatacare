"use client"

import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "NIVEL A",
      aid: "€15.000",
      subtitle: "Conexión al espacio de datos",
      price: "€250",
      features: [
        "Adhesión técnica al espacio",
        "Gestión completa de solicitud",
        "Documentación justificativa",
        "Soporte técnico continuo",
        "Seguimiento del expediente",
      ],
      phase1: "€1.500",
      phase2: "€3.000",
      total: "€4.500",
      recommended: false,
    },
    {
      name: "NIVEL B",
      aid: "€30.000",
      subtitle: "Conexión + Transacción de datos",
      price: "€450",
      features: [
        "Todo lo del Nivel A incluido",
        "Configuración de transacciones",
        "Logs de actividad detallados",
        "Evidencias de intercambio",
        "Soporte prioritario 24/7",
      ],
      phase1: "€2.700",
      phase2: "€5.400",
      total: "€8.100",
      recommended: true,
    },
  ]

  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estructura de Precios
          </h2>
          <p className="text-gray-400 text-lg">
            Dos modalidades según el tipo de ayuda solicitada
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative ${
                plan.recommended
                  ? "bg-[#0d2847] border-2 border-cyan-500"
                  : "bg-[#0d2847]/50 border border-gray-700"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 right-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  RECOMENDADO
                </div>
              )}

              <span className="inline-block bg-[#1a3a5c] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {plan.name}
              </span>

              <p className="text-white font-semibold mb-1">Ayuda {plan.aid}</p>
              <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>

              <p className="text-5xl font-bold text-cyan-400 mb-6">
                {plan.price}<span className="text-lg font-normal text-gray-400">/mes</span>
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Phases */}
              <div className="bg-[#0a1628] rounded-xl p-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Fase 1 (6 meses)</span>
                  <span className="text-gray-400">Fase 2 (12 meses)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-semibold">{plan.phase1}</span>
                  <span className="text-white font-semibold">{plan.phase2}</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm">Valor total contrato</p>
                <p className="text-3xl font-bold text-cyan-400">{plan.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
