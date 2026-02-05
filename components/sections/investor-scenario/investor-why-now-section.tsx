"use client"

import { Shield, Award, Database, Clock, CheckCircle2 } from "lucide-react"

export function InvestorWhyNowSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Seguridad Juridica",
      description: "Riesgo tecnologico superado; infraestructura auditada y certificada por el Gobierno de Espana.",
      color: "bg-[#003399]",
      highlight: "Certificacion gubernamental",
    },
    {
      icon: Award,
      title: "Valor Reputacional",
      description: "Ofrezca a su propia red de empresas (clinicas, laboratorios, centros) el acceso exclusivo a subvenciones NextGenerationEU antes del cierre de convocatoria.",
      color: "bg-[#FFCC00]",
      textColor: "text-[#003399]",
      highlight: "Acceso exclusivo a fondos EU",
    },
    {
      icon: Database,
      title: "Activo Estrategico",
      description: "Conviertase en dueno de la red donde se negociaran los datos de salud de Espana durante las proximas decadas.",
      color: "bg-emerald-500",
      highlight: "Posicionamiento a largo plazo",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 5/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Por que Invertir Ahora?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Argumentario para socios estrategicos del sector salud
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Fecha limite convocatoria</p>
                <p className="text-white font-bold text-xl">31 de Marzo de 2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm">Objetivo de captacion</p>
              <p className="text-white font-bold text-xl">100 empresas</p>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-xl ${reason.color} flex items-center justify-center mb-5`}>
                <reason.icon className={`w-7 h-7 ${reason.textColor || 'text-white'}`} />
              </div>
              <h3 className="text-[#003399] font-bold text-xl mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{reason.description}</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 text-sm font-medium">{reason.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Summary */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#003399]/5 rounded-2xl p-8 border border-[#003399]/10">
            <h4 className="text-[#003399] font-bold text-lg mb-6 text-center">
              Beneficios Clave para el Inversor
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-[#003399]">Retorno garantizado:</span> Modelo de ingresos recurrentes con renovacion automatica de 12 meses
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-[#003399]">Sin riesgo tecnologico:</span> Infraestructura ya auditada y certificada por el Gobierno
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-[#003399]">Ventaja competitiva:</span> Primera posicion en el ecosistema EHDS espanol
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-[#003399]">Escalabilidad:</span> Modelo replicable a nivel europeo con EHDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
