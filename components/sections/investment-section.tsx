"use client"

import { Megaphone, Users, Settings, ArrowLeftRight, Building2, Database } from "lucide-react"

export function InvestmentSection() {
  const budgetItems = [
    {
      icon: Megaphone,
      title: "Marketing & Ventas",
      amount: "€40.000",
      percentage: "40%",
      items: [
        "Campaña de comunicación agresiva",
        "Eventos y webinars del sector",
        "Publicidad digital segmentada",
        "Material comercial premium",
      ],
    },
    {
      icon: Users,
      title: "Equipo Gestor",
      amount: "€40.000",
      percentage: "40%",
      items: [
        "4 gestores técnicos/administrativos",
        "Procesamiento de 100 expedientes",
        "Contratación por 3 meses intensivos",
        "Generación de justificaciones",
      ],
    },
    {
      icon: Settings,
      title: "Operaciones",
      amount: "€20.000",
      percentage: "20%",
      items: [
        "Infraestructura tecnológica",
        "Gastos operativos varios",
        "Herramientas de gestión",
        "Contingencias",
      ],
    },
  ]

  const kpmgBenefits = [
    "Red de clientes Salud",
    "Reputación corporativa",
    "Capital de inversión",
    "Experiencia en subvenciones",
  ]

  const gdcBenefits = [
    "Tecnología certificada",
    "Gestión llave en mano",
    "Homologación SEDIA",
    "Verticales de salud",
  ]

  return (
    <section className="py-16 bg-[#eef4f8]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Budget breakdown */}
          <div className="space-y-6">
            {budgetItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0a1628]">{item.title}</p>
                      <p className="text-2xl font-bold text-cyan-500">{item.amount}</p>
                    </div>
                  </div>
                  <span className="text-4xl font-bold text-gray-200">{item.percentage}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {item.items.map((text) => (
                    <p key={text} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Partnership */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                USO DE FONDOS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
                Destino de la Inversión
              </h2>
              <p className="text-gray-600">
                Distribución estratégica de los €100.000 para maximizar el impacto
              </p>
            </div>

            {/* Partnership diagram */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-center gap-4 mb-8">
                {/* KPMG */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-[#0a4d8c] flex items-center justify-center mx-auto mb-2">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-bold text-[#0a1628]">KPMG</p>
                  <p className="text-xs text-gray-500">Socio Promotor</p>
                </div>

                {/* Arrow */}
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2">
                    <ArrowLeftRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="font-semibold text-[#0a1628] text-sm">Alianza Win-Win</p>
                  <p className="text-xs text-gray-500">Beneficio mutuo</p>
                  <p className="text-xs text-cyan-500 mt-1">Clientes →</p>
                  <p className="text-xs text-cyan-500">← Retornos</p>
                </div>

                {/* Global Data Care */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center mx-auto mb-2">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-bold text-[#0a1628]">Global Data Care</p>
                  <p className="text-xs text-gray-500">Espacio Homologado</p>
                </div>
              </div>

              {/* Benefits lists */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {kpmgBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 bg-[#eef4f8] rounded-lg p-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#0a4d8c]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {gdcBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 bg-cyan-50 rounded-lg p-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
