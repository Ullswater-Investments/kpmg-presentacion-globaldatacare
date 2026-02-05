"use client"

import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export function SpinoffUnifiedQuotaSection() {
  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 3/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simplificación de Tarifas
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Unificación de las cuotas de adhesión y participación en un único concepto claro
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 items-center">
          {/* Before */}
          <div className="bg-[#0d2847] border border-white/10 rounded-xl p-6">
            <span className="text-gray-500 text-sm font-medium">MODELO ANTERIOR</span>
            <h3 className="text-white font-bold text-lg mt-2 mb-4">Dos Cuotas Separadas</h3>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-sm">Cuota de Adhesión</p>
                <p className="text-white font-semibold">Variable</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-400 text-sm">Cuota de Participación</p>
                <p className="text-white font-semibold">Variable</p>
              </div>
            </div>
            <p className="text-red-400 text-sm mt-4">Complejidad en la decisión de compra</p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="bg-amber-500 rounded-full p-3">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500 rounded-xl p-6">
            <span className="text-amber-400 text-sm font-medium">MODELO SPIN-OFF</span>
            <h3 className="text-white font-bold text-lg mt-2 mb-4">Cuota Unificada</h3>
            <div className="bg-amber-500 rounded-lg p-4 text-center">
              <p className="text-white/80 text-sm mb-1">Tarifa única mensual</p>
              <p className="text-4xl font-bold text-white">290 EUR</p>
              <p className="text-white/80 text-sm mt-1">/mes</p>
            </div>
            <p className="text-emerald-400 text-sm mt-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Decisión de compra simplificada
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#0d2847] border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white">Ventajas del Modelo Simplificado</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Claridad Total</h4>
              <p className="text-gray-400 text-sm">
                Un único precio sin letra pequeña ni cálculos complejos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Conversión Rápida</h4>
              <p className="text-gray-400 text-sm">
                Facilita la decisión de compra eliminando fricción
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Previsibilidad</h4>
              <p className="text-gray-400 text-sm">
                Coste fijo mensual para planificación financiera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
