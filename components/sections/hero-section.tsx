"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#003399] overflow-hidden">
      {/* EU Stars Circle - Top Right */}
      <div className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40">
        <div className="relative w-full h-full">
          {[...Array(12)].map((_, i) => (
            <svg
              key={i}
              className="absolute w-4 h-4 md:w-5 md:h-5 text-[#FFCC00]"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-48px)`,
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
        </div>
      </div>

      {/* Top bar with KIT ESPACIO de DATOS branding */}
      <div className="relative z-10 bg-[#002266] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* EU Stars small */}
            <div className="relative w-10 h-10">
              {[...Array(12)].map((_, i) => (
                <svg
                  key={i}
                  className="absolute w-2 h-2 text-[#FFCC00]"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-14px)`,
                  }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wide">KIT ESPACIO de DATOS</span>
              <span className="block text-[#FFCC00] text-xs font-medium">Financiado por la Union Europea</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
            <span>SEDIA</span>
            <span className="text-white/40">|</span>
            <span>Red.es</span>
            <span className="text-white/40">|</span>
            <span>NextGeneration EU</span>
          </div>
        </div>
      </div>

      {/* Golden accent line */}
      <div className="h-1 bg-gradient-to-r from-[#FFCC00] via-[#FFD700] to-[#FFCC00]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-none">
            GLOBAL DATA
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#FFCC00] tracking-tight leading-none">
            CARE
          </h2>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="h-px w-24 bg-[#FFCC00] mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Espacio de Datos Europeo de Salud
          </h3>
          <p className="text-lg md:text-xl text-white/80">
            Primer ecosistema de Espacios de Datos Federados de Salud en Europa
          </p>
          <div className="h-px w-24 bg-[#FFCC00] mx-auto mt-6" />
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-[#FFCC00] hover:bg-[#FFD700] text-[#003399] px-10 py-7 text-lg font-bold rounded-none uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#FFCC00]/30"
        >
          Solicita tu Ayuda
        </Button>

        {/* Contact info */}
        <div className="absolute right-8 bottom-32 text-right hidden lg:block">
          <p className="text-white font-medium">Emilio Mulet</p>
          <p className="text-white/60 text-sm">emilio.mulet@accuro.es</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Bottom golden bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#FFCC00]" />
    </section>
  )
}
