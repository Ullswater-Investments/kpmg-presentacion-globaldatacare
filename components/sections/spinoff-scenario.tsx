"use client"

import { Building2, ArrowRight, Euro, Target, Clock, Shield, PiggyBank, TrendingUp, Users, Award, CheckCircle2, Banknote, Calendar, FileCheck, Repeat, BarChart3, Zap, Rocket } from "lucide-react"

// Consistent number formatting to avoid hydration mismatch
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Slide 1: Concepto de la Nueva Entidad (Spin-off)
function SpinoffConceptSlide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 1/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Concepto de la Nueva Entidad
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Un modelo de ejecucion optimizado que complementa y escala la vision inicial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Vision Estrategica</h3>
                <p className="text-[#FFCC00] text-sm font-medium">Nueva Entidad Independiente</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Creacion de una <span className="text-[#003399] font-semibold">unidad de negocio independiente</span> dedicada exclusivamente a la explotacion de Global Data Care.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Agilidad Operativa</h3>
                <p className="text-[#00A3E0] text-sm font-medium">Maxima Eficiencia</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Estructura disenada para <span className="text-[#00A3E0] font-semibold">canalizar inversion externa</span> de forma eficiente y lograr el maximo numero de usuarios en tiempo record.
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 2/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Transferencia de Activos y Derechos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">100%</span>
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Explotacion Total</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              La Spin-off recibe el <span className="text-emerald-600 font-bold">100% de los derechos de explotacion tecnologica</span> del ecosistema Global Data Care.
            </p>
          </div>

          <div className="bg-white border-2 border-[#00A3E0]/30 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#00A3E0] flex items-center justify-center">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Derechos de Cobro</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Cesion integra de los <span className="text-[#00A3E0] font-bold">derechos de cobro de todas las cuotas</span> presentes y futuras de la plataforma.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Accuro Technology</span>
            <ArrowRight className="w-8 h-8 text-[#FFCC00]" />
            <span className="text-[#003399] font-bold text-xl">Spin-off Global Data Care</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 3: Simplificacion de Tarifas: La Cuota Unificada
