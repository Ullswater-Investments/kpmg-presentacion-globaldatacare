import Image from "next/image"

export function FooterLogos() {
  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Kit Espacios de Datos - Logo principal */}
          <div className="w-full max-w-lg">
            <Image
              src="/images/logo-kit-espacio-datos.jpg"
              alt="Kit Espacios de Datos"
              width={500}
              height={180}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Red.es y Gobierno de España */}
          <div className="w-full max-w-2xl">
            <Image
              src="/images/logo-redes.jpg"
              alt="Gobierno de España - Ministerio para la Transformación Digital - Red.es"
              width={700}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
