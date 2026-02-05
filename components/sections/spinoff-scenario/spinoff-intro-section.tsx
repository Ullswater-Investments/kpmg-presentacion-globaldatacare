"use client"

import { Building2, Rocket, Target, Zap } from "lucide-react"

export function SpinoffIntroSection() {
  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 1/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Concepto de la Nueva Entidad
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Creación de una unidad de negocio independiente para maximizar la captación de usuarios
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-[#0d2847] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Visión Estratégica</h3>
                <p className="text-amber-400 text-sm">Nueva Entidad Independiente</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Creación de una unidad de negocio <span className="text-amber-400 font-semibold">independiente</span> dedicada 
              exclusivamente a la explotación de Global Data Care, separada de Accuro Technology para maximizar 
              agilidad y enfoque.
            </p>

            <div className="bg-[#0a1628] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-amber-400" />
                <span className="text-white font-semibold">Objetivo Principal</span>
              </div>
              <p className="text-gray-400 text-sm">
                Canalizar la inversión externa de forma eficiente y lograr el máximo número de usuarios en tiempo récord
              </p>
            </div>
          </div>

          {/* Agility Card */}
          <div className="bg-[#0d2847] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Agilidad Operativa</h3>
                <p className="text-cyan-400 text-sm">Estructura Optimizada</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Decisiones Rápidas</span>
                  <p className="text-gray-400 text-sm">Estructura diseñada para toma de decisiones ágil sin burocracia corporativa</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Inversión Canalizada</span>
                  <p className="text-gray-400 text-sm">100% de los fondos dirigidos a captación y operación del espacio de datos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Time-to-Market</span>
                  <p className="text-gray-400 text-sm">Reducción drástica del tiempo de captación y onboarding de clientes</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
