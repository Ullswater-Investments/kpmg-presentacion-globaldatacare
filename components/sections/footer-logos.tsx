"use client"

import { Database } from "lucide-react"

export function FooterLogos() {
  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
          {/* Kit Espacios de Datos */}
          <div className="flex items-center gap-2">
            <div className="border-2 border-gray-200 rounded-lg p-2">
              <Database className="w-6 h-6 text-[hsl(199,89%,48%)]" />
            </div>
            <span className="text-sm font-medium text-[hsl(207,90%,30%)]">
              Kit Espacios<br/>de Datos
            </span>
          </div>

          {/* Gobierno de España */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-700 rounded" />
            <div className="w-8 h-8 bg-yellow-400 rounded" />
          </div>

          {/* Red.es */}
          <div className="text-xl font-bold">
            <span className="text-red-600">red</span>
            <span className="text-gray-800">.es</span>
          </div>

          {/* Kit Digital */}
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-bold text-[hsl(207,90%,30%)]">KIT<br/>DIGITAL</span>
          </div>

          {/* R */}
          <div className="text-3xl font-serif text-red-500 font-bold">R</div>

          {/* EU Flag */}
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-600 text-right">
              Financiado por<br/>la Unión Europea
            </div>
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-yellow-400"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-10px)`,
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
