"use client"

import { Database, Lock, Share2, ArrowLeftRight, Building2, Stethoscope, Shield } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Soberanía del Dato",
    description: "Los datos nunca abandonan las instalaciones del propietario. Solo se comparten metadatos y resultados agregados.",
  },
  {
    icon: Share2,
    title: "Federación Segura",
    description: "Múltiples organizaciones colaboran sin ceder control. Cumplimiento total con RGPD y normativa europea.",
  },
  {
    icon: ArrowLeftRight,
    title: "Interoperabilidad",
    description: "Estándares abiertos que permiten la conexión entre diferentes sistemas y sectores industriales.",
  },
]

const entities = [
  { name: "Hospital A", icon: Building2 },
  { name: "Clínica B", icon: Stethoscope },
  { name: "Aseguradora C", icon: Shield },
]

export function TechnologySection() {
  return (
    <section className="py-20 px-4 bg-[hsl(210,40%,96%)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[hsl(199,89%,48%)] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            TECNOLOGÍA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(207,90%,15%)]">
            ¿Qué es un Espacio<br />de Datos Federado?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Diagram */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="flex flex-col items-center">
              {/* Central database */}
              <div className="w-28 h-28 bg-[hsl(199,89%,95%)] rounded-full flex items-center justify-center border-4 border-dashed border-[hsl(199,89%,48%)] mb-8">
                <div className="w-20 h-20 bg-[hsl(199,89%,48%)] rounded-full flex items-center justify-center">
                  <Database className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[hsl(207,90%,15%)] mb-8">
                Espacio de Datos Federado
              </h3>
              
              {/* Connection lines */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-16 h-0.5 bg-[hsl(199,89%,48%)]" />
                <div className="w-16 h-0.5 bg-[hsl(199,89%,48%)]" />
                <div className="w-16 h-0.5 bg-[hsl(199,89%,48%)]" />
              </div>
              
              {/* Entities */}
              <div className="flex justify-center gap-8">
                {entities.map((entity) => (
                  <div key={entity.name} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-[hsl(199,89%,48%)] rounded-xl flex items-center justify-center mb-2">
                      <entity.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{entity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[hsl(199,89%,48%)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsl(199,89%,95%)] rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-[hsl(199,89%,48%)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[hsl(207,90%,15%)] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
