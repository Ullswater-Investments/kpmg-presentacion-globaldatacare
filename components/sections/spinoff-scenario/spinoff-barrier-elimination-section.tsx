"use client"

import { Ban, Clock, ArrowRight, CheckCircle, Shield } from "lucide-react"

export function SpinoffBarrierEliminationSection() {
  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 5/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eliminación de Barreras Financieras
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            La Spin-off adelanta las cuotas iniciales para eliminar el riesgo de entrada
          </p>
        </div>

        {/* Problem - Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* The Problem */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
                <Ban className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">El Problema</h3>
                <p className="text-red-400 text-sm">Barrera de entrada actual</p>
              </div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-red-400" />
                <span className="text-white font-semibold">6 Meses de Espera</span>
              </div>
              <p className="text-gray-400 text-sm">
                El tiempo de espera hasta el cobro de la subvención frena la adhesión de muchas empresas que no pueden o no quieren adelantar el capital.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                Las empresas deben pagar 6 cuotas antes de recibir la ayuda
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                Coste inicial: 1.740 EUR (290 x 6 meses)
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                Riesgo percibido si la ayuda no es concedida
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">La Solución</h3>
                <p className="text-emerald-400 text-sm">Financiación Spin-off</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="text-white font-semibold">Adelanto de Cuotas</span>
              </div>
              <p className="text-gray-400 text-sm">
                La Spin-off adelanta el importe de las seis cuotas iniciales a los usuarios para eliminar el riesgo financiero de entrada.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                El usuario no paga nada hasta recibir la ayuda
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                Riesgo asumido por la Spin-off y los inversores
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                Eliminación total de la barrera de entrada
              </li>
            </ul>
          </div>
        </div>

        {/* Visual flow */}
        <div className="bg-[#0d2847] border border-white/10 rounded-xl p-6">
          <h4 className="text-white font-bold text-center mb-6">Flujo de Financiación</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-amber-500 rounded-lg px-6 py-3 text-center">
              <p className="text-[#003399] font-bold">Spin-off</p>
              <p className="text-[#003399]/70 text-sm">Adelanta 1.740 EUR</p>
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
            <div className="bg-white/10 rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold">Empresa Adherida</p>
              <p className="text-gray-400 text-sm">Pago 0 EUR inicial</p>
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
            <div className="bg-emerald-500 rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold">Red.es</p>
              <p className="text-white/70 text-sm">Concede ayuda</p>
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
            <div className="bg-cyan-500 rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold">Recuperación</p>
              <p className="text-white/70 text-sm">Spin-off cobra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
