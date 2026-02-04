"use client"

import { Megaphone, Users, Server, Clock, Target, Handshake, AlertTriangle } from "lucide-react"

const investmentAreas = [
  {
    icon: Megaphone,
    title: "Marketing y Ventas",
    subtitle: "Captación Agresiva",
    amount: "60.000",
    percentage: "40%",
    items: [
      "Campaña de comunicación 360° en medios especializados del sector salud",
      "Publicidad Digital Segmentada con retargeting en clínicas, hospitales y laboratorios",
      "Eventos y Webinars formativos sobre el Kit Espacio de Datos",
      "Material Comercial Premium de alto impacto para fuerza comercial",
    ],
    color: "bg-[#FFCC00]",
    textColor: "text-[#003399]",
  },
  {
    icon: Users,
    title: "Gestión y Soporte Técnico",
    subtitle: "Procesamiento de Expedientes",
    amount: "60.000",
    percentage: "40%",
    items: [
      "Equipo de Gestión de Ayudas dedicado al procesamiento de 100 expedientes ante Red.es",
      "Personal Técnico de Integración para conexión al espacio de datos federado",
      "Generación de Evidencias que cumplan requisitos para cobro de subvención",
    ],
    color: "bg-[#00A3E0]",
    textColor: "text-white",
  },
  {
    icon: Server,
    title: "Infraestructura y Equipamiento",
    subtitle: "Escalado Tecnológico",
    amount: "30.000",
    percentage: "20%",
    items: [
      "Escalado de Infraestructura: servidores y protocolos de seguridad",
      "Herramientas de Gestión: CRM y software de seguimiento de expedientes",
      "Equipamiento Operativo para equipo gestor de respuesta rápida",
    ],
    color: "bg-[#003399]",
    textColor: "text-white",
  },
]

const criticalReasons = [
  {
    icon: Clock,
    title: "Ventana de Oportunidad Única",
    description: "La convocatoria del Kit Espacio de Datos tiene fecha límite inamovible",
  },
  {
    icon: Target,
    title: "Garantía de Valoración",
    description: "100 empresas es el requisito para proyectar valoración de 5M EUR al cierre de 2026",
  },
  {
    icon: Handshake,
    title: "Alianza Win-Win",
    description: "Global Data Care aporta tecnología certificada y homologación SEDIA",
  },
]

export function UrgentInvestmentSection() {
  return (
    <section className="py-20 px-4 bg-[#003399]">
      <div className="max-w-6xl mx-auto">
        {/* Header with urgency */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FFCC00] text-[#003399] px-4 py-1.5 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Plan de Inversión Urgente
            </div>
            <div className="bg-red-500 text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
              Hito 31 de Marzo
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Captación de 100 Empresas
          </h2>
          <p className="text-lg text-white/70 max-w-3xl">
            Para asegurar la adhesión de las primeras 100 empresas antes del cierre de la convocatoria pública, 
            se requiere una inyección de capital estratégica distribuida en tres ejes operativos.
          </p>
        </div>

        {/* Total Investment Badge */}
        <div className="bg-[#FFCC00] rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[#003399]/70 text-sm font-medium uppercase tracking-wider">Inversión Total Requerida</span>
            <h3 className="text-4xl md:text-5xl font-bold text-[#003399]">150.000 EUR</h3>
          </div>
          <div className="flex items-center gap-2 text-[#003399]">
            <Clock className="w-6 h-6" />
            <span className="font-bold">Fase 1 - Antes del 31/03/2026</span>
          </div>
        </div>

        {/* Three Investment Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {investmentAreas.map((area) => (
            <div
              key={area.title}
              className="bg-[#002266] border border-white/10 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div className={`${area.color} p-4`}>
                <div className="flex items-center justify-between">
                  <area.icon className={`w-8 h-8 ${area.textColor}`} />
                  <span className={`text-2xl font-bold ${area.textColor}`}>{area.percentage}</span>
                </div>
                <h3 className={`text-lg font-bold ${area.textColor} mt-2`}>{area.title}</h3>
                <p className={`text-sm ${area.textColor} opacity-80`}>{area.subtitle}</p>
              </div>
              
              {/* Amount */}
              <div className="p-4 border-b border-white/10">
                <span className="text-3xl font-bold text-[#FFCC00]">EUR {area.amount}</span>
              </div>
              
              {/* Items */}
              <div className="p-4">
                <ul className="space-y-3">
                  {area.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Critical Now */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h3 className="text-xl font-bold text-[#FFCC00] mb-6 text-center">
            Por qué esta inversión es crítica ahora
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {criticalReasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-14 h-14 bg-[#FFCC00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-[#FFCC00]" />
                </div>
                <h4 className="text-white font-bold mb-2">{reason.title}</h4>
                <p className="text-white/60 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
