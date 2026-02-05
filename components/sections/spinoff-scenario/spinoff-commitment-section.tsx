"use client"

import { FileCheck, Calendar, RefreshCw, Shield } from "lucide-react"

export function SpinoffCommitmentSection() {
  return (
    <section className="py-20 px-4 bg-[#002266]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 6/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Condiciones de Permanencia
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Compromiso contractual que garantiza ingresos recurrentes
          </p>
        </div>

        {/* Main conditions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Conditional Payment */}
          <div className="bg-[#001a4d] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Pago Condicionado</h3>
                <p className="text-emerald-400 text-sm">Sin riesgo para el usuario</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 mb-6">
              <p className="text-white text-lg font-semibold mb-2">
                Pago solo si hay ayuda
              </p>
              <p className="text-gray-400 text-sm">
                Los solicitantes <span className="text-emerald-400 font-semibold">solo pagan las seis cuotas iniciales si reciben efectivamente la ayuda</span> del Kit Espacio de Datos.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Si la ayuda no es concedida, el usuario no debe nada</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Riesgo 100% asumido por la Spin-off</span>
              </li>
            </ul>
          </div>

          {/* Automatic Renewal */}
          <div className="bg-[#001a4d] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Fidelización Garantizada</h3>
                <p className="text-cyan-400 text-sm">Renovación obligatoria</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5 mb-6">
              <p className="text-white text-lg font-semibold mb-2">
                12 meses adicionales
              </p>
              <p className="text-gray-400 text-sm">
                Obligación contractual de <span className="text-cyan-400 font-semibold">renovar por 12 meses adicionales</span> tras el periodo subvencionado de 6 meses.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Ciclo total de permanencia: 18 meses</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Ingresos recurrentes garantizados por contrato</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline visual */}
        <div className="bg-[#FFCC00] rounded-xl p-8">
          <h4 className="text-[#003399] font-bold text-center mb-6">Ciclo Completo del Cliente</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <p className="text-[#003399] font-bold">Meses Iniciales</p>
              <p className="text-[#003399]/70 text-sm">Periodo subvencionado</p>
              <p className="text-[#003399]/60 text-xs mt-1">290 EUR/mes (adelantado)</p>
            </div>

            <div className="text-[#003399]/50 text-2xl font-bold">+</div>

            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">12</span>
              </div>
              <p className="text-[#003399] font-bold">Meses Adicionales</p>
              <p className="text-[#003399]/70 text-sm">Renovación obligatoria</p>
              <p className="text-[#003399]/60 text-xs mt-1">290 EUR/mes (pagado)</p>
            </div>

            <div className="text-[#003399]/50 text-2xl font-bold">=</div>

            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">18</span>
              </div>
              <p className="text-[#003399] font-bold">Meses Totales</p>
              <p className="text-[#003399]/70 text-sm">Permanencia garantizada</p>
              <p className="text-[#003399]/60 text-xs mt-1">5.220 EUR/cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
