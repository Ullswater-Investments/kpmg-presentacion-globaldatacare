"use client"

import { Award, CheckCircle, Star } from "lucide-react"

const requirements = [
  "Cumplimiento RGPD",
  "Estándares IDSA",
  "Certificación SEDIA",
  "Auditoría técnica superada",
  "Infraestructura federada",
  "Protocolos de seguridad",
]

export function CredibilitySection() {
  return (
    <section className="py-20 px-4 bg-[hsl(210,40%,96%)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[hsl(199,89%,48%)] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            CREDIBILIDAD
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(207,90%,15%)] mb-4">
            Homologación SEDIA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            El riesgo tecnológico ya está superado. Estamos certificados por el Gobierno de España.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certificate Card */}
          <div className="bg-gradient-to-br from-[hsl(199,89%,55%)] to-[hsl(199,89%,45%)] rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Decorative stars */}
            <Star className="absolute top-6 left-6 w-5 h-5 text-white/30" fill="currentColor" />
            <Star className="absolute top-6 right-6 w-5 h-5 text-white/30" fill="currentColor" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">CERTIFICADO OFICIAL</h3>
              <p className="text-white/80 text-sm mb-8">
                Secretaría de Estado de Digitalización e Inteligencia Artificial
              </p>
              
              <div className="bg-[hsl(199,89%,40%)] rounded-2xl py-6 px-10 mb-6">
                <span className="text-5xl font-bold">25</span>
                <p className="text-sm text-white/80">Espacios homologados en España</p>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Global Data Care</span>
              </div>
            </div>
          </div>

          {/* Requirements Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[hsl(207,90%,15%)] mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[hsl(199,89%,48%)]" />
              Requisitos Cumplidos
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {requirements.map((req) => (
                <div
                  key={req}
                  className="flex items-center gap-3 bg-[hsl(210,40%,98%)] rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-[hsl(160,84%,39%)] shrink-0" />
                  <span className="text-sm font-medium text-[hsl(207,90%,15%)]">{req}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[hsl(210,40%,98%)] rounded-xl p-4 border-l-4 border-[hsl(199,89%,48%)]">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-[hsl(207,90%,15%)]">Mensaje clave:</span>{" "}
                No somos una startup con una idea; somos un espacio homologado por el Gobierno. El riesgo tecnológico ya está superado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
