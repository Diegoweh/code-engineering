"use client"

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ToolsShowcase } from '@/components/ToolsShowcase'
import CarouselTextSection from '@/components/CarouselTextSection'
import ImageTextSection from '@/components/ImageTextSection'
import VideoBanner from '@/components/VideoBanner'
import PdfResourceSection from '@/components/PdfResourceSection'
import VideoLinkSection from '@/components/VideoLinkSection'

const serieFadeTools = [
  { href: '/serie-fade', label: 'TORPEDO' },
  { href: '/serie-fade/dot-one-plus', label: 'DOT-ONE PLUS' },
  { href: '/serie-fade/fade-two', label: 'FADE-TWO' },
  { href: '/serie-fade/fade-zero', label: 'FADE-ZERO' },
]

export default function Page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as const },
    },
  }

  return (
    <main className="min-h-screen">
      {/* Hero / Video header */}
      <header className="relative w-full h-screen overflow-hidden">
        <h1 className="sr-only">FADE-ONE</h1>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo"
        >
          <source src="/video/fade-one/fade-one-compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video> 

        <div className="absolute inset-0 bg-black/0 flex items-center justify-center">
          {/* <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            FADE-ONE
          </h2> */}
        </div>
      </header>

      <section
        className="min-h-dvh flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
        aria-labelledby="about-title"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            id="about-title"
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 font-adelle"
          >
            FADE ONE
          </motion.h2>

          {/* <motion.p
            variants={itemVariants}
            className="text-gray-300 text-start md:text-center text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed px-4 sm:px-6 md:px-0 font-adelle"
          >
            

          </motion.p> */}
        </motion.div>
      </section>

      <CarouselTextSection
        images={[
          { src: '/img/serie-fade/fade-one/fade-one.webp', alt: 'FADE-ONE' },
          { src: '/img/serie-fade/fade-one/fade-one-2.webp', alt: 'FADE-ONE 2' },
          { src: '/img/serie-fade/fade-one/fade-one-3.webp', alt: 'FADE-ONE 3' },
          { src: '/img/serie-fade/fade-one/fade-one-4.webp', alt: 'FADE-ONE 4' },
        ]}
        title="FADE ONE, al igual que las otras herramientas de la serie FADE, está diseñada para hacer las veces de un POP pero de manera más confiable y precisa."
        description="Cuando nos enfrentamos a altas presiones de yacimiento, expulsar un POP estándar, puede llegar ser una labor difícil, una presión muy alta puede hacer las veces de candado hidráulico que impida el desplazamiento del POP. FADE ONE, de CODE ENGINEERING®, está pensado para que, de la manera más sencilla, se elimine la posibilidad de ese evento indeseado. Su concepto es simple, dos cúpulas cerámicas enfrentadas por sus caras cóncavas, las cuales por su geometría pueden resistir las más altas presiones y ambientes agresivos. Entre las cúpulas se forma una cámara atmosférica protegida por sistema s de sellos redundantes."
        imagePosition="left"
        autoPlay
        autoPlayInterval={3000}
      />

      <VideoLinkSection productName="FADE ONE" videoHref="#innovation" />

      <VideoBanner
        id="innovation"
        videoSrc="/video/fade-one/fade-one-compressed.mp4"
        overlayOpacity={0.0}
        overlayColor="bg-black"
        height="screen"
        
        autoPlay={true}
      >
        {/* Agrega algún contenido para probar */}
        {/* <h1 className="text-white text-4xl">Título del Banner</h1> */}
      </VideoBanner>

      {/* <VideoTextSection
        videoSrc="/video/fade-one/fade-one-compressed.mp4"
        title=""
        description="Cuando las operaciones de terminación finalizan, la cúpula superior se rompe mecánicamente, esto se logra mediante la herramienta de CODE conocida como TORPEDO, este se lanza desde superficie y rompe la primera cúpula, la columna hidrostática al entrar en la cámara atmosférica rompe la segunda cúpula. También puede romperse la primera cúpula con Tubería flexible o coiled tubing, hasta aquí el sistema suena parecido a otros del mercado. Sin embargo, los análisis de ingeniería muestras que los sistemas cerámicos convencionales dejan aristas vivas en el mandril o housing de las mismas, CODE ha resuelto este problema colocando cuchillas cilíndricas las cuales actúan eliminando todo restos de cerámica, una vez que la primera cúpula se ha roto, estas aseguran un diámetro interno libre de obstrucciones."
        videoPosition="right"
      /> */}

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/serie-fade/fade-one/fade-one.webp"
        imageAlt="Nuestra empresa"
        title="Cuando las operaciones de terminación finalizan, la cúpula superior se rompe mecánicamente, "
        description="esto se logra mediante la herramienta de CODE conocida como TORPEDO, este se lanza desde superficie y rompe la primera cúpula, la columna hidrostática al entrar en la cámara atmosférica rompe la segunda cúpula. También puede romperse la primera cúpula con Tubería flexible o coiled tubing, hasta aquí el sistema suena parecido a otros del mercado. Sin embargo, los análisis de ingeniería muestras que los sistemas cerámicos convencionales dejan aristas vivas en el mandril o housing de las mismas, CODE ha resuelto este problema colocando cuchillas cilíndricas las cuales actúan eliminando todo restos de cerámica, una vez que la primera cúpula se ha roto, estas aseguran un diámetro interno libre de obstrucciones."
        imagePosition="right"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
      />

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/serie-fade/fade-one/fade-one-3.webp"
        imageAlt="Nuestra empresa"
        title="FADE ONE puede transformarse en una herramienta aún más versátil, adicionando en su parte superior “DOT ONE,"
        description="esto le otorga a la herramienta un mecanismo de activación remoto por presión diferencial (Tubería-Yacimiento), y si además se le adiciona “PLUS+” se obtiene un sistema completo protegido contra activación accidental por picos de presión durante las operaciones de terminación."
        imagePosition="left"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
      />

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/serie-fade/fade-one/fade-one-4.webp"
        imageAlt="Nuestra empresa"
        title={`FADE ONE: Activa de manera mecánica con TORPEDO o con tubería flexible.

FADE ONE.1: Activada por presión Diferencial Tubería-Yacimiento.

FADE ONE.1+: Activada por presión Diferencial Tubería-Yacimiento. Con mecanismo de protección contra activación previa.`}
        description=""
        imagePosition="right"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
        showDescriptionToggle={false}
      />

      <PdfResourceSection productName="FADE ONE" pdfSrc="/pdf/fade-one.pdf" />

      {/* Serie Fade sub-tools grid */}
      <section className="py-16 px-4 font-adelle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center text-lg font-medium mb-8">Más herramientas de la Serie Fade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serieFadeTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center justify-center rounded-xl border border-white/20 bg-zinc-800/60 px-4 py-6 text-white text-sm font-medium tracking-wider hover:bg-zinc-700/60 hover:border-orange-400/40 hover:text-orange-400 transition-all duration-200 text-center"
              >
                {tool.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ToolsShowcase excludeId="serie-fade" />
    </main>
  )
}
