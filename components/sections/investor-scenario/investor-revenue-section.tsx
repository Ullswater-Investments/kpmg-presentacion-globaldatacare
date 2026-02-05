"use client"

import { Euro, Clock, RefreshCw, TrendingUp } from "lucide-react"

export function InvestorRevenueSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 4/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Rentabilidad y Flujo de Caja
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modelo que elimina el riesgo financiero para el cliente, asegurando captacion masiva
          </p>
        </div>

        {/* Revenue Model Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {/* Cuota Unificada */}
          <div className="bg-white rounded-2xl border-2 border-[#FFCC00] p-6 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#FFCC00] flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-[#003399]" />
            </div>
            <h3 className="text-[#003399] font-bold text-lg mb-2">Cuota Unificada</h3>
            <p className="text-gray-600 text-sm mb-4">Adhesion + Participacion mensual</p>
            <div className="bg-[#003399] rounded-xl p-4 text-center">
              <p className="text-4xl font-bold text-white">290</p>
              <p className="text-white/80 text-sm">EUR / mes</p>
            </div>
          </div>

          {/* Ingresos Diferidos */}
          <div className="bg-white rounded-2xl border-2 border-[#00A3E0]/30 p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#00A3E0] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#003399] font-bold text-lg mb-2">Ingresos Diferidos</h3>
            <p className="text-gray-600 text-sm mb-4">Primeras 6 cuotas por cliente</p>
            <div className="bg-[#00A3E0]/10 rounded-xl p-4 text-center">
              <p className="text-4xl font-bold text-[#00A3E0]">1.740</p>
              <p className="text-[#00A3E0]/80 text-sm">EUR / cliente</p>
            </div>
            <p className="text-gray-500 text-xs mt-3 text-center">
              Se recuperan tras resolucion de ayuda (15K-30K EUR)
            </p>
          </div>

          {/* Fidelizacion */}
          <div className="bg-white rounded-2xl border-2 border-emerald-200 p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#003399] font-bold text-lg mb-2">Fidelizacion</h3>
            <p className="text-gray-600 text-sm mb-4">Renovacion automatica obligatoria</p>
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <p className="text-4xl font-bold text-emerald-500">12</p>
              <p className="text-emerald-600/80 text-sm">meses adicionales</p>
            </div>
            <p className="text-gray-500 text-xs mt-3 text-center">
              Tras la fase inicial de 6 meses
            </p>
          </div>
        </div>

        {/* Cash Flow Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#003399]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#003399]" />
              </div>
              <h4 className="text-[#003399] font-bold text-xl">Proyeccion de Flujo de Caja (18 meses)</h4>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                <p className="text-gray-500 text-xs mb-1 font-medium">MES 0</p>
                <p className="text-[#003399] font-semibold text-sm mb-1">Inversion Inicial</p>
                <p className="text-red-500 font-bold text-xl">-310.000</p>
                <p className="text-red-400 text-xs">EUR</p>
              </div>
              <div className="text-center p-4 bg-[#FFCC00]/10 rounded-xl border border-[#FFCC00]/30">
                <p className="text-gray-500 text-xs mb-1 font-medium">MES 6</p>
                <p className="text-[#003399] font-semibold text-sm mb-1">Cobro Diferido</p>
                <p className="text-emerald-500 font-bold text-xl">+174.000</p>
                <p className="text-emerald-400 text-xs">EUR</p>
              </div>
              <div className="text-center p-4 bg-[#00A3E0]/10 rounded-xl border border-[#00A3E0]/30">
                <p className="text-gray-500 text-xs mb-1 font-medium">MES 12</p>
                <p className="text-[#003399] font-semibold text-sm mb-1">MRR Acumulado</p>
                <p className="text-[#00A3E0] font-bold text-xl">+174.000</p>
                <p className="text-[#00A3E0]/70 text-xs">EUR</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <p className="text-gray-500 text-xs mb-1 font-medium">MES 18</p>
                <p className="text-[#003399] font-semibold text-sm mb-1">Beneficio Neto</p>
                <p className="text-emerald-500 font-bold text-xl">+212.000</p>
                <p className="text-emerald-400 text-xs">EUR</p>
              </div>
            </div>

            {/* MRR Highlight */}
            <div className="mt-6 bg-[#003399]/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-[#003399] font-semibold">MRR (Monthly Recurring Revenue)</p>
                <p className="text-gray-500 text-sm">100 empresas x 290 EUR/mes</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#003399]">29.000</p>
                <p className="text-[#00A3E0] text-sm font-medium">EUR / mes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
