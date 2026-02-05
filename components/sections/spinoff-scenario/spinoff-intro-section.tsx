"use client"

import { Building2, Rocket, Target, Zap } from "lucide-react"

export function SpinoffIntroSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 1/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Concepto de la Nueva Entidad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creacion de una unidad de negocio independiente para maximizar la captacion de usuarios
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Vision Estrategica</h3>
                <p className="text-[#FFCC00] text-sm font-medium">Nueva Entidad Independiente</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Creacion de una unidad de negocio <span className="text-[#003399] font-semibold">independiente</span> dedicada 
              exclusivamente a la explotacion de Global Data Care, separada de Accuro Technology para maximizar 
              agilidad y enfoque.
            </p>

            <div className="bg-[#003399]/5 rounded-xl p-5 border border-[#003399]/10">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-[#003399]" />
                <span className="text-[#003399] font-semibold">Objetivo Principal</span>
              </div>
              <p className="text-gray-600 text-sm">
                Canalizar la inversion externa de forma eficiente y lograr el maximo numero de usuarios en tiempo record
              </p>
            </div>
          </div>

          {/* Agility Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Agilidad Operativa</h3>
                <p className="text-[#00A3E0] text-sm font-medium">Estructura Optimizada</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Decisiones Rapidas</span>
                  <p className="text-gray-600 text-sm">Estructura disenada para toma de decisiones agil sin burocracia corporativa</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Inversion Canalizada</span>
                  <p className="text-gray-600 text-sm">100% de los fondos dirigidos a captacion y operacion del espacio de datos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#003399] font-medium">Time-to-Market</span>
                  <p className="text-gray-600 text-sm">Reduccion drastica del tiempo de captacion y onboarding de clientes</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
