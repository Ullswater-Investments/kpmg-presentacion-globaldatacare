"use client"

import { Users, Building2, Handshake, Target } from "lucide-react"

export function InvestorOpportunitySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 2/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Oportunidad Estrategica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buscamos socios estrategicos del sector salud para constituir una Spin-off
          </p>
        </div>

        {/* Main Opportunity Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border-2 border-[#FFCC00] rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <Handshake className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-2xl">Modelo de Inversion</h3>
                <p className="text-gray-500">Constitucion de Spin-off</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Buscamos <span className="text-[#003399] font-semibold">socios estrategicos del sector salud</span> para 
              constituir una Spin-off que gestione integramente los <span className="text-[#003399] font-semibold">derechos 
              de explotacion y cobro</span> del ecosistema Global Data Care.
            </p>
            <div className="bg-[#003399]/5 rounded-xl p-4 border-l-4 border-[#003399]">
              <p className="text-[#003399] font-medium">
                Oportunidad unica de participar en la infraestructura de datos de salud mas avanzada de Espana
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#00A3E0]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold text-lg mb-2">Derechos de Explotacion</h4>
                <p className="text-gray-600 text-sm">
                  Gestion integral de los derechos comerciales del ecosistema, incluyendo todas las fuentes de ingresos recurrentes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold text-lg mb-2">Red de Clientes</h4>
                <p className="text-gray-600 text-sm">
                  Acceso a una red creciente de clinicas, laboratorios y centros de salud que necesitan cumplir con EHDS.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#003399]" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold text-lg mb-2">Subvenciones NextGenerationEU</h4>
                <p className="text-gray-600 text-sm">
                  Acceso exclusivo a ayudas Kit Digital Espacio de Datos antes del cierre de convocatoria (31/03/2026).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold text-lg mb-2">Socio Estrategico</h4>
                <p className="text-gray-600 text-sm">
                  Posicionamiento como referente en el ecosistema de datos de salud europeo con ventaja competitiva duradera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
