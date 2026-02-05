"use client"

import { FileCheck, ArrowRight, Shield, Euro } from "lucide-react"

export function SpinoffTransferSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 2/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Transferencia de Activos y Derechos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cesion integral de todos los derechos de explotacion y cobro a la nueva entidad
          </p>
        </div>

        {/* Transfer diagram */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Origin */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#003399] font-bold text-lg mb-2">Accuro Technology</h3>
              <p className="text-gray-500 text-sm">Empresa matriz propietaria de la tecnologia</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="bg-[#FFCC00] rounded-full p-4">
                <ArrowRight className="w-8 h-8 text-[#003399]" />
              </div>
            </div>

            {/* Destination */}
            <div className="bg-[#FFCC00]/10 border-2 border-[#FFCC00] rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-[#003399]" />
              </div>
              <h3 className="text-[#003399] font-bold text-lg mb-2">Spin-Off GDC</h3>
              <p className="text-gray-500 text-sm">Nueva entidad independiente</p>
            </div>
          </div>
        </div>

        {/* Rights transferred */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Exploitation Rights */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#00A3E0] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Explotacion Total</h4>
                <p className="text-[#00A3E0] text-sm font-medium">100% de los derechos</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              La Spin-off recibe el <span className="text-[#00A3E0] font-semibold">100% de los derechos de explotacion tecnologica</span> del 
              ecosistema Global Data Care.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                Plataforma tecnologica completa
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                Conectores y APIs de integracion
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                Marca y propiedad intelectual
              </li>
            </ul>
          </div>

          {/* Collection Rights */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[#003399] font-bold">Derechos de Cobro</h4>
                <p className="text-emerald-500 text-sm font-medium">Cesion integra</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Cesion integra de los <span className="text-emerald-500 font-semibold">derechos de cobro de todas las cuotas</span> presentes 
              y futuras de la plataforma.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Cuotas de adhesion y participacion
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Comisiones transaccionales
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Servicios de valor anadido
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
