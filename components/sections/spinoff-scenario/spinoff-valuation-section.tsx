"use client"

import { Euro, Users, FileCheck, TrendingUp, Globe } from "lucide-react"

export function SpinoffValuationSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 10/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Valoracion de Mercado: Objetivo 5M EUR
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Valoracion basada en activos, recurrencia de ingresos y posicion estrategica
          </p>
        </div>

        {/* Main Valuation Card */}
        <div className="bg-[#FFCC00] rounded-2xl p-10 mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-[#003399] rounded-full flex items-center justify-center">
              <Euro className="w-10 h-10 text-white" />
            </div>
          </div>
          <p className="text-[#003399]/70 text-sm font-bold uppercase tracking-wider mb-2">
            Valoracion Objetivo Finales 2026
          </p>
          <h3 className="text-6xl md:text-7xl font-bold text-[#003399] mb-4">
            5.000.000 EUR
          </h3>
          <p className="text-[#003399]/80 text-lg max-w-2xl mx-auto">
            Basada en la masa critica de 200 usuarios activos y la recurrencia garantizada por contrato
          </p>
        </div>

        {/* Valuation Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Pillar 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00A3E0] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Activo Principal</h4>
                <p className="text-[#00A3E0] text-sm font-medium">Base de clientes</p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mb-4">
              <p className="text-4xl font-bold text-[#00A3E0]">200</p>
              <p className="text-gray-600 text-sm">Usuarios activos</p>
            </div>
            <p className="text-gray-600 text-sm">
              Clientes fidelizados bajo contrato de permanencia de 18 meses garantizados
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Derechos de Explotacion</h4>
                <p className="text-emerald-500 text-sm font-medium">100% propiedad</p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mb-4">
              <p className="text-4xl font-bold text-emerald-500">100%</p>
              <p className="text-gray-600 text-sm">Tecnologia GDC</p>
            </div>
            <p className="text-gray-600 text-sm">
              Plataforma tecnologica completa, marca y propiedad intelectual
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#FFCC00] flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#003399]" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Posicion Estrategica</h4>
                <p className="text-[#FFCC00] text-sm font-medium">EHDS Ready</p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mb-4">
              <p className="text-4xl font-bold text-[#003399]">EHDS</p>
              <p className="text-gray-600 text-sm">Mercado europeo</p>
            </div>
            <p className="text-gray-600 text-sm">
              Posicion dominante en el Espacio Europeo de Datos de Salud
            </p>
          </div>
        </div>

        {/* Revenue projection */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10 shadow-sm">
          <h4 className="text-[#003399] font-bold text-xl mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-[#FFCC00]" />
            Proyeccion de Ingresos a Diciembre 2026
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span className="text-gray-600">Fase 1: 100 clientes x 290 EUR x 18m</span>
                <span className="text-[#003399] font-bold">522.000 EUR</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span className="text-gray-600">Fase 2: 100 clientes x 290 EUR x 9m</span>
                <span className="text-[#003399] font-bold">261.000 EUR</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span className="text-gray-600">Comisiones y servicios adicionales</span>
                <span className="text-[#003399] font-bold">Variable</span>
              </div>
            </div>
            <div className="bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-xl p-6 flex flex-col justify-center">
              <p className="text-gray-600 text-sm mb-2">Ingresos Totales Proyectados</p>
              <p className="text-4xl font-bold text-[#003399]">783.000 EUR+</p>
              <p className="text-gray-500 text-sm mt-2">ARR base sin servicios adicionales</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#003399] rounded-xl p-8 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-4xl mx-auto">
            El Escenario Spin-off maximiza la velocidad de captacion y garantiza el retorno de la inversion
          </h4>
          <p className="text-white/80 max-w-2xl mx-auto">
            Con 310.000 EUR de inversion, conseguimos 200 clientes fidelizados y una valoracion de 5M EUR a finales de 2026
          </p>
        </div>
      </div>
    </section>
  )
}
