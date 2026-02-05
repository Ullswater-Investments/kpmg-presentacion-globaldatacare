"use client"

import { Target, TrendingUp, Users, ArrowRight, Mail, Phone } from "lucide-react"

export function InvestorValuationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 6/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Valoracion Objetivo 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proyeccion basada en crecimiento de red y servicios de valor anadido
          </p>
        </div>

        {/* Valuation Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-[#003399] to-[#002266] rounded-2xl p-10 text-center shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-[#FFCC00] flex items-center justify-center">
                <Target className="w-10 h-10 text-[#003399]" />
              </div>
            </div>
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Valoracion Objetivo</p>
            <h3 className="text-6xl md:text-7xl font-bold text-white mb-4">5.000.000</h3>
            <p className="text-[#FFCC00] text-2xl font-semibold mb-6">EUR</p>
            
            {/* Basis for valuation */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#FFCC00]" />
                  <span className="text-white font-semibold">200 Nodos Activos</span>
                </div>
                <p className="text-white/60 text-sm">Red de empresas adheridas al ecosistema</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#FFCC00]" />
                  <span className="text-white font-semibold">Servicios Premium</span>
                </div>
                <p className="text-white/60 text-sm">Algoritmos e indicadores tecnicos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Summary */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h4 className="text-[#003399] font-bold text-xl mb-6 text-center">
              Resumen de la Oportunidad
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-1">Inversion Requerida</p>
                <p className="text-3xl font-bold text-[#003399]">310.000</p>
                <p className="text-gray-400 text-sm">EUR</p>
              </div>
              <div className="p-4 border-x border-gray-100">
                <p className="text-gray-500 text-sm mb-1">Beneficio Neto (18m)</p>
                <p className="text-3xl font-bold text-emerald-500">212.000</p>
                <p className="text-gray-400 text-sm">EUR</p>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-1">Valoracion 2026</p>
                <p className="text-3xl font-bold text-[#FFCC00]">5.000.000</p>
                <p className="text-gray-400 text-sm">EUR</p>
              </div>
            </div>
            
            {/* ROI */}
            <div className="mt-6 bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
              <p className="text-emerald-600 text-sm font-medium">ROI Potencial sobre Valoracion</p>
              <p className="text-emerald-600 text-3xl font-bold">16x</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFCC00] rounded-2xl p-8 text-center shadow-lg">
            <h4 className="text-[#003399] font-bold text-2xl mb-4">
              Unase como Socio Estrategico
            </h4>
            <p className="text-[#003399]/80 mb-6 max-w-xl mx-auto">
              Contacte con nosotros para explorar esta oportunidad unica de participar en la infraestructura 
              de datos de salud mas avanzada de Espana.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:inversores@globaldatacare.es" 
                className="inline-flex items-center gap-2 bg-[#003399] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#002266] transition-colors"
              >
                <Mail className="w-5 h-5" />
                inversores@globaldatacare.es
              </a>
              <a 
                href="tel:+34900000000" 
                className="inline-flex items-center gap-2 bg-white text-[#003399] font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border-2 border-[#003399]"
              >
                <Phone className="w-5 h-5" />
                Solicitar Reunion
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[#003399]/70">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm">Convocatoria cierra el 31/03/2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
