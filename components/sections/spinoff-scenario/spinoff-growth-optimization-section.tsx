"use client"

import { Zap, Target, FileCheck, TrendingUp } from "lucide-react"

export function SpinoffGrowthOptimizationSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 9/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Optimizacion del Gasto para Crecimiento
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uso estrategico de los fondos para maximizar captacion y minimizar tiempo
          </p>
        </div>

        {/* Main strategy cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Investment Channeling */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Canalizacion de Inversion</h3>
                <p className="text-[#00A3E0] text-sm font-medium">Enfoque estrategico</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Uso estrategico de los fondos para maximizar el <span className="text-[#00A3E0] font-semibold">CAC (Coste de Adquisicion de Cliente)</span> y 
              reducir el <span className="text-[#00A3E0] font-semibold">Time-to-Market</span>.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#003399] font-medium">CAC Objetivo</span>
                  <span className="text-[#00A3E0] font-bold">600 EUR</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#00A3E0] h-2 rounded-full" style={{ width: "60%" }} />
                </div>
                <p className="text-gray-500 text-xs mt-2">60.000 EUR Marketing / 100 clientes</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#003399] font-medium">Time-to-Market</span>
                  <span className="text-emerald-500 font-bold">3 meses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "25%" }} />
                </div>
                <p className="text-gray-500 text-xs mt-2">Captacion antes del 31 de marzo</p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Gobernanza Centralizada</h3>
                <p className="text-[#FFCC00] text-sm font-medium">Gestion de expedientes</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Gestion centralizada de las <span className="text-[#003399] font-semibold">justificaciones ante Red.es</span> para 
              asegurar el flujo de ingresos de la Spin-off.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Tramitacion Unificada</span>
                  <p className="text-gray-600 text-sm">100 expedientes gestionados por un equipo especializado</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Generacion de Evidencias</span>
                  <p className="text-gray-600 text-sm">Documentacion que cumple requisitos Red.es</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Seguimiento Continuo</span>
                  <p className="text-gray-600 text-sm">Control del estado de cada solicitud de ayuda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* KPIs */}
        <div className="bg-[#003399] rounded-xl p-8">
          <h4 className="text-white font-bold text-xl mb-6 text-center">KPIs de Exito del Escenario Spin-off</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <p className="text-3xl font-bold text-[#00A3E0]">100</p>
              <p className="text-white/70 text-sm">Adhesiones Q1</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-3xl font-bold text-emerald-400">90%</p>
              <p className="text-white/70 text-sm">Tasa Aprobacion</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-7 h-7 text-[#FFCC00]" />
              </div>
              <p className="text-3xl font-bold text-[#FFCC00]">600 EUR</p>
              <p className="text-white/70 text-sm">CAC Maximo</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl font-bold text-white">18m</p>
              <p className="text-white/70 text-sm">LTV Minimo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
