"use client"

import { Building2, Globe, Landmark, GraduationCap, CheckCircle, Euro, AlertCircle } from "lucide-react"

const eligibleEntities = [
  {
    icon: Building2,
    title: "Entidades Privadas",
    description: "Empresas de cualquier tamaño (PYMES y grandes empresas), asociaciones, fundaciones y organismos con actividad económica",
  },
  {
    icon: Landmark,
    title: "Entidades Públicas",
    description: "Organismos públicos con actividad económica, Ayuntamientos, Diputaciones, Hospitales Públicos y sector público institucional",
  },
  {
    icon: Globe,
    title: "Empresas Europeas",
    description: "Entidades con domicilio fiscal en la UE y NIF válido emitido por la administración tributaria española",
  },
  {
    icon: GraduationCap,
    title: "Centros de Investigación",
    description: "Universidades y centros de investigación con personalidad jurídica propia",
  },
]

const requirements = [
  "Actividad económica real (excepto administraciones públicas puras)",
  "Antigüedad mínima de 6 meses e inscripción en Censo de Empresarios",
  "Al corriente de obligaciones tributarias y Seguridad Social",
  "No ser empresa en crisis según normativa de ayudas",
  "No superar límite de ayudas de minimis europeo",
]

export function EligibilitySection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-4">
            Entidades Elegibles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Quién puede solicitar la ayuda?
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Las ayudas del Kit Espacio de Datos, financiadas por NextGenerationEU, están diseñadas para impulsar la soberanía y seguridad del dato siguiendo estándares europeos
          </p>
        </div>

        {/* Eligible Entities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {eligibleEntities.map((entity) => (
            <div
              key={entity.title}
              className="bg-[#002266] border border-[#FFCC00]/20 rounded-lg p-6 hover:border-[#FFCC00]/50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#FFCC00] rounded-lg flex items-center justify-center mb-4">
                <entity.icon className="w-6 h-6 text-[#003399]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{entity.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{entity.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements and Amounts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-[#FFCC00]" />
              <h3 className="text-xl font-bold text-white">Requisitos de Elegibilidad</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <div className="w-5 h-5 bg-[#FFCC00]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#FFCC00] text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amounts Table */}
          <div className="bg-[#FFCC00] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Euro className="w-6 h-6 text-[#003399]" />
              <h3 className="text-xl font-bold text-[#003399]">Cuantía de la Ayuda</h3>
            </div>
            
            {/* Table */}
            <div className="bg-white rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#003399] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Tipo de Entidad</th>
                    <th className="px-4 py-3 text-center font-semibold">Participante</th>
                    <th className="px-4 py-3 text-center font-semibold">Proveedor</th>
                  </tr>
                </thead>
                <tbody className="text-[#003399]">
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Entidades Privadas / Públicas con Actividad</td>
                    <td className="px-4 py-3 text-center font-bold">15.000 €</td>
                    <td className="px-4 py-3 text-center font-bold text-green-600">30.000 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Administraciones Públicas</td>
                    <td className="px-4 py-3 text-center font-bold">25.000 €</td>
                    <td className="px-4 py-3 text-center font-bold text-green-600">50.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#003399]/80 text-sm mt-4">
              <span className="font-semibold">Participante:</span> Conexión al espacio | 
              <span className="font-semibold"> Proveedor:</span> Conexión + Transacción de datos
            </p>
          </div>
        </div>

        {/* Warning Note */}
        <div className="mt-8 bg-white/5 border border-[#FFCC00]/30 rounded-lg p-4 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#FFCC00] shrink-0" />
          <div>
            <p className="text-white/80 text-sm">
              <span className="font-bold text-white">No elegibles:</span> Uniones temporales de empresas (UTE), sociedades civiles, comunidades de bienes ni otras formas sin personalidad jurídica.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-white/70 text-lg">
            <span className="text-[#FFCC00] font-bold">Global Data Care</span> ayuda a las empresas a superar el obstáculo de la justificación técnica y administrativa, gestionando la documentación y evidencias necesarias para asegurar el cobro de la ayuda.
          </p>
        </div>
      </div>
    </section>
  )
}
