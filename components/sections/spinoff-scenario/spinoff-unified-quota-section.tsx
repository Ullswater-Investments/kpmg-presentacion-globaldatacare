"use client"

import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export function SpinoffUnifiedQuotaSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 3/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Simplificacion de Tarifas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unificacion de las cuotas de adhesion y participacion en un unico concepto claro
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 items-center">
          {/* Before */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <span className="text-gray-500 text-sm font-medium">MODELO ANTERIOR</span>
            <h3 className="text-[#003399] font-bold text-lg mt-2 mb-4">Dos Cuotas Separadas</h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-gray-500 text-sm">Cuota de Adhesion</p>
                <p className="text-[#003399] font-semibold">Variable</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-gray-500 text-sm">Cuota de Participacion</p>
                <p className="text-[#003399] font-semibold">Variable</p>
              </div>
            </div>
            <p className="text-red-500 text-sm mt-4 font-medium">Complejidad en la decision de compra</p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="bg-[#FFCC00] rounded-full p-3">
              <ArrowRight className="w-6 h-6 text-[#003399]" />
            </div>
          </div>

          {/* After */}
          <div className="bg-[#003399]/5 border-2 border-[#003399] rounded-xl p-6">
            <span className="text-[#003399] text-sm font-medium">MODELO SPIN-OFF</span>
            <h3 className="text-[#003399] font-bold text-lg mt-2 mb-4">Cuota Unificada</h3>
            <div className="bg-[#003399] rounded-lg p-4 text-center">
              <p className="text-white/80 text-sm mb-1">Tarifa unica mensual</p>
              <p className="text-4xl font-bold text-white">290 EUR</p>
              <p className="text-white/80 text-sm mt-1">/mes</p>
            </div>
            <p className="text-emerald-600 text-sm mt-4 flex items-center gap-2 font-medium">
              <CheckCircle className="w-4 h-4" />
              Decision de compra simplificada
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#FFCC00]" />
            <h3 className="text-xl font-bold text-[#003399]">Ventajas del Modelo Simplificado</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <h4 className="text-[#003399] font-semibold mb-2">Claridad Total</h4>
              <p className="text-gray-600 text-sm">
                Un unico precio sin letra pequena ni calculos complejos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="text-[#003399] font-semibold mb-2">Conversion Rapida</h4>
              <p className="text-gray-600 text-sm">
                Facilita la decision de compra eliminando friccion
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FFCC00]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-[#FFCC00]" />
              </div>
              <h4 className="text-[#003399] font-semibold mb-2">Previsibilidad</h4>
              <p className="text-gray-600 text-sm">
                Coste fijo mensual para planificacion financiera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
