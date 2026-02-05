"use client"

import { Ban, Clock, ArrowRight, CheckCircle, Shield } from "lucide-react"

export function SpinoffBarrierEliminationSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 5/10
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Eliminacion de Barreras Financieras
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La Spin-off adelanta las cuotas iniciales para eliminar el riesgo de entrada
          </p>
        </div>

        {/* Problem - Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* The Problem */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
                <Ban className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">El Problema</h3>
                <p className="text-red-500 text-sm font-medium">Barrera de entrada actual</p>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-red-500" />
                <span className="text-[#003399] font-semibold">6 Meses de Espera</span>
              </div>
              <p className="text-gray-600 text-sm">
                El tiempo de espera hasta el cobro de la subvencion frena la adhesion de muchas empresas que no pueden o no quieren adelantar el capital.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                Las empresas deben pagar 6 cuotas antes de recibir la ayuda
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                Coste inicial: 1.740 EUR (290 x 6 meses)
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                Riesgo percibido si la ayuda no es concedida
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">La Solucion</h3>
                <p className="text-emerald-500 text-sm font-medium">Financiacion Spin-off</p>
              </div>
            </div>

            <div className="bg-white border border-emerald-200 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span className="text-[#003399] font-semibold">Adelanto de Cuotas</span>
              </div>
              <p className="text-gray-600 text-sm">
                La Spin-off adelanta el importe de las seis cuotas iniciales a los usuarios para eliminar el riesgo financiero de entrada.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                El usuario no paga nada hasta recibir la ayuda
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                Riesgo asumido por la Spin-off y los inversores
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                Eliminacion total de la barrera de entrada
              </li>
            </ul>
          </div>
        </div>

        {/* Visual flow */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-[#003399] font-bold text-center mb-6">Flujo de Financiacion</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-[#FFCC00] rounded-lg px-6 py-3 text-center">
              <p className="text-[#003399] font-bold">Spin-off</p>
              <p className="text-[#003399]/70 text-sm">Adelanta 1.740 EUR</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-center">
              <p className="text-[#003399] font-bold">Empresa Adherida</p>
              <p className="text-gray-500 text-sm">Pago 0 EUR inicial</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-emerald-500 rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold">Red.es</p>
              <p className="text-white/80 text-sm">Concede ayuda</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-[#00A3E0] rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold">Recuperacion</p>
              <p className="text-white/80 text-sm">Spin-off cobra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
