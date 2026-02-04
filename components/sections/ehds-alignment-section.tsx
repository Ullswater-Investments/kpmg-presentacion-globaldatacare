"use client"

import { Globe, Scale, Shield, Database, Lock, Share2 } from "lucide-react"

const regulations = [
  {
    icon: Globe,
    title: "European Health Data Space (EHDS)",
    subtitle: "Reglamento Sectorial EU",
    description: "Marco común de intercambio de datos electrónicos de salud en toda la Unión Europea. Global Data Care implementa este estándar en España.",
    highlight: true,
  },
  {
    icon: Scale,
    title: "Data Strategy 2020 & Data Governance Act 2022",
    subtitle: "Gobernanza de Datos",
    description: "Proporciona el marco legal y la gobernanza para la compartición segura de datos entre organizaciones y países.",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Soberanía Digital Europea",
    subtitle: "Modelo de Federación",
    description: "Los datos nunca abandonan las instalaciones del propietario. Solo se comparten metadatos y resultados agregados.",
    highlight: false,
  },
]

export function EHDSAlignmentSection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Conexión con Europa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alineación con el Marco Regulatorio Europeo
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Global Data Care no es una iniciativa aislada, sino la ejecución práctica 
            de los pilares legislativos de la Unión Europea en el sector salud
          </p>
        </div>

        {/* Main Visual - Europe Connection */}
        <div className="relative mb-12">
          {/* Central Hub */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-[#FFCC00] rounded-full flex items-center justify-center mb-4 relative">
              <Database className="w-16 h-16 text-[#003399]" />
              {/* EU Stars around */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 text-[#003399]"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-58px)`,
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">Global Data Care</h3>
            <p className="text-[#FFCC00] font-medium">Infraestructura Operativa en España</p>
          </div>

          {/* Connection lines visual */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#FFCC00]/50" />
            <Share2 className="w-6 h-6 text-[#FFCC00]" />
            <div className="h-px w-16 bg-[#FFCC00]/50" />
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {regulations.map((reg) => (
            <div
              key={reg.title}
              className={`rounded-lg p-6 border ${
                reg.highlight 
                  ? 'bg-[#FFCC00] border-[#FFCC00] text-[#003399]' 
                  : 'bg-[#002266] border-[#FFCC00]/20 text-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                reg.highlight ? 'bg-[#003399]' : 'bg-[#FFCC00]'
              }`}>
                <reg.icon className={`w-7 h-7 ${reg.highlight ? 'text-[#FFCC00]' : 'text-[#003399]'}`} />
              </div>
              
              <span className={`text-xs font-bold uppercase tracking-wider ${
                reg.highlight ? 'text-[#003399]/60' : 'text-[#FFCC00]'
              }`}>
                {reg.subtitle}
              </span>
              
              <h3 className={`text-lg font-bold mt-1 mb-3 ${
                reg.highlight ? 'text-[#003399]' : 'text-white'
              }`}>
                {reg.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                reg.highlight ? 'text-[#003399]/80' : 'text-white/70'
              }`}>
                {reg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="bg-[#002266] border border-[#FFCC00]/30 rounded-lg p-6 text-center">
          <Shield className="w-10 h-10 text-[#FFCC00] mx-auto mb-4" />
          <p className="text-white text-lg max-w-2xl mx-auto">
            <span className="font-bold text-[#FFCC00]">Global Data Care materializa la visión europea en España</span>, 
            actuando como la infraestructura operativa que permite a las empresas del sector salud 
            cumplir con los estándares europeos de intercambio de datos.
          </p>
        </div>
      </div>
    </section>
  )
}
