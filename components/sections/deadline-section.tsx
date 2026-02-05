"use client"

import { Clock, TrendingUp, Target } from "lucide-react"

export function DeadlineSection() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Banner */}
        <div className="bg-[#0d2847] rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-400 flex items-center justify-center">
              <Clock className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <p className="text-cyan-400 text-sm font-medium tracking-wider">FECHA LÍMITE</p>
              <p className="text-white text-4xl font-bold">31 MARZO</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">Convocatoria abierta</p>
            <p className="text-white text-xl font-semibold">Kit Espacio de Datos</p>
            <p className="text-gray-400 text-sm">Financiado por NextGenerationEU</p>
          </div>
        </div>

        {/* Modalities */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Modalidad A */}
          <div className="bg-[#0d2847] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              MODALIDAD A
            </span>
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">
              €15.000<span className="text-lg text-gray-400 font-normal ml-2">a fondo perdido</span>
            </p>
            <p className="text-white font-semibold text-lg mb-4">Conexión al Espacio</p>
            <p className="text-gray-400 mb-6">
              Para empresas que se conecten técnicamente al espacio de datos federado.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
              <span>Menor complejidad técnica</span>
            </div>
          </div>

          {/* Modalidad B */}
          <div className="bg-[#0d2847] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              MODALIDAD B
            </span>
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">
              €30.000<span className="text-lg text-gray-400 font-normal ml-2">a fondo perdido</span>
            </p>
            <p className="text-white font-semibold text-lg mb-4">Conexión + Transacción</p>
            <p className="text-gray-400 mb-6">
              Para empresas que además de conectarse, realicen transacciones de datos.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
              <span>Mayor valor añadido</span>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="bg-[#0d2847] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-cyan-400" />
            <h3 className="text-white text-xl font-bold">Objetivo Crítico: 200 Empresas Adheridas</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Alcanzar la valoración de 5M EUR depende de conseguir <span className="text-white font-semibold">200 empresas adheridas</span> a la plataforma de espacios de datos de salud, distribuidas en dos fases:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fase 1 */}
            <div className="bg-[#122a4a] rounded-xl p-6">
              <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">FASE 1</span>
              <div className="flex justify-between items-end mb-2">
                <p className="text-4xl font-bold text-cyan-400">100</p>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Antes del</p>
                  <p className="text-cyan-400 font-semibold">31 Marzo 2026</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">empresas</p>
              <p className="text-gray-400 text-sm mt-2">→ Con Kit Espacio de Datos homologado SEDIA</p>
            </div>

            {/* Fase 2 */}
            <div className="bg-[#122a4a] rounded-xl p-6">
              <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">FASE 2</span>
              <div className="flex justify-between items-end mb-2">
                <p className="text-4xl font-bold text-emerald-400">+100</p>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Después del</p>
                  <p className="text-emerald-400 font-semibold">31 Marzo 2026</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">empresas adicionales</p>
              <p className="text-gray-400 text-sm mt-2">→ Expansión y escalado de la plataforma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
