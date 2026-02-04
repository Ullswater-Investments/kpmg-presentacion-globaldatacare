"use client"

import { Award, Shield, Euro, CheckCircle, Building, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Award,
    number: "25",
    title: "Certificación Oficial",
    description: "Uno de los únicos 25 espacios de datos federados en España certificados por la Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA)",
    benefits: [
      "Homologación oficial del Ministerio",
      "Registro público verificable",
      "Auditoría de cumplimiento superada"
    ]
  },
  {
    icon: Shield,
    number: "IDSA",
    title: "Garantía de Estándares",
    description: "Esta homologación garantiza que se cumplen los estándares europeos de seguridad, interoperabilidad y cumplimiento del RGPD",
    benefits: [
      "Estándares IDSA (International Data Spaces)",
      "Interoperabilidad garantizada",
      "Cumplimiento total RGPD"
    ]
  },
  {
    icon: Euro,
    number: "30K",
    title: "Financiación NextGenerationEU",
    description: "El proyecto canaliza las ayudas del Kit Espacio de Datos para facilitar la integración técnica de las empresas",
    benefits: [
      "Hasta €30.000 a fondo perdido",
      "Financiado por NextGenerationEU",
      "Gestión integral de la solicitud"
    ]
  }
]

export function SEDIALinkSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            El Eslabón Nacional
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            SEDIA y Kit Espacios de Datos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Global Data Care actúa como el nodo español homologado que conecta 
            a las empresas del sector salud con la red europea de datos
          </p>
        </div>

        {/* Connection Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-[#003399] text-white px-6 py-3 rounded-lg font-bold">
            Empresas Salud España
          </div>
          <ArrowRight className="w-8 h-8 text-[#FFCC00] rotate-90 md:rotate-0" />
          <div className="bg-[#FFCC00] text-[#003399] px-6 py-3 rounded-lg font-bold border-2 border-[#003399]">
            Global Data Care
          </div>
          <ArrowRight className="w-8 h-8 text-[#FFCC00] rotate-90 md:rotate-0" />
          <div className="bg-[#003399] text-white px-6 py-3 rounded-lg font-bold">
            Red Europea EHDS
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="bg-[#003399] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-[#FFCC00] rounded-lg flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-[#003399]" />
                  </div>
                  <span className="text-3xl font-bold text-[#FFCC00]">{pillar.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                
                <ul className="space-y-2">
                  {pillar.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#003399] rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FFCC00] rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-[#003399]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Respaldo Institucional</h3>
              <p className="text-white/70">Ministerio de Transformación Digital</p>
            </div>
          </div>
          
          <div className="md:ml-auto text-center md:text-right">
            <p className="text-white/80 text-sm mb-2">
              Esta certificación elimina el riesgo tecnológico y regulatorio para:
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              <span className="bg-[#FFCC00] text-[#003399] px-3 py-1 rounded text-sm font-bold">Inversores</span>
              <span className="bg-[#FFCC00] text-[#003399] px-3 py-1 rounded text-sm font-bold">Empresas</span>
              <span className="bg-[#FFCC00] text-[#003399] px-3 py-1 rounded text-sm font-bold">Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
