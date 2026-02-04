import Image from "next/image"

export function FooterLogos() {
  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Kit Espacios de Datos - Logo principal */}
          <div className="w-full max-w-md">
            <Image
              src="/images/logo-kit-espacio-datos.jpg"
              alt="Kit Espacios de Datos"
              width={400}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Logos institucionales */}
          <div className="w-full max-w-4xl">
            <Image
              src="/images/logos-kit-digital.jpg"
              alt="Logos institucionales: Gobierno de España, Red.es, Kit Digital, NextGenerationEU"
              width={1200}
              height={100}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
