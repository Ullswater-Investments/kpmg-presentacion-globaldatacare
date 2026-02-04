"use client"

import { Users, FileText, Receipt, Clock, AlertCircle, CheckCircle } from "lucide-react"

export function RequirementsSection() {
  const steps = [
    { number: 1, title: "Solicitud", description: "Presentar antes del 31/03" },
    { number: 2, title: "Ejecución", description: "Implementar la conexión" },
    { number: 3, title: "Justificación", description: "Documentar horas y gastos" },
    { number: 4, title: "Cobro", description: "Recibir la subvención" },
  ]

  const requirements = [
    { icon: Users, title: "Personal dedicado", description: "Horas de personal propio o subcontratado" },
    { icon: FileText, title: "Documentación técnica", description: "Evidencias de conexión y transacción" },
    { icon: Receipt, title: "Memoria económica", description: "Nóminas, partes de horas, facturas" },
    { icon: Clock, title: "Plazos estrictos", description: "Justificación dentro del periodo establecido" },
  ]

  const painPoints = [
    "No saben cómo justificarla técnicamente",
    "No tienen experiencia con subvenciones",
    "Temen tener que devolver el dinero",
    "No disponen de personal administrativo",
  ]

  return (
    <section className="py-16 bg-[#eef4f8]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            REQUISITOS DE JUSTIFICACIÓN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            ¿Cómo se cobra la ayuda?
          </h2>
          <p className="text-gray-600 text-lg">
            El mayor obstáculo para las empresas: la justificación técnica y administrativa
          </p>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0a4d8c] text-white flex items-center justify-center text-2xl font-bold mb-2 mx-auto">
                    {step.number}
                  </div>
                  <p className="font-semibold text-[#0a1628]">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5 text-cyan-500" />
              <h3 className="font-bold text-[#0a1628] text-lg">Requisitos de Red.es</h3>
            </div>
            <div className="space-y-4">
              {requirements.map((req) => (
                <div key={req.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#eef4f8] flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628]">{req.title}</p>
                    <p className="text-sm text-gray-500">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-cyan-500">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-[#0a1628] text-lg">Pain Point del Cliente</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Las empresas <span className="font-semibold">quieren la ayuda</span> pero:
            </p>
            <ul className="space-y-3 mb-6">
              {painPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="bg-[#0a4d8c] rounded-xl p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-white text-sm">
                <span className="font-semibold">Aquí es donde entra Global Data Care:</span> solucionamos este problema completamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
