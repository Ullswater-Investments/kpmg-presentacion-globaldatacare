"use client"

import { Zap, Target, FileCheck, TrendingUp } from "lucide-react"

export function SpinoffGrowthOptimizationSection() {
  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 9/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Optimización del Gasto para Crecimiento
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Uso estratégico de los fondos para maximizar captación y minimizar tiempo
          </p>
        </div>

        {/* Main strategy cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Investment Channeling */}
          <div className="bg-[#0d2847] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Canalización de Inversión</h3>
                <p className="text-cyan-400 text-sm">Enfoque estratégico</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Uso estratégico de los fondos para maximizar el <span className="text-cyan-400 font-semibold">CAC (Coste de Adquisición de Cliente)</span> y 
              reducir el <span className="text-cyan-400 font-semibold">Time-to-Market</span>.
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">CAC Objetivo</span>
                  <span className="text-cyan-400 font-bold">600 EUR</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "60%" }} />
                </div>
                <p className="text-gray-500 text-xs mt-2">60.000 EUR Marketing / 100 clientes</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Time-to-Market</span>
                  <span className="text-emerald-400 font-bold">3 meses</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "25%" }} />
                </div>
                <p className="text-gray-500 text-xs mt-2">Captación antes del 31 de marzo</p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-[#0d2847] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Gobernanza Centralizada</h3>
                <p className="text-[#FFCC00] text-sm">Gestión de expedientes</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Gestión centralizada de las <span className="text-[#FFCC00] font-semibold">justificaciones ante Red.es</span> para 
              asegurar el flujo de ingresos de la Spin-off.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Tramitación Unificada</span>
                  <p className="text-gray-400 text-sm">100 expedientes gestionados por un equipo especializado</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Generación de Evidencias</span>
                  <p className="text-gray-400 text-sm">Documentación que cumple requisitos Red.es</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Seguimiento Continuo</span>
                  <p className="text-gray-400 text-sm">Control del estado de cada solicitud de ayuda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* KPIs */}
        <div className="bg-gradient-to-r from-[#0d2847] to-[#002266] border border-white/10 rounded-xl p-8">
          <h4 className="text-white font-bold text-xl mb-6 text-center">KPIs de Éxito del Escenario Spin-off</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-7 h-7 text-cyan-400" />
              </div>
              <p className="text-3xl font-bold text-cyan-400">100</p>
              <p className="text-gray-400 text-sm">Adhesiones Q1</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-3xl font-bold text-emerald-400">90%</p>
              <p className="text-gray-400 text-sm">Tasa Aprobación</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#FFCC00]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-7 h-7 text-[#FFCC00]" />
              </div>
              <p className="text-3xl font-bold text-[#FFCC00]">600 EUR</p>
              <p className="text-gray-400 text-sm">CAC Máximo</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-7 h-7 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-amber-400">18m</p>
              <p className="text-gray-400 text-sm">LTV Mínimo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
