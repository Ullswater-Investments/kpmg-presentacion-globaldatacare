"use client"

import { Stethoscope, Brain, PawPrint, Building2 } from "lucide-react"

export function ActiveVerticalsSection() {
  const verticals = [
    {
      icon: Stethoscope,
      title: "Salud Bucodental",
      items: ["Clínicas dentales", "Laboratorios protésicos", "Distribuidores de material"],
      count: "15.000+",
      color: "bg-cyan-500",
    },
    {
      icon: Brain,
      title: "Psiquiatría",
      items: ["Centros de salud mental", "Consultas privadas", "Hospitales de día"],
      count: "8.000+",
      color: "bg-amber-500",
    },
    {
      icon: PawPrint,
      title: "Salud Animal",
      items: ["Clínicas veterinarias", "Hospitales veterinarios", "Laboratorios de análisis"],
      count: "6.000+",
      color: "bg-amber-500",
    },
    {
      icon: Building2,
      title: "Generalista",
      items: ["Hospitales generales", "Aseguradoras", "Farmacias y distribuidores"],
      count: "20.000+",
      color: "bg-cyan-500",
    },
  ]

  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            SECTOR SALUD
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Verticales Activas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Operamos sub-espacios especializados en diferentes áreas del sector salud
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {verticals.map((vertical) => (
            <div key={vertical.title} className="bg-[#0d2847] rounded-2xl p-6 hover:bg-[#122a4a] transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${vertical.color} flex items-center justify-center flex-shrink-0`}>
                  <vertical.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-3">{vertical.title}</h3>
                  <ul className="space-y-1 mb-4">
                    {vertical.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-3xl font-bold text-cyan-400">
                    {vertical.count}
                    <span className="text-sm font-normal text-gray-400 ml-2">empresas potenciales</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
