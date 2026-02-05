"use client"

import { Target, Calendar, Award, Building2 } from "lucide-react"

export function SpinoffCriticalMilestoneSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 4/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            El Hito Critico: 100 Adhesiones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Objetivo fundamental para acceder a las ayudas del Kit Espacio de Datos
          </p>
        </div>

        {/* Main Target */}
        <div className="bg-[#FFCC00] rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-10 h-10 text-[#003399]" />
                <span className="text-[#003399] font-bold text-lg">META PRINCIPAL</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-[#003399] mb-4">
                100 Empresas
              </h3>
              <p className="text-[#003399]/80 text-lg">
                Adheridas antes del cierre de la convocatoria publica
              </p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-[#003399]" />
                <span className="text-[#003399] font-bold">FECHA LIMITE</span>
              </div>
              <p className="text-4xl font-bold text-[#003399]">31 Marzo</p>
              <p className="text-[#003399]/70">Cierre convocatoria Kit Espacio de Datos</p>
            </div>
          </div>
        </div>

        {/* Aid amounts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Proyectos en Desarrollo</h4>
                <p className="text-emerald-500 text-sm font-medium">Madurez inicial</p>
              </div>
            </div>
            <p className="text-4xl font-bold text-emerald-500 mb-2">15.000 EUR</p>
            <p className="text-gray-600 text-sm">
              Ayuda para proyectos en fase inicial de madurez tecnologica
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00A3E0] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Proyectos Maduros</h4>
                <p className="text-[#00A3E0] text-sm font-medium">Alto nivel de desarrollo</p>
              </div>
            </div>
            <p className="text-4xl font-bold text-[#00A3E0] mb-2">30.000 EUR</p>
            <p className="text-gray-600 text-sm">
              Ayuda para proyectos con alto nivel de madurez y trayectoria demostrada
            </p>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-[#003399]/5 border border-[#003399]/20 rounded-xl p-6 flex items-start gap-4">
          <Building2 className="w-8 h-8 text-[#003399] flex-shrink-0" />
          <div>
            <h4 className="text-[#003399] font-bold mb-2">Tramitacion Individual</h4>
            <p className="text-gray-600">
              La cantidad solicitada dependera del estado de madurez del proyecto individual de cada uno de los solicitantes.
              Global Data Care gestiona la tramitacion de todas las solicitudes ante Red.es.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
