"use client"

import { Globe, Shield, Database, Award } from "lucide-react"

export function InvestorIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 1/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Global Data Care
          </h2>
          <p className="text-xl text-[#00A3E0] font-semibold max-w-3xl mx-auto">
            El primer ecosistema de datos de salud federados homologado en Espana
          </p>
        </div>

        {/* Main Vision Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#003399] to-[#002266] rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vision General</h3>
                <p className="text-white/70">Infraestructura EHDS en Espana</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              Global Data Care es la <span className="text-[#FFCC00] font-semibold">infraestructura operativa</span> que 
              materializa el Espacio Europeo de Datos de Salud (EHDS) en Espana. Como una de las unicas 
              <span className="text-[#FFCC00] font-semibold"> 25 entidades homologadas</span> por la SEDIA, ofrecemos un 
              entorno de soberania del dato donde la informacion <span className="text-[#FFCC00] font-semibold">nunca abandona 
              las instalaciones del propietario</span>.
            </p>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-[#003399]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#003399]/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#003399]" />
            </div>
            <h4 className="text-[#003399] font-bold text-lg mb-2">Soberania del Dato</h4>
            <p className="text-gray-600 text-sm">
              La informacion nunca abandona las instalaciones del propietario. Control total sobre los datos sensibles.
            </p>
          </div>

          <div className="bg-white border-2 border-[#00A3E0]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#00A3E0]/10 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-[#00A3E0]" />
            </div>
            <h4 className="text-[#003399] font-bold text-lg mb-2">Datos Federados</h4>
            <p className="text-gray-600 text-sm">
              Arquitectura descentralizada que permite compartir insights sin mover datos sensibles entre organizaciones.
            </p>
          </div>

          <div className="bg-white border-2 border-[#FFCC00]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#FFCC00]/20 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#003399]" />
            </div>
            <h4 className="text-[#003399] font-bold text-lg mb-2">Homologacion SEDIA</h4>
            <p className="text-gray-600 text-sm">
              Una de las 25 entidades certificadas por el Gobierno de Espana para operar en el ecosistema de datos.
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-700 font-medium text-sm">
              Infraestructura auditada y certificada por el Gobierno de Espana
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
