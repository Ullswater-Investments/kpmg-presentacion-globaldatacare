"use client"

import { Users, Calendar, TrendingUp, Target, ArrowRight } from "lucide-react"

export function GrowthStrategySection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Estrategia de Crecimiento 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Modelo de Captación y Fidelización
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            200 empresas adheridas antes de la obligatoriedad del EHDS
          </p>
        </div>

        {/* Two Phases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fase 1 */}
          <div className="bg-[#002266] border-2 border-[#FFCC00] rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#FFCC00] rounded-lg flex items-center justify-center">
                <Calendar className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FFCC00]">Fase 1</h3>
                <p className="text-white/60">Hasta 31/03/2026</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#FFCC00] shrink-0" />
                <p className="text-white">
                  <span className="font-bold text-[#FFCC00]">100 empresas</span> traccionadas por la subvención Kit Espacio de Datos
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Ingresos Fase 1</span>
                  <span className="text-white font-medium">6 cuotas mensuales (pago via ayuda)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Retención Contractual</span>
                  <span className="text-white font-medium">12 cuotas adicionales</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-3">
                  <span className="text-white/70">Ciclo de vida total</span>
                  <span className="text-[#FFCC00] font-bold text-lg">18 meses/cliente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="bg-[#002266] border border-white/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#FFCC00]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Fase 2</h3>
                <p className="text-white/60">Post-Subvención</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#FFCC00] shrink-0" />
                <p className="text-white">
                  <span className="font-bold text-[#FFCC00]">+100 empresas</span> adicionales fuera del marco de la ayuda
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Incentivo de Mercado</span>
                  <span className="text-white font-medium">50% descuento en cuotas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Objetivo</span>
                  <span className="text-white font-medium">Acelerar efecto red</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-3">
                  <span className="text-white/70">Masa crítica de datos</span>
                  <span className="text-[#FFCC00] font-bold text-lg">200 nodos activos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#FFCC00] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#003399] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-[#FFCC00]">200</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#003399]">Objetivo: 200 Empresas Adheridas</h4>
              <p className="text-[#003399]/70">Hospitales, clínicas, laboratorios y centros de salud</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#003399] font-bold">
            <span>Dominar el mercado antes del EHDS</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
