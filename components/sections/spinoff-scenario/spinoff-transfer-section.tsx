"use client"

import { FileCheck, ArrowRight, Shield, Euro } from "lucide-react"

export function SpinoffTransferSection() {
  return (
    <section className="py-20 px-4 bg-[#002266]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 2/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transferencia de Activos y Derechos
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Cesión integral de todos los derechos de explotación y cobro a la nueva entidad
          </p>
        </div>

        {/* Transfer diagram */}
        <div className="bg-[#001a4d] border border-white/10 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Origin */}
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Accuro Technology</h3>
              <p className="text-white/60 text-sm">Empresa matriz propietaria de la tecnología</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="bg-amber-500 rounded-full p-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Destination */}
            <div className="bg-amber-500/20 border-2 border-amber-500 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-amber-400 font-bold text-lg mb-2">Spin-Off GDC</h3>
              <p className="text-white/60 text-sm">Nueva entidad independiente</p>
            </div>
          </div>
        </div>

        {/* Rights transferred */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Exploitation Rights */}
          <div className="bg-[#0d2847] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Explotación Total</h4>
                <p className="text-cyan-400 text-sm">100% de los derechos</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              La Spin-off recibe el <span className="text-cyan-400 font-semibold">100% de los derechos de explotación tecnológica</span> del 
              ecosistema Global Data Care.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Plataforma tecnológica completa
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Conectores y APIs de integración
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Marca y propiedad intelectual
              </li>
            </ul>
          </div>

          {/* Collection Rights */}
          <div className="bg-[#0d2847] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold">Derechos de Cobro</h4>
                <p className="text-emerald-400 text-sm">Cesión íntegra</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Cesión íntegra de los <span className="text-emerald-400 font-semibold">derechos de cobro de todas las cuotas</span> presentes 
              y futuras de la plataforma.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Cuotas de adhesión y participación
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Comisiones transaccionales
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Servicios de valor añadido
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
