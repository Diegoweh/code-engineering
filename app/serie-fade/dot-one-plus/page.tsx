"use client"

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ToolsShowcase } from '@/components/ToolsShowcase'
import CarouselTextSection from '@/components/CarouselTextSection'
import VideoTextSection from '@/components/VideoTextSection'
import ImageTextSection from '@/components/ImageTextSection'
import VideoBanner from '@/components/VideoBanner'

const serieFadeTools = [
  { href: '/serie-fade', label: 'TORPEDO' },
  { href: '/serie-fade/fade-one', label: 'FADE-ONE' },
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
        <h1 className="sr-only">DOT-ONE PLUS</h1>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo"
        >
          <source src="/video/serie-fade/serie-fade-tools-compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video>

        <div className="absolute inset-0 bg-black/0 flex items-center justify-center">
          {/* <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            DOT-ONE PLUS
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
            DOT-ONE & PLUS
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-start md:text-center text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed px-4 sm:px-6 md:px-0 font-adelle"
          >
            
          </motion.p>
        </motion.div>
      </section>

      <CarouselTextSection
        images={[
          { src: '/img/serie-fade/dot-one-plus/dot-one-plus.webp', alt: 'DOT-ONE PLUS 1' },
          { src: '/img/serie-fade/dot-one-plus/dot-one-plus-2.webp', alt: 'DOT-ONE PLUS 2' },
          { src: '/img/serie-fade/dot-one-plus/dot-one-plus-3.webp', alt: 'DOT-ONE PLUS 3' },          
        ]}
        title="DOT-ONE & PLUS (+) Dan aun mayor versatilidad a las herramientas FADE"
        description="Por ejemplo si se desea tener un mecanismo de respaldo para activación del sistema de cúpulas, puede añadirse a cualquier herramienta FADE el DOT ONE, este adiciona un mecanismo independiente que acciona la cúpula cerámica por presión diferencial."
        imagePosition="left"
        autoPlay
        autoPlayInterval={3000}
      />

      <VideoBanner
        id="innovation"
        videoSrc="/video/serie-fade/serie-fade-tools-compressed.mp4"
        overlayOpacity={0.0}
        overlayColor="bg-black"
        height="screen"
        
        autoPlay={true}
      >
        {/* Agrega algún contenido para probar */}
        {/* <h1 className="text-white text-4xl">Título del Banner</h1> */}
      </VideoBanner>

      {/* <VideoTextSection
        videoSrc="/video/serie-fade/serie-fade-tools-compressed.mp4"
        title="DOT-ONE PLUS"
        description="PLUS, bloquea la herramienta FADE hasta que se aliviane la columna hidrostática dentro de la tubería y la presión de yacimiento supere a la presión de la tubería, solo en este momento, PLUS libera el mecanismo para que la herramienta FADE pueda ser activada por un pulso de presión."
        videoPosition="right"
      /> */}

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/serie-fade/dot-one-plus/dot-one-plus-4.webp"
        imageAlt="Nuestra empresa"
        title="PLUS (+) ofrece un sistema de protección contra activación accidental del sistema FADE"
        description="De manera que puedan hacerse operaciones como asentamiento de packer, reemplazo de fluido de terminación o prueba de tubería, sin que ningún pico de presión active la cúpula cerámica. "
        imagePosition="right"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
      />

      {/* Sección con imagen y texto */}
      <ImageTextSection
        id="about"
        imageSrc="/img/serie-fade/dot-one-plus/dot-one-plus-5.webp"
        imageAlt="Nuestra empresa"
        title="PLUS, bloquea la herramienta FADE hasta que se aliviane la columna hidrostática dentro de la tubería"
        description="La presión de yacimiento supere a la presión de la tubería, solo en este momento, PLUS libera el mecanismo para que la herramienta FADE pueda ser activada por un pulso de presión."
        imagePosition="left"
        backgroundColor="bg-transparent"
        titleColor="text-white"
        descriptionColor="text-gray-300"
      />

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
