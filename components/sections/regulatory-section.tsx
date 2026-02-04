"use client"

import { Globe, Scale, Building, FileCheck, Shield, Award, Euro } from "lucide-react"

const timeline = [
  {
    year: "2020",
    title: "Estrategia Europea de Datos",
    description: "Data Strategy de la UE para impulsar la soberanía digital y la economía del dato en Europa",
    icon: Globe,
  },
  {
    year: "2022",
    title: "Data Governance Act",
    description: "Marco legal que establece las reglas para la compartición segura y confiable de datos",
    icon: Scale,
  },
  {
    year: "2023",
    title: "SEDIA España",
    description: "Secretaría de Estado de Digitalización e Inteligencia Artificial implementa el marco nacional",
    icon: Building,
  },
  {
    year: "2024",
    title: "Espacios Homologados",
    description: "Solo 25 espacios certificados en España. Global Data Care es uno de ellos",
    icon: FileCheck,
  },
]

const pillars = [
  {
    icon: Award,
    title: "Homologación Oficial",
    description: "Global Data Care es uno de los únicos 25 espacios de datos federados certificados por SEDIA en España",
  },
  {
    icon: Shield,
    title: "Garantía de Estándares",
    description: "Certificación que asegura cumplimiento de requisitos de seguridad, soberanía del dato e interoperabilidad",
  },
  {
    icon: Euro,
    title: "Vehículo de Financiación",
    description: "Canalizador de ayudas Kit Espacio de Datos (15.000€ - 30.000€) financiadas por NextGenerationEU",
  },
]

export function RegulatorySection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Alineación Estratégica
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marco Regulatorio Europeo
          </h2>
          <p className="text-lg text-white/70 max-w-3xl">
            Global Data Care nace como respuesta directa a la Estrategia Europea de Datos y al Data Governance Act, 
            impulsando la soberanía digital y la compartición segura de información en el sector salud.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="bg-[#002266] border border-[#FFCC00]/20 rounded-lg p-6 relative"
            >
              {/* Connector line */}
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#FFCC00]" />
              )}
              
              <div className="w-12 h-12 bg-[#FFCC00] rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#003399]" />
              </div>
              
              <span className="text-[#FFCC00] font-bold text-lg">{item.year}</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Pillars - SEDIA Connection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Vínculo con la Iniciativa Nacional (SEDIA y Kit Espacios de Datos)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-lg flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-[#FFCC00]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight - 25 spaces */}
        <div className="bg-[#FFCC00] rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-[#003399] rounded-lg flex items-center justify-center shrink-0">
            <span className="text-4xl font-bold text-[#FFCC00]">25</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#003399] mb-2">
              Espacios de Datos Federados Homologados en España
            </h3>
            <p className="text-[#003399]/80">
              Global Data Care es uno de los{" "}
              <span className="font-bold">únicos 25 espacios certificados</span>{" "}
              por la SEDIA. Esta homologación garantiza el cumplimiento de los estándares europeos de seguridad, 
              soberanía del dato y federación, eliminando el riesgo tecnológico para los inversores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
