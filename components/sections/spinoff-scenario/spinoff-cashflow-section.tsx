"use client"

import { TrendingUp, RotateCcw, Euro, Calendar } from "lucide-react"

export function SpinoffCashflowSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 8/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Analisis de Flujo de Caja y Retorno
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recuperacion de ingresos diferidos y generacion de ingresos recurrentes
          </p>
        </div>

        {/* Two main cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Deferred Revenue Recovery */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <RotateCcw className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Ingresos Diferidos</h3>
                <p className="text-emerald-500 text-sm font-medium">Cobro post-subvencion</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
              <p className="text-gray-600 text-sm mb-2">Cuotas a cobrar tras aprobacion de ayuda</p>
              <p className="text-4xl font-bold text-emerald-500">174.000 EUR</p>
              <p className="text-gray-500 text-xs mt-1">100 clientes x 290 EUR x 6 meses</p>
            </div>

            <p className="text-gray-700 mb-4">
              Las <span className="text-emerald-500 font-semibold">cuotas de los 6 primeros meses</span> se cobran 
              una vez los clientes reciben la subvencion del Kit Espacio de Datos (no es un gasto, es un ingreso diferido).
            </p>

            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Calendar className="w-5 h-5 text-emerald-500" />
              <span>Tiempo estimado de cobro: 6-9 meses tras adhesion</span>
            </div>
          </div>

          {/* Recurring Revenue */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Ingresos Recurrentes</h3>
                <p className="text-[#FFCC00] text-sm font-medium">Post-periodo inicial</p>
              </div>
            </div>

            <div className="bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-xl p-5 mb-6">
              <p className="text-gray-600 text-sm mb-2">MRR con 100 clientes</p>
              <p className="text-4xl font-bold text-[#003399]">29.000 EUR</p>
              <p className="text-gray-500 text-sm mt-1">/mes</p>
            </div>

            <p className="text-gray-700 mb-4">
              Generacion de <span className="text-[#003399] font-semibold">29.000 EUR mensuales</span> en 
              cuotas puras durante los 12 meses de renovacion obligatoria (100 x 290 EUR).
            </p>

            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Euro className="w-5 h-5 text-[#FFCC00]" />
              <span>ARR proyectado: 348.000 EUR (12 meses de renovacion)</span>
            </div>
          </div>
        </div>

        {/* Cash flow timeline */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h4 className="text-[#003399] font-bold text-xl mb-6 text-center">Proyeccion de Flujo de Caja</h4>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Month 0 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M0</span>
                </div>
                <h5 className="text-[#003399] font-semibold mb-1">Inversion Inicial</h5>
                <p className="text-red-500 font-bold">-310.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Desembolso total</p>
              </div>

              {/* Month 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-[#003399] font-bold">M6</span>
                </div>
                <h5 className="text-[#003399] font-semibold mb-1">Cobro Diferido</h5>
                <p className="text-emerald-500 font-bold">+174.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Cuotas 6 meses iniciales</p>
              </div>

              {/* Month 12 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00A3E0] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M12</span>
                </div>
                <h5 className="text-[#003399] font-semibold mb-1">Ingresos MRR</h5>
                <p className="text-[#00A3E0] font-bold">+174.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">6 meses x 29K</p>
              </div>

              {/* Month 18 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">M18</span>
                </div>
                <h5 className="text-[#003399] font-semibold mb-1">Beneficio Neto</h5>
                <p className="text-emerald-500 font-bold">+212.000 EUR</p>
                <p className="text-gray-500 text-xs mt-1">Total acumulado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
