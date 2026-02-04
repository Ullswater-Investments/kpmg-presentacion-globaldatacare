"use client"

import { Building2, Euro, Sparkles } from "lucide-react"

export function SpinoffSection() {
  return (
    <section className="py-16 bg-[#0a1628]">
      {/* Top accent bar */}
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 mb-8" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            OPORTUNIDAD DE INVERSIÓN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global Data Care:<br />Futuro Spin-Off
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plataforma de negociación de datos de salud que alinea oferta y demanda, ofreciendo servicios de alto valor
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Spin-Off Info */}
          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Spin-Off de Accuro Technology</h3>
                <p className="text-cyan-400 text-sm">Entidad independiente con alto potencial</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Global Data Care está destinado a convertirse en un{" "}
              <span className="text-cyan-400 font-semibold">spin-off independiente</span> de Accuro Technology, capitalizando la tecnología desarrollada y la tracción de mercado alcanzada.
            </p>

            <div className="bg-[#0a1628] rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Naturaleza del negocio</p>
              <p className="text-gray-300">
                Plataforma de negociación de datos de salud que conecta la{" "}
                <span className="text-cyan-400">oferta</span> (clínicas, hospitales, laboratorios) con la{" "}
                <span className="text-emerald-400">demanda</span> (farmacéuticas, investigadores, aseguradoras)
              </p>
            </div>
          </div>

          {/* Valuation */}
          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Euro className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Valoración Objetivo</h3>
                <p className="text-emerald-400 text-sm">Finales de 2026</p>
              </div>
            </div>

            <div className="text-center py-8">
              <p className="text-7xl font-bold text-emerald-400 mb-2">
                5M<span className="text-3xl ml-2">EUR</span>
              </p>
              <p className="text-gray-400">Valor de mercado potencial</p>
            </div>

            <div className="bg-[#122a4a] rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm">
                Valoración basada en activos tecnológicos, base de clientes y potencial de crecimiento en el mercado europeo de datos de salud
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
