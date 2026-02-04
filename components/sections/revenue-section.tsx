"use client"

import { Calendar, TrendingUp } from "lucide-react"

export function RevenueSection() {
  return (
    <section className="py-16 bg-[#eef4f8]">
      {/* Top accent */}
      <div className="h-1 bg-cyan-500 mb-8" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            PROYECCIÓN DE INGRESOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628]">
            Escenario Base: 100 Clientes
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#eef4f8] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Fase 1</p>
                <p className="text-sm text-cyan-500">Meses 1-6</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Clientes</span>
                <span className="font-semibold text-[#0a1628]">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cuota media</span>
                <span className="font-semibold text-[#0a1628]">€350/mes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Facturación mensual</span>
                <span className="font-semibold text-[#0a1628]">€35.000</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="text-gray-600">Total Fase 1</span>
                <span className="font-bold text-2xl text-cyan-500">€210.000</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#eef4f8] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Fase 2</p>
                <p className="text-sm text-cyan-500">Meses 7-18</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Clientes retenidos</span>
                <span className="font-semibold text-[#0a1628]">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cuota media</span>
                <span className="font-semibold text-[#0a1628]">€350/mes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duración</span>
                <span className="font-semibold text-[#0a1628]">12 meses</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="text-gray-600">Total Fase 2</span>
                <span className="font-bold text-2xl text-cyan-500">€420.000</span>
              </div>
            </div>
          </div>

          {/* Total Pipeline */}
          <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Total Pipeline</p>
                <p className="text-sm text-cyan-500">18 meses</p>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-6xl font-bold text-cyan-500 mb-2">€630K</p>
              <p className="text-gray-600">Valor del contrato generado</p>
            </div>

            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-gray-500 text-sm">Facturación media mensual</p>
              <p className="text-2xl font-bold text-[#0a1628]">€35.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
