"use client"

import { Stethoscope, Brain, Microscope, Heart } from "lucide-react"

const verticals = [
  {
    icon: Stethoscope,
    title: "Bucodental",
    color: "#00B4D8",
    participants: ["Clínicas dentales", "Laboratorios protésicos", "Pacientes", "Aseguradoras"],
    objective: "Conectar la cadena de valor dental en el primer espacio federado de este tipo en Europa",
    stats: "15.000+ empresas potenciales",
  },
  {
    icon: Brain,
    title: "Salud Mental",
    color: "#7B2CBF",
    participants: ["Hospitales", "Investigadores", "Farmacéuticas", "Centros de salud mental"],
    objective: "Intercambio seguro de datos clínicos para investigación y mejora asistencial",
    stats: "8.000+ empresas potenciales",
  },
  {
    icon: Microscope,
    title: "Oncología",
    color: "#06D6A0",
    participants: ["Centros de investigación", "Hospitales", "Farmacéuticas", "Laboratorios"],
    objective: "Facilitar acceso a cohortes pseudonimizadas para acelerar la lucha contra el cáncer",
    stats: "Investigación oncológica",
  },
  {
    icon: Heart,
    title: "Salud Animal",
    color: "#FF6B35",
    participants: ["Clínicas veterinarias", "Laboratorios", "Tutores de mascotas", "Aseguradoras"],
    objective: "Primer espacio de datos federado de salud animal en Europa",
    stats: "6.000+ empresas potenciales",
  },
]

export function EcosystemSection() {
  return (
    <section className="py-20 px-4 bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Interconexión
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Ecosistema de Salud Federado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Global Data Care estructura el ecosistema de salud mediante una infraestructura federada 
            donde los datos nunca abandonan las instalaciones del propietario
          </p>
        </div>

        {/* Central Hub Visual */}
        <div className="relative mb-12">
          {/* Center circle */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#003399] rounded-full items-center justify-center z-10">
            <div className="text-center">
              <span className="text-[#FFCC00] font-bold text-sm block">GLOBAL</span>
              <span className="text-white font-bold text-sm block">DATA CARE</span>
            </div>
          </div>

          {/* Verticals Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${vertical.color}20` }}
                  >
                    <vertical.icon 
                      className="w-7 h-7" 
                      style={{ color: vertical.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#003399]">{vertical.title}</h3>
                      <span 
                        className="text-xs font-semibold px-2 py-1 rounded"
                        style={{ backgroundColor: `${vertical.color}20`, color: vertical.color }}
                      >
                        {vertical.stats}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {vertical.objective}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {vertical.participants.map((participant) => (
                        <span 
                          key={participant}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-[#003399] rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(12)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 text-[#FFCC00] mx-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Infraestructura Federada
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Solo se comparten <span className="text-[#FFCC00] font-semibold">metadatos y resultados agregados</span>. 
            Los datos sensibles permanecen siempre en las instalaciones del propietario, 
            garantizando el cumplimiento total con RGPD y normativa europea.
          </p>
        </div>
      </div>
    </section>
  )
}
