"use client"

import { Database, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[hsl(207,90%,15%)] overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-[hsl(199,89%,48%)] opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              width: `${12 + Math.random() * 16}px`,
              height: `${12 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Navigation badges */}
      <nav className="relative z-10 flex justify-center gap-4 pt-8 px-4 flex-wrap">
        <div className="flex items-center gap-2 bg-[hsl(207,40%,25%)] text-white px-5 py-2.5 rounded-full">
          <Database className="w-5 h-5 text-[hsl(199,89%,48%)]" />
          <span className="font-medium">SEDIA</span>
        </div>
        <div className="flex items-center gap-2 bg-[hsl(207,40%,25%)] text-white px-5 py-2.5 rounded-full">
          <svg className="w-5 h-5 text-[hsl(199,89%,48%)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-medium">Red.es</span>
        </div>
        <div className="flex items-center gap-2 bg-[hsl(207,40%,25%)] text-white px-5 py-2.5 rounded-full">
          <svg className="w-5 h-5 text-[hsl(199,89%,48%)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span className="font-medium">NextGeneration EU</span>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
          GLOBAL DATA
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[hsl(199,89%,48%)] mb-8 tracking-tight">
          CARE
        </h2>
        
        {/* Contact info */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right hidden lg:block">
          <p className="text-white font-medium italic">Emilio Mulet</p>
          <p className="text-white/80 text-sm">emilio.mulet@accuro.es</p>
        </div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
          ESPACIO de DATOS EUROPEO de SALUD
        </h3>
        <p className="text-lg md:text-xl text-[hsl(199,89%,48%)] font-medium mb-10">
          SUBVENCION KIT ESPACIO de DATOS
        </p>

        <Button 
          size="lg" 
          className="bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,40%)] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 shadow-lg shadow-[hsl(199,89%,48%)]/30"
        >
          <Star className="w-5 h-5" fill="currentColor" />
          SOLICITA TU AYUDA
        </Button>

        <div className="mt-8 flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm">Desplázate</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Footer logos placeholder */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4">
        <div className="flex justify-center items-center gap-6 md:gap-12 px-4 flex-wrap">
          <div className="flex items-center gap-2 text-[hsl(207,90%,30%)]">
            <Database className="w-6 h-6 text-[hsl(199,89%,48%)]" />
            <span className="text-sm font-medium">Kit Espacios<br/>de Datos</span>
          </div>
          <div className="h-10 w-px bg-gray-200 hidden md:block" />
          <span className="text-sm font-bold text-red-600">red.es</span>
          <div className="h-10 w-px bg-gray-200 hidden md:block" />
          <span className="text-sm font-bold text-[hsl(207,90%,30%)]">KIT DIGITAL</span>
          <div className="h-10 w-px bg-gray-200 hidden md:block" />
          <span className="text-sm font-bold text-red-500">R</span>
          <div className="h-10 w-px bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600">Financiado por<br/>la Unión Europea</span>
            <div className="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-yellow-400 text-xs">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
