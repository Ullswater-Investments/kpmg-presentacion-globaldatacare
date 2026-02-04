"use client"

import { Globe, Scale, Building, FileCheck } from "lucide-react"

const timeline = [
  {
    year: "2020",
    title: "Estrategia Europea",
    description: "Data Strategy de la UE para impulsar la economía del dato",
    icon: Globe,
  },
  {
    year: "2022",
    title: "Data Governance Act",
    description: "Marco legal para compartición segura de datos",
    icon: Scale,
  },
  {
    year: "2023",
    title: "SEDIA España",
    description: "Secretaría de Estado para Digitalización e IA",
    icon: Building,
  },
  {
    year: "2024",
    title: "Espacios Homologados",
    description: "Solo 25 espacios certificados en España",
    icon: FileCheck,
  },
]

export function RegulatorySection() {
  return (
    <section className="py-20 px-4 bg-[hsl(207,90%,15%)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El Marco Regulatorio
          </h2>
          <p className="text-lg text-gray-400">
            Europa impulsa la soberanía digital a través de los Espacios de Datos
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="bg-[hsl(207,50%,20%)] rounded-2xl p-6 relative"
            >
              {/* Connector line */}
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[hsl(199,89%,48%)]" />
              )}
              
              <div className="w-12 h-12 bg-[hsl(199,89%,48%)] rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              
              <span className="text-[hsl(199,89%,48%)] font-bold">{item.year}</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="bg-[hsl(207,50%,20%)] rounded-2xl p-8 flex items-center gap-6">
          <div className="w-20 h-20 bg-[hsl(199,89%,48%)] rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-3xl font-bold text-white">25</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Espacios de Datos Federados Homologados
            </h3>
            <p className="text-gray-400">
              Global Data Care es uno de los{" "}
              <span className="text-[hsl(199,89%,48%)] font-semibold">únicos 25 espacios</span>{" "}
              certificados por la SEDIA en España. Esta homologación garantiza el cumplimiento de los estándares europeos de seguridad, soberanía del dato y federación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
