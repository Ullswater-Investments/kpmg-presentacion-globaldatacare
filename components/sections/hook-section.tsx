"use client"

import { CheckCircle, Calendar, Target, Banknote } from "lucide-react"

const hooks = [
  {
    number: "01",
    title: "El Hito",
    description: "Uno de los 25 únicos Espacios de Datos Federados homologados por SEDIA en España",
    icon: CheckCircle,
  },
  {
    number: "02",
    title: "La Oportunidad",
    description: "Acceso inmediato a ayudas 'Kit Espacio de Datos' (convocatoria abierta hasta 31/03)",
    icon: Calendar,
  },
  {
    number: "03",
    title: "El Objetivo",
    description: "Captar 100 empresas del sector salud antes del cierre de la convocatoria",
    icon: Target,
  },
  {
    number: "04",
    title: "La Necesidad",
    description: "€100k de inversión para fuerza de ventas y acceso a red de clientes de KPMG",
    icon: Banknote,
  },
]

export function HookSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(207,90%,15%)] mb-4">
            El Gancho
          </h2>
          <p className="text-lg text-[hsl(199,89%,48%)]">
            Una oportunidad única con ventana de tiempo crítica
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {hooks.map((hook) => (
            <div
              key={hook.number}
              className="bg-[hsl(210,40%,98%)] rounded-2xl p-8 relative overflow-hidden border border-gray-100 hover:border-[hsl(199,89%,48%)] transition-colors"
            >
              {/* Large number watermark */}
              <span className="absolute top-4 right-6 text-7xl font-bold text-[hsl(199,89%,48%)]/10">
                {hook.number}
              </span>
              
              <div className="relative">
                <div className="w-12 h-12 bg-[hsl(199,89%,48%)] rounded-xl flex items-center justify-center mb-6">
                  <hook.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[hsl(207,90%,15%)] mb-3">
                  {hook.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {hook.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
