"use client"

import { Megaphone, Users, Server, FileCheck, Briefcase } from "lucide-react"

export function InvestorInvestmentSection() {
  const investmentAreas = [
    {
      icon: Megaphone,
      title: "Marketing y Ventas",
      subtitle: "Captacion Agresiva",
      amount: "60.000",
      percentage: "19.4%",
      color: "bg-[#FFCC00]",
      textColor: "text-[#003399]",
      description: "Captacion de 100 empresas antes del 31/03/2026",
    },
    {
      icon: FileCheck,
      title: "Tramitacion Administrativa",
      subtitle: "Gestion de Ayudas",
      amount: "60.000",
      percentage: "19.4%",
      color: "bg-[#00A3E0]",
      textColor: "text-white",
      description: "600 EUR x 100 solicitantes Kit Digital",
    },
    {
      icon: Users,
      title: "Consultoria Tecnica",
      subtitle: "Soporte a Solicitantes",
      amount: "100.000",
      percentage: "32.3%",
      color: "bg-emerald-500",
      textColor: "text-white",
      description: "1.000 EUR x 100 solicitantes",
      highlight: true,
    },
    {
      icon: Server,
      title: "Estructura e Infraestructura",
      subtitle: "Personal y Equipos",
      amount: "90.000",
      percentage: "29.0%",
      color: "bg-[#003399]",
      textColor: "text-white",
      description: "Personal interno, equipos y escalado tecnologico",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ESCENARIO INVERSOR - SLIDE 3/6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Desglose de Inversion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Inversion urgente requerida para captar 100 empresas
          </p>
        </div>

        {/* Total Investment */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-[#003399] to-[#002266] rounded-2xl p-8 text-center shadow-xl">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Inversion Total Requerida</p>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">310.000 EUR</h3>
            <p className="text-[#FFCC00] font-medium">
              Incluye soporte completo para 100 solicitudes Kit Espacio de Datos
            </p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {investmentAreas.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border-2 ${item.highlight ? 'border-emerald-300 shadow-lg' : 'border-gray-200 shadow-sm'} p-6 relative overflow-hidden`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAYOR PARTIDA
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-7 h-7 ${item.textColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-[#003399] font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    </div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                      {item.percentage}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-[#003399] font-bold text-2xl">{item.amount} EUR</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#003399] mt-0.5 flex-shrink-0" />
              <p className="text-[#003399] text-sm">
                <span className="font-semibold">Modelo "Llave en Mano":</span> La Spin-off invierte 1.600 EUR por solicitante 
                (600 EUR tramitacion + 1.000 EUR consultoria) para eliminar cualquier friccion tecnica o administrativa en 
                el proceso de adhesion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
