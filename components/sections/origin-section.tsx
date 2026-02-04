"use client"

import { Database, User, Building } from "lucide-react"

export function OriginSection() {
  return (
    <section className="py-20 px-4 bg-[hsl(210,40%,96%)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[hsl(199,89%,48%)] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            ORIGEN DEL PROYECTO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(207,90%,15%)] mb-4">
            Accuro Technology<br />crea Global Data Care
          </h2>
          <p className="text-lg text-[hsl(199,89%,48%)] max-w-2xl mx-auto">
            Ganadores de la convocatoria del Ministerio de Transformacion Digital e Inteligencia Artificial
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Kit Espacios de Datos */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-[hsl(199,89%,48%)]" />
              <span className="font-semibold text-[hsl(207,90%,30%)]">Kit Espacios<br/>de Datos</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              El Kit Espacios de Datos es una iniciativa del Gobierno de España para impulsar la creación de infraestructuras de datos que cumplan con los estándares europeos de soberanía, seguridad e interoperabilidad.
            </p>
          </div>

          {/* Convocatoria Ganada */}
          <div className="bg-[hsl(199,89%,48%)] rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Convocatoria Ganada</h3>
                <p className="text-sm text-white/80">Ministerio de Transformación Digital</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-sm">
              En 2023, Accuro Technology ganó la convocatoria pública del Ministerio para la Transformación Digital y de la Función Pública, a través de la Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA), para construir un ecosistema de Espacios de Datos en el sector salud.
            </p>
          </div>

          {/* Accuro Technology */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-[hsl(207,90%,30%)]">Accuro Technology</h3>
                <p className="text-sm text-[hsl(160,84%,39%)]">Empresa desarrolladora</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Accuro Technology es la empresa tecnológica española que diseñó, desarrolló e implementó la infraestructura completa de Global Data Care, el primer ecosistema de Espacios de Datos Federados de Salud en Europa.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
