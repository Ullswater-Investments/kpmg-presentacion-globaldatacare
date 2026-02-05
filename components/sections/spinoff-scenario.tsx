"use client"

import { Building2, ArrowRight, Euro, Target, Clock, Shield, PiggyBank, TrendingUp, Users, Award, CheckCircle2, Banknote, Calendar, FileCheck, Repeat, BarChart3 } from "lucide-react"

// Slide 1: Concepto de la Nueva Entidad (Spin-off)
function SpinoffConceptSlide() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 mb-8" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Concepto de la Nueva Entidad
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Un modelo de ejecución optimizado que complementa y escala la visión inicial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Visión</h3>
                <p className="text-amber-400 text-sm">Nueva Entidad Independiente</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Creación de una <span className="text-amber-400 font-semibold">unidad de negocio independiente</span> dedicada exclusivamente a la explotación de Global Data Care.
            </p>
          </div>

          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Agilidad Operativa</h3>
                <p className="text-cyan-400 text-sm">Máxima Eficiencia</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Estructura diseñada para <span className="text-cyan-400 font-semibold">canalizar inversión externa</span> de forma eficiente y lograr el máximo número de usuarios en tiempo récord.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 2: Transferencia de Activos y Derechos
function AssetTransferSlide() {
  return (
    <section className="py-16 bg-[#0d2847]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transferencia de Activos y Derechos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a1628] rounded-2xl p-8 border-2 border-emerald-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">100%</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Explotación Total</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              La Spin-off recibe el <span className="text-emerald-400 font-bold">100% de los derechos de explotación tecnológica</span> del ecosistema Global Data Care.
            </p>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 border-2 border-cyan-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Derechos de Cobro</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Cesión íntegra de los <span className="text-cyan-400 font-bold">derechos de cobro de todas las cuotas</span> presentes y futuras de la plataforma.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-[#0a1628] rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-400">Accuro Technology</span>
            <ArrowRight className="w-8 h-8 text-amber-500" />
            <span className="text-amber-400 font-bold text-xl">Spin-off Global Data Care</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 3: Simplificación de Tarifas: La Cuota Unificada
function UnifiedQuotaSlide() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simplificación de Tarifas
          </h2>
          <p className="text-gray-400 text-lg">La Cuota Unificada</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#0d2847] to-[#122a4a] rounded-3xl p-10 border-2 border-amber-500/30 text-center">
            <div className="mb-6">
              <span className="inline-block bg-amber-500 text-white text-sm font-bold px-6 py-2 rounded-full">
                MODELO SIMPLIFICADO
              </span>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">
              Unificación de las cuotas de adhesión y participación en un único concepto
            </p>

            <div className="bg-[#0a1628] rounded-2xl p-8 mb-8">
              <p className="text-gray-400 text-sm mb-2">Cuota fija mensual</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-bold text-amber-400">290</span>
                <span className="text-3xl text-amber-400">EUR</span>
                <span className="text-gray-400 text-xl">/mes</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
              <p className="text-lg">Facilita la decisión de compra eliminando la complejidad técnica en el pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 4: El Hito Crítico de las 100 Adhesiones
function CriticalMilestoneSlide() {
  return (
    <section className="py-16 bg-[#0d2847]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El Hito Crítico
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#0a1628] rounded-3xl p-10 text-center">
            <Target className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">META</p>
            <p className="text-6xl font-bold text-white mb-2">100</p>
            <p className="text-cyan-400 text-xl font-semibold">empresas</p>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <Calendar className="w-5 h-5" />
                <p className="font-semibold">Antes del 31 de Marzo 2026</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0a1628] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">Ayudas Kit Espacio de Datos</h3>
              </div>
              <p className="text-gray-300">
                Tramitación de subvenciones según el estado de madurez del proyecto individual:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a1628] rounded-xl p-6 text-center border-2 border-emerald-500/30">
                <p className="text-4xl font-bold text-emerald-400">15.000</p>
                <p className="text-emerald-400 font-semibold">EUR</p>
                <p className="text-gray-400 text-sm mt-2">Proyectos iniciales</p>
              </div>
              <div className="bg-[#0a1628] rounded-xl p-6 text-center border-2 border-cyan-500/30">
                <p className="text-4xl font-bold text-cyan-400">30.000</p>
                <p className="text-cyan-400 font-semibold">EUR</p>
                <p className="text-gray-400 text-sm mt-2">Proyectos maduros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 5: Eliminación de Barreras: El "Stoppage" Financiero
function FinancialBarrierSlide() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eliminación de Barreras
          </h2>
          <p className="text-gray-400 text-lg">El "Stopper" Financiero</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* El Problema */}
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 rounded-2xl p-8 border border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-red-400 font-bold text-xl">EL PROBLEMA</h3>
            </div>
            <p className="text-gray-300 text-lg">
              El tiempo de espera de <span className="text-red-400 font-bold">6 meses</span> hasta el cobro de la subvención <span className="text-red-400 font-semibold">frena la adhesión</span> de muchas empresas.
            </p>
            <div className="mt-6 bg-red-500/10 rounded-xl p-4">
              <p className="text-red-300 text-sm">
                Las empresas deben pagar las cuotas durante 6 meses antes de recibir la ayuda
              </p>
            </div>
          </div>

          {/* La Solución */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 rounded-2xl p-8 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-emerald-400 font-bold text-xl">LA SOLUCIÓN</h3>
            </div>
            <p className="text-gray-300 text-lg">
              La Spin-off <span className="text-emerald-400 font-bold">adelanta el importe de las 6 cuotas iniciales</span> a los usuarios para eliminar el riesgo financiero de entrada.
            </p>
            <div className="mt-6 bg-emerald-500/10 rounded-xl p-4">
              <p className="text-emerald-300 text-sm">
                Los usuarios no pagan nada hasta recibir la subvención
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 6: Condiciones de Éxito y Permanencia
function SuccessConditionsSlide() {
  return (
    <section className="py-16 bg-[#0d2847]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Condiciones de Éxito y Permanencia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#0a1628] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Pago Condicionado</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Los solicitantes <span className="text-cyan-400 font-semibold">solo pagan las 6 cuotas iniciales</span> si reciben efectivamente la ayuda del Kit Espacio de Datos.
            </p>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Fidelización</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Obligación contractual de <span className="text-emerald-400 font-semibold">renovar por 12 meses adicionales</span> tras el periodo subvencionado de 6 meses.
            </p>
          </div>
        </div>

        {/* Timeline visual */}
        <div className="bg-[#0a1628] rounded-2xl p-8">
          <h4 className="text-white font-bold text-lg text-center mb-8">Ciclo Total del Contrato: 18 Meses</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-cyan-500/20 border-2 border-cyan-500 rounded-xl p-6 text-center flex-1 max-w-xs">
              <p className="text-cyan-400 font-bold text-3xl">6</p>
              <p className="text-cyan-400 font-semibold">meses</p>
              <p className="text-gray-400 text-sm mt-2">Periodo subvencionado</p>
              <p className="text-gray-500 text-xs mt-1">(Cuotas adelantadas por Spin-off)</p>
            </div>
            <ArrowRight className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div className="bg-emerald-500/20 border-2 border-emerald-500 rounded-xl p-6 text-center flex-1 max-w-xs">
              <p className="text-emerald-400 font-bold text-3xl">12</p>
              <p className="text-emerald-400 font-semibold">meses</p>
              <p className="text-gray-400 text-sm mt-2">Renovación obligatoria</p>
              <p className="text-gray-500 text-xs mt-1">(Cuotas pagadas por cliente)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 7: Desglose de Inversión Requerida (Escenario Spin-off)
function InvestmentBreakdownSlide() {
  const investments = [
    { label: "Marketing y Ventas", amount: 60000, color: "bg-cyan-500" },
    { label: "Equipo Gestor y Técnico", amount: 60000, color: "bg-emerald-500" },
    { label: "Infraestructura y Equipos", amount: 30000, color: "bg-amber-500" },
    { label: "Financiación de Cuotas Iniciales", amount: 174000, color: "bg-red-500", detail: "(100 x 290EUR x 6m)" },
  ]

  const total = 324000

  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Desglose de Inversión Requerida
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {investments.map((item, index) => (
              <div key={index} className="bg-[#0d2847] rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <div>
                      <p className="text-white font-semibold">{item.label}</p>
                      {item.detail && <p className="text-gray-500 text-sm">{item.detail}</p>}
                    </div>
                  </div>
                  <p className="text-white font-bold text-xl">{item.amount.toLocaleString()} EUR</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0d2847] to-[#122a4a] rounded-3xl p-10 flex flex-col justify-center items-center border-2 border-amber-500/30">
            <PiggyBank className="w-16 h-16 text-amber-500 mb-4" />
            <p className="text-gray-400 text-sm mb-2">TOTAL INVERSIÓN URGENTE</p>
            <p className="text-6xl font-bold text-amber-400">{total.toLocaleString()}</p>
            <p className="text-amber-400 text-2xl font-semibold">EUR</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 8: Análisis de Flujo de Caja y Retorno
function CashFlowSlide() {
  return (
    <section className="py-16 bg-[#0d2847]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Análisis de Flujo de Caja y Retorno
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a1628] rounded-2xl p-8 border-2 border-cyan-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Recuperación</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              El capital de <span className="text-cyan-400 font-bold">174.000 EUR</span> adelantado se recupera una vez que los clientes perciben la subvención.
            </p>
            <div className="bg-cyan-500/10 rounded-xl p-4">
              <p className="text-cyan-300 text-sm">
                Plazo estimado de recuperación: 6 meses tras la adhesión
              </p>
            </div>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 border-2 border-emerald-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Ingresos Recurrentes</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              Generación de ingresos mensuales en cuotas puras tras el periodo de financiación inicial:
            </p>
            <div className="bg-emerald-500/10 rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-emerald-400">29.000</p>
              <p className="text-emerald-400 font-semibold">EUR / mes</p>
              <p className="text-gray-500 text-sm mt-2">(100 empresas x 290 EUR)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 9: Optimización del Gasto para Crecimiento
function GrowthOptimizationSlide() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Optimización del Gasto para Crecimiento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Canalización de Inversión</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Uso estratégico de los fondos para <span className="text-amber-400 font-semibold">maximizar el CAC</span> (Coste de Adquisición de Cliente) y <span className="text-amber-400 font-semibold">reducir el "Time-to-Market"</span>.
            </p>
            <div className="mt-6 bg-[#0a1628] rounded-xl p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">CAC objetivo por empresa</span>
                <span className="text-amber-400 font-bold">~600 EUR</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0d2847] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Gobernanza</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Gestión centralizada de las <span className="text-cyan-400 font-semibold">justificaciones ante Red.es</span> para asegurar el flujo de ingresos de la Spin-off.
            </p>
            <div className="mt-6 bg-[#0a1628] rounded-xl p-4">
              <p className="text-cyan-300 text-sm">
                Documentación y seguimiento de cada solicitud de ayuda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 10: Valoración de Mercado: Objetivo 5.000.000 EUR
function MarketValuationSlide() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0d2847] to-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - OBJETIVO FINAL
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Valoración de Mercado
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#122a4a] to-[#0d2847] rounded-3xl p-10 border-2 border-emerald-500/50 text-center mb-8">
            <Award className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
            <p className="text-gray-400 text-sm mb-2">VALORACIÓN OBJETIVO 2026</p>
            <p className="text-8xl font-bold text-emerald-400 mb-2">5.000.000</p>
            <p className="text-emerald-400 text-3xl font-semibold">EUR</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d2847] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
                <h3 className="text-white font-bold">Activo Principal</h3>
              </div>
              <p className="text-gray-300">
                <span className="text-cyan-400 font-bold">100+ usuarios activos</span> y fidelizados bajo contrato por 18 meses
              </p>
            </div>

            <div className="bg-[#0d2847] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                <h3 className="text-white font-bold">Base de Valoración</h3>
              </div>
              <p className="text-gray-300">
                Recurrencia de ingresos, derechos de explotación y <span className="text-emerald-400 font-semibold">posición dominante en EHDS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="h-2 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400 mt-16" />
    </section>
  )
}

// Main component that exports all slides
export function SpinoffScenarioSections() {
  return (
    <>
      {/* Transition Header */}
      <section className="py-12 bg-[#0a1628]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/20">
            SECCIÓN: ESCENARIO SPIN-OFF
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Esta sección presenta un modelo de ejecución optimizado que complementa y escala la visión inicial
          </p>
        </div>
      </section>

      {/* Slide 1 */}
      <SpinoffConceptSlide />
      
      {/* Slide 2 */}
      <AssetTransferSlide />
      
      {/* Slide 3 */}
      <UnifiedQuotaSlide />
      
      {/* Slide 4 */}
      <CriticalMilestoneSlide />
      
      {/* Slide 5 */}
      <FinancialBarrierSlide />
      
      {/* Slide 6 */}
      <SuccessConditionsSlide />
      
      {/* Slide 7 */}
      <InvestmentBreakdownSlide />
      
      {/* Slide 8 */}
      <CashFlowSlide />
      
      {/* Slide 9 */}
      <GrowthOptimizationSlide />
      
      {/* Slide 10 */}
      <MarketValuationSlide />
    </>
  )
}
