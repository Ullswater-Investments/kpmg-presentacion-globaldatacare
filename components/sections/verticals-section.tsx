"use client"

import { Smile, Brain, Cat, Activity, ExternalLink } from "lucide-react"

const verticals = [
  {
    category: "Dental",
    name: "Bucodental",
    description: "Primer Espacio de Datos Federado de Salud Bucodental en Europa. Conecta clínicas dentales, laboratorios protésicos, pacientes y aseguradoras.",
    url: "www.dental.globaldatacare.es",
    icon: Smile,
    color: "hsl(199, 89%, 48%)",
    bgColor: "hsl(199, 89%, 95%)",
  },
  {
    category: "Salud Mental",
    name: "Psico Global",
    description: "Espacio de Datos Clínicos de Salud Mental. Plataforma federada para el intercambio seguro de datos clínicos entre hospitales, investigadores y farmacéuticas.",
    url: "www.psico.globaldatacare.es",
    icon: Brain,
    color: "hsl(172, 66%, 50%)",
    bgColor: "hsl(172, 66%, 95%)",
  },
  {
    category: "Veterinarios",
    name: "Salud Animal",
    description: "Primer Espacio de Datos Federado de Salud Animal en Europa. Conecta clínicas veterinarias, laboratorios, tutores de mascotas y aseguradoras.",
    url: "www.veterinarios.globaldatacare.es",
    icon: Cat,
    color: "hsl(38, 92%, 50%)",
    bgColor: "hsl(38, 92%, 95%)",
  },
  {
    category: "Oncología",
    name: "Onco GlobalData",
    description: "Espacio de Datos dedicado a la investigación oncológica. Facilita el acceso a cohortes pseudonimizadas para acelerar la investigación contra el cáncer.",
    url: "www.oncologia.globaldatacare.es",
    icon: Activity,
    color: "hsl(160, 84%, 39%)",
    bgColor: "hsl(160, 84%, 95%)",
  },
]

export function VerticalsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[hsl(199,89%,48%)] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            VERTICALES DE SALUD
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(207,90%,15%)] mb-4">
            Nuestros Espacios de Datos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((vertical) => (
            <div
              key={vertical.name}
              className="bg-[hsl(210,40%,98%)] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: vertical.bgColor }}
                >
                  <vertical.icon
                    className="w-7 h-7"
                    style={{ color: vertical.color }}
                  />
                </div>
                <div className="flex-1">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: vertical.color }}
                  >
                    {vertical.category}
                  </span>
                  <h3 className="text-xl font-bold text-[hsl(207,90%,15%)] mb-2">
                    {vertical.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {vertical.description}
                  </p>
                  <a
                    href={`https://${vertical.url}`}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                    style={{ color: vertical.color }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {vertical.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
