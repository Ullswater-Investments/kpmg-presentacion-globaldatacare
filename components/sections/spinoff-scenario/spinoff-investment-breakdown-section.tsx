"use client"

import { Megaphone, Users, Server, CreditCard, AlertTriangle } from "lucide-react"

const investmentAreas = [
  {
    icon: Megaphone,
    title: "Marketing y Ventas",
    subtitle: "Captación Agresiva",
    amount: "60.000",
    percentage: "19.4%",
    color: "bg-[#FFCC00]",
    textColor: "text-[#003399]",
  },
  {
    icon: Users,
    title: "Equipo Gestor y Técnico",
    subtitle: "Procesamiento de Expedientes",
    amount: "60.000",
    percentage: "19.4%",
    color: "bg-[#00A3E0]",
    textColor: "text-white",
  },
  {
    icon: Server,
    title: "Equipos e Infraestructura",
    subtitle: "Escalado Tecnológico",
    amount: "30.000",
    percentage: "9.7%",
    color: "bg-[#003399]",
    textColor: "text-white",
  },
  {
    icon: CreditCard,
    title: "Tramitación Ayudas Kit Espacio de Datos",
    subtitle: "Gestión Administrativa",
    amount: "60.000",
    percentage: "19.4%",
    color: "bg-purple-500",
    textColor: "text-white",
    calculation: "600 EUR x 100 solicitudes",
  },
  {
    icon: CreditCard,
    title: "Consultoría Técnica Solicitantes",
    subtitle: "Soporte Técnico Kit Espacio de Datos",
    amount: "100.000",
    percentage: "32.3%",
    color: "bg-rose-500",
    textColor: "text-white",
    highlight: true,
    calculation: "1.000 EUR x 100 solicitudes",
  },
]

export function SpinoffInvestmentBreakdownSection() {
  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 7/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Desglose de Inversión Requerida
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Distribución estratégica de los fondos para el despliegue del Escenario Spin-off
          </p>
        </div>

        {/* Total Investment Badge */}
        <div className="bg-[#FFCC00] rounded-2xl p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-6 h-6 text-[#003399]" />
                <span className="text-[#003399]/70 text-sm font-bold uppercase tracking-wider">
                  Total Inversión Escenario Spin-off
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-[#003399]">310.000 EUR</h3>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#003399]/70 text-sm">Incluye soporte para</p>
              <p className="text-[#003399] font-bold text-xl">100 solicitudes Kit Espacio de Datos</p>
            </div>
          </div>
        </div>

        {/* Investment Areas Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {investmentAreas.map((area) => (
            <div
              key={area.title}
              className={`bg-[#0d2847] border ${area.highlight ? "border-emerald-500" : "border-white/10"} rounded-xl overflow-hidden`}
            >
              {/* Header */}
              <div className={`${area.color} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <area.icon className={`w-6 h-6 ${area.textColor}`} />
                    <div>
                      <h3 className={`font-bold ${area.textColor}`}>{area.title}</h3>
                      <p className={`text-sm ${area.textColor} opacity-80`}>{area.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-2xl font-bold ${area.textColor}`}>{area.percentage}</span>
                </div>
              </div>
              
              {/* Amount */}
              <div className="p-5">
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-[#FFCC00]">EUR {area.amount}</span>
                  {area.highlight && (
                    <span className="text-emerald-400 text-sm bg-emerald-500/20 px-3 py-1 rounded-full">
                      Mayor partida
                    </span>
                  )}
                </div>
                {area.calculation && (
                  <p className="text-gray-500 text-sm mt-2">
                    Cálculo: {area.calculation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Modelo de Servicio "Llave en Mano"</h4>
              <p className="text-gray-400 text-sm">
                La Spin-off invierte <span className="text-amber-400 font-semibold">1.600 EUR por solicitante</span> (600 EUR de tramitacion + 1.000 EUR de consultoria tecnica) 
                para eliminar cualquier friccion tecnica o administrativa. Las cuotas mensuales (290 EUR/mes) son ingresos diferidos que se cobraran 
                una vez el solicitante reciba la subvencion (aproximadamente 6 meses).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
