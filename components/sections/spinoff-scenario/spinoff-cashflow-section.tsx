"use client"

import { TrendingUp, RotateCcw, Euro, Calendar } from "lucide-react"

export function SpinoffCashflowSection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 8/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Análisis de Flujo de Caja y Retorno
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Recuperación de capital y generación de ingresos recurrentes
          </p>
        </div>

        {/* Two main cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Capital Recovery */}
          <div className="bg-[#002266] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <RotateCcw className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Recuperación de Capital</h3>
                <p className="text-emerald-400 text-sm">Post-subvención</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 mb-6">
              <p className="text-gray-400 text-sm mb-2">Capital adelantado a recuperar</p>
              <p className="text-4xl font-bold text-emerald-400">174.000 EUR</p>
            </div>

            <p className="text-gray-300 mb-4">
              El capital de <span className="text-emerald-400 font-semibold">174.000 EUR</span> adelantado 
              se recupera una vez que los clientes perciben la subvención del Kit Espacio de Datos.
            </p>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>Tiempo estimado de recuperación: 6-9 meses tras adhesión</span>
            </div>
          </div>

          {/* Recurring Revenue */}
          <div className="bg-[#002266] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Ingresos Recurrentes</h3>
                <p className="text-[#FFCC00] text-sm">Post-financiación inicial</p>
              </div>
            </div>

            <div className="bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-xl p-5 mb-6">
              <p className="text-gray-400 text-sm mb-2">MRR con 100 clientes</p>
              <p className="text-4xl font-bold text-[#FFCC00]">29.000 EUR</p>
              <p className="text-gray-500 text-sm mt-1">/mes</p>
            </div>

            <p className="text-gray-300 mb-4">
              Generación de <span className="text-[#FFCC00] font-semibold">29.000 EUR mensuales</span> en 
              cuotas puras tras el periodo de financiación inicial (100 x 290 EUR).
            </p>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Euro className="w-5 h-5 text-[#FFCC00]" />
              <span>ARR proyectado: 348.000 EUR (12 meses de renovación)</span>
            </div>
          </div>
        </div>

        {/* Cash flow timeline */}
        <div className="bg-[#002266] border border-white/10 rounded-xl p-8">
          <h4 className="text-white font-bold text-xl mb-6 text-center">Proyección de Flujo de Caja</h4>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-white/20 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Month 0 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M0</span>
                </div>
                <h5 className="text-white font-semibold mb-1">Inversión Inicial</h5>
                <p className="text-red-400 font-bold">-324.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Desembolso total</p>
              </div>

              {/* Month 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-[#003399] font-bold">M6</span>
                </div>
                <h5 className="text-white font-semibold mb-1">Recuperación</h5>
                <p className="text-emerald-400 font-bold">+174.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Cobro subvenciones</p>
              </div>

              {/* Month 12 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M12</span>
                </div>
                <h5 className="text-white font-semibold mb-1">Ingresos MRR</h5>
                <p className="text-cyan-400 font-bold">+174.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">6 meses x 29K</p>
              </div>

              {/* Month 18 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M18</span>
                </div>
                <h5 className="text-white font-semibold mb-1">Beneficio Neto</h5>
                <p className="text-emerald-400 font-bold">+198.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Total acumulado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
