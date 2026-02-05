"use client"

import { Target, Calendar, Award, Building2 } from "lucide-react"

export function SpinoffCriticalMilestoneSection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 4/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El Hito Crítico: 100 Adhesiones
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
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
                Adheridas antes del cierre de la convocatoria pública
              </p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-[#003399]" />
                <span className="text-[#003399] font-bold">FECHA LÍMITE</span>
              </div>
              <p className="text-4xl font-bold text-[#003399]">31 Marzo</p>
              <p className="text-[#003399]/70">Cierre convocatoria Kit Espacio de Datos</p>
            </div>
          </div>
        </div>

        {/* Aid amounts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#002266] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Proyectos en Desarrollo</h4>
                <p className="text-emerald-400 text-sm">Madurez inicial</p>
              </div>
            </div>
            <p className="text-4xl font-bold text-emerald-400 mb-2">15.000 EUR</p>
            <p className="text-gray-400 text-sm">
              Ayuda para proyectos en fase inicial de madurez tecnológica
            </p>
          </div>

          <div className="bg-[#002266] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Proyectos Maduros</h4>
                <p className="text-cyan-400 text-sm">Alto nivel de desarrollo</p>
              </div>
            </div>
            <p className="text-4xl font-bold text-cyan-400 mb-2">30.000 EUR</p>
            <p className="text-gray-400 text-sm">
              Ayuda para proyectos con alto nivel de madurez y trayectoria demostrada
            </p>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4">
          <Building2 className="w-8 h-8 text-[#FFCC00] flex-shrink-0" />
          <div>
            <h4 className="text-white font-bold mb-2">Tramitación Individual</h4>
            <p className="text-white/70">
              La cantidad solicitada dependerá del estado de madurez del proyecto individual de cada uno de los solicitantes.
              Global Data Care gestiona la tramitación de todas las solicitudes ante Red.es.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