function UnifiedQuotaSlide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 3/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Simplificacion de Tarifas
          </h2>
          <p className="text-gray-600 text-lg">La Cuota Unificada</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#003399]/5 border-2 border-[#003399]/20 rounded-3xl p-10 text-center">
            <div className="mb-6">
              <span className="inline-block bg-[#003399] text-white text-sm font-bold px-6 py-2 rounded-full">
                MODELO SIMPLIFICADO
              </span>
            </div>
            
            <p className="text-gray-700 text-lg mb-8">
              Unificacion de las cuotas de adhesion y participacion en un unico concepto
            </p>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
              <p className="text-gray-500 text-sm mb-2">Cuota fija mensual</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-bold text-[#003399]">290</span>
                <span className="text-3xl text-[#003399]">EUR</span>
                <span className="text-gray-500 text-xl">/mes</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
              <p className="text-lg">Facilita la decision de compra eliminando la complejidad tecnica en el pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 4: El Hito Critico de las 100 Adhesiones
function CriticalMilestoneSlide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 4/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            El Hito Critico
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#FFCC00] rounded-3xl p-10 text-center">
            <Target className="w-16 h-16 text-[#003399] mx-auto mb-4" />
            <p className="text-[#003399]/70 mb-2">META</p>
            <p className="text-6xl font-bold text-[#003399] mb-2">100</p>
            <p className="text-[#003399] text-xl font-semibold">empresas</p>
            <div className="mt-6 pt-6 border-t border-[#003399]/20">
              <div className="flex items-center justify-center gap-2 text-[#003399]">
                <Calendar className="w-5 h-5" />
                <p className="font-semibold">Antes del 31 de Marzo 2026</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#003399] font-bold text-lg">Ayudas Kit Espacio de Datos</h3>
              </div>
              <p className="text-gray-700">
                Tramitacion de subvenciones segun el estado de madurez del proyecto individual:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-emerald-500">15.000</p>
                <p className="text-emerald-500 font-semibold">EUR</p>
                <p className="text-gray-500 text-sm mt-2">Proyectos iniciales</p>
              </div>
              <div className="bg-white border-2 border-[#00A3E0]/30 rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-[#00A3E0]">30.000</p>
                <p className="text-[#00A3E0] font-semibold">EUR</p>
                <p className="text-gray-500 text-sm mt-2">Proyectos maduros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 5: Eliminacion de Barreras: El "Stoppage" Financiero
function FinancialBarrierSlide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 5/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Eliminacion de Barreras
          </h2>
          <p className="text-gray-600 text-lg">El "Stopper" Financiero</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* El Problema */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-red-600 font-bold text-xl">EL PROBLEMA</h3>
            </div>
            <p className="text-gray-700 text-lg">
              El tiempo de espera de <span className="text-red-600 font-bold">6 meses</span> hasta el cobro de la subvencion <span className="text-red-600 font-semibold">frena la adhesion</span> de muchas empresas.
            </p>
            <div className="mt-6 bg-red-100 rounded-xl p-4">
              <p className="text-red-700 text-sm">
                Las empresas deben pagar las cuotas durante 6 meses antes de recibir la ayuda
              </p>
            </div>
          </div>

          {/* La Solucion */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-emerald-600 font-bold text-xl">LA SOLUCION</h3>
            </div>
            <p className="text-gray-700 text-lg">
              La Spin-off <span className="text-emerald-600 font-bold">adelanta el importe de las 6 cuotas iniciales</span> a los usuarios para eliminar el riesgo financiero de entrada.
            </p>
            <div className="mt-6 bg-emerald-100 rounded-xl p-4">
              <p className="text-emerald-700 text-sm">
                Los usuarios no pagan nada hasta recibir la subvencion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 6: Condiciones de Exito y Permanencia
function SuccessConditionsSlide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 6/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Condiciones de Exito y Permanencia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Pago Condicionado</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Los solicitantes <span className="text-[#00A3E0] font-semibold">solo pagan las 6 cuotas iniciales</span> si reciben efectivamente la ayuda del Kit Espacio de Datos.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Fidelizacion</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Obligacion contractual de <span className="text-emerald-600 font-semibold">renovar por 12 meses adicionales</span> tras el periodo subvencionado de 6 meses.
            </p>
          </div>
        </div>

        {/* Timeline visual */}
        <div className="bg-[#FFCC00] rounded-2xl p-8">
          <h4 className="text-[#003399] font-bold text-lg text-center mb-8">Ciclo Total del Contrato: 18 Meses</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white rounded-xl p-6 text-center flex-1 max-w-xs shadow-sm">
              <p className="text-[#00A3E0] font-bold text-3xl">6</p>
              <p className="text-[#00A3E0] font-semibold">meses</p>
              <p className="text-gray-600 text-sm mt-2">Periodo subvencionado</p>
              <p className="text-gray-500 text-xs mt-1">(Cuotas adelantadas por Spin-off)</p>
            </div>
            <ArrowRight className="w-8 h-8 text-[#003399] flex-shrink-0" />
            <div className="bg-white rounded-xl p-6 text-center flex-1 max-w-xs shadow-sm">
              <p className="text-emerald-500 font-bold text-3xl">12</p>
              <p className="text-emerald-500 font-semibold">meses</p>
              <p className="text-gray-600 text-sm mt-2">Renovacion obligatoria</p>
              <p className="text-gray-500 text-xs mt-1">(Cuotas pagadas por cliente)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 7: Desglose de Inversion Requerida (Escenario Spin-off)
function InvestmentBreakdownSlide() {
  const investments = [
    { label: "Marketing y Ventas", amount: 60000, color: "bg-[#00A3E0]" },
    { label: "Equipo Gestor y Tecnico", amount: 60000, color: "bg-emerald-500" },
    { label: "Infraestructura y Equipos", amount: 30000, color: "bg-[#FFCC00]" },
    { label: "Tramitacion Ayudas Kit Espacio de Datos", amount: 60000, color: "bg-purple-500", detail: "(600 EUR x 100 solicitudes)" },
    { label: "Consultoria Tecnica Solicitantes", amount: 100000, color: "bg-rose-500", detail: "(1.000 EUR x 100 solicitudes)" },
  ]

  const total = 310000

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 7/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Desglose de Inversion Requerida
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {investments.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <div>
                      <p className="text-[#003399] font-semibold">{item.label}</p>
                      {item.detail && <p className="text-gray-500 text-sm">{item.detail}</p>}
                    </div>
                  </div>
                  <p className="text-[#003399] font-bold text-xl">{formatNumber(item.amount)} EUR</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFCC00] rounded-3xl p-10 flex flex-col justify-center items-center">
            <PiggyBank className="w-16 h-16 text-[#003399] mb-4" />
            <p className="text-[#003399]/70 text-sm mb-2">TOTAL INVERSION URGENTE</p>
            <p className="text-6xl font-bold text-[#003399]">{formatNumber(total)}</p>
            <p className="text-[#003399] text-2xl font-semibold">EUR</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 8: Analisis de Flujo de Caja y Retorno
function CashFlowSlide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 8/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Analisis de Flujo de Caja y Retorno
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white border-2 border-[#00A3E0]/30 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Ingresos Diferidos</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Las cuotas de los 6 primeros meses (<span className="text-[#00A3E0] font-bold">174.000 EUR</span>) se cobran una vez los clientes reciben la subvencion (no es un gasto, es un ingreso diferido).
            </p>
            <div className="bg-[#00A3E0]/10 rounded-xl p-4">
              <p className="text-[#00A3E0] text-sm font-medium">
                Plazo estimado de cobro: 6 meses tras la adhesion
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Ingresos Recurrentes</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Generacion de ingresos mensuales en cuotas puras tras el periodo de financiacion inicial:
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-emerald-500">29.000</p>
              <p className="text-emerald-500 font-semibold">EUR / mes</p>
              <p className="text-gray-500 text-sm mt-2">(100 empresas x 290 EUR)</p>
            </div>
          </div>
        </div>

        {/* Cash flow timeline */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h4 className="text-[#003399] font-bold text-xl mb-6 text-center">Proyeccion de Flujo de Caja (18 meses)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <p className="text-gray-500 text-xs mb-1">Mes 0</p>
              <p className="text-[#003399] font-semibold text-sm mb-1">Inversion Inicial</p>
              <p className="text-red-500 font-bold text-lg">-310.000 EUR</p>
            </div>
            <div className="text-center p-4 bg-[#FFCC00]/10 rounded-xl">
              <p className="text-gray-500 text-xs mb-1">Mes 6</p>
              <p className="text-[#003399] font-semibold text-sm mb-1">Cobro Diferido</p>
              <p className="text-emerald-500 font-bold text-lg">+174.000 EUR</p>
            </div>
            <div className="text-center p-4 bg-[#00A3E0]/10 rounded-xl">
              <p className="text-gray-500 text-xs mb-1">Mes 12</p>
              <p className="text-[#003399] font-semibold text-sm mb-1">Ingresos MRR</p>
              <p className="text-[#00A3E0] font-bold text-lg">+174.000 EUR</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <p className="text-gray-500 text-xs mb-1">Mes 18</p>
              <p className="text-[#003399] font-semibold text-sm mb-1">Beneficio Neto</p>
              <p className="text-emerald-500 font-bold text-lg">+212.000 EUR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 9: Optimizacion del Gasto para Crecimiento
function GrowthOptimizationSlide() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 9/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Optimizacion del Gasto para Crecimiento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00A3E0] flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Canalizacion de Inversion</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Uso estrategico de los fondos para <span className="text-[#00A3E0] font-semibold">maximizar el CAC</span> (Coste de Adquisicion de Cliente) y <span className="text-[#00A3E0] font-semibold">reducir el "Time-to-Market"</span>.
            </p>
            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">CAC objetivo por empresa</span>
                <span className="text-[#00A3E0] font-bold">~600 EUR</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#FFCC00] flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-[#003399]" />
              </div>
              <div>
                <h3 className="text-[#003399] font-bold text-xl">Gobernanza</h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Gestion centralizada de las <span className="text-[#003399] font-semibold">justificaciones ante Red.es</span> para asegurar el flujo de ingresos de la Spin-off.
            </p>
            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-[#003399] text-sm">
                Documentacion y seguimiento de cada solicitud de ayuda
              </p>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="bg-[#003399] rounded-xl p-8">
          <h4 className="text-white font-bold text-xl mb-6 text-center">KPIs de Exito del Escenario Spin-off</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <p className="text-3xl font-bold text-[#00A3E0]">100</p>
              <p className="text-white/70 text-sm">Adhesiones Q1</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-3xl font-bold text-emerald-400">90%</p>
              <p className="text-white/70 text-sm">Tasa Aprobacion</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-7 h-7 text-[#FFCC00]" />
              </div>
              <p className="text-3xl font-bold text-[#FFCC00]">600 EUR</p>
              <p className="text-white/70 text-sm">CAC Maximo</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl font-bold text-white">18m</p>
              <p className="text-white/70 text-sm">LTV Minimo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Slide 10: Valoracion de Mercado: Objetivo 5.000.000 EUR
function MarketValuationSlide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#003399] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
            ESCENARIO SPIN-OFF - SLIDE 10/10
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Valoracion de Mercado
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFCC00] rounded-3xl p-10 text-center mb-8">
            <Award className="w-20 h-20 text-[#003399] mx-auto mb-6" />
            <p className="text-[#003399]/70 text-sm mb-2">VALORACION OBJETIVO 2026</p>
            <p className="text-8xl font-bold text-[#003399] mb-2">5.000.000</p>
            <p className="text-[#003399] text-3xl font-semibold">EUR</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-[#00A3E0]" />
                <h3 className="text-[#003399] font-bold">Activo Principal</h3>
              </div>
              <p className="text-gray-700">
                <span className="text-[#00A3E0] font-bold">100+ usuarios activos</span> y fidelizados bajo contrato por 18 meses
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
                <h3 className="text-[#003399] font-bold">Base de Valoracion</h3>
              </div>
              <p className="text-gray-700">
                Recurrencia de ingresos, derechos de explotacion y <span className="text-emerald-600 font-semibold">posicion dominante en EHDS</span>
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 bg-[#003399] rounded-xl p-8 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-4xl mx-auto">
            El Escenario Spin-off maximiza la velocidad de captacion y garantiza el retorno de la inversion
          </h4>
          <p className="text-white/80 max-w-2xl mx-auto">
            Con 310.000 EUR de inversion, conseguimos 100+ clientes fidelizados y una valoracion de 5M EUR a finales de 2026
          </p>
        </div>
      </div>
    </section>
  )
}

// Main component that exports all slides
export function SpinoffScenarioSections() {
  return (
    <>
      {/* Transition Header */}
      <section className="py-12 bg-[#003399]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-block bg-[#FFCC00] text-[#003399] text-lg font-bold px-8 py-4 rounded-full">
            SECCION: ESCENARIO SPIN-OFF
          </div>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Esta seccion presenta un modelo de ejecucion optimizado que complementa y escala la vision inicial
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
