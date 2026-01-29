"use client"

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import ImageTextSection from '@/components/ImageTextSection'
import VideoBanner from '@/components/VideoBanner'
import { ToolsShowcase } from '@/components/ToolsShowcase'

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

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.42, 0, 0.58, 1] as const },
    },
  }

  return (
    <main className="min-h-screen">
      {/* Hero / Video header */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Título accesible */}
        <h1 className="sr-only">Inicio</h1>

        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo"
        >
          <source src="/video/fill-d/fill-d-1-compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            Fill-D
            <span className="block text-orange-400 mt-2">
              Soluciones Reales
            </span>
          </h2>
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
            FILL-D de CODE® Engineering
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-start md:text-center text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed px-4 sm:px-6 md:px-0 font-adelle"
          >
            Dispositivo de llenado de tubería que se activa remotamente mediante un pulso de presión desde una superficie.
          </motion.p>
        </motion.div>
      </section>

      {/* Sección con imagen y texto */}
        <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d.webp"
            imageAlt="Nuestra empresa"
            title="Activado por discos de ruptura de alta precisión"
            description="Cuando el diseño del pozo requiere bajar la tubería de producción cerrada, esta debe llenarse con el fluido de terminación. Las opciones convencionales—llenado manual desde superficie, camisas de circulación con cierre posterior mediante coiled tubing o slickline, o zapatas flotadoras—implican retrasos, costos adicionales o riesgo de falla."
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <VideoBanner
          id="innovation"
          videoSrc="/video/fill-d/fill-d-2-compressed.mp4"
          overlayOpacity={0.0}
          overlayColor="bg-black"
          height="screen"
          
          autoPlay={true}
        >
          {/* Agrega algún contenido para probar */}
          {/* <h1 className="text-white text-4xl">Título del Banner</h1> */}
        </VideoBanner>

        <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d-2.webp"
            imageAlt="Nuestra empresa"
            title="Puntos de corte calibrados"
            description="Una vez en profundidad, las ventanas se cierran mediante un pulso de presión desde superficie. FILL-D cuenta con un doble sistema de cierre independiente: un disco de ruptura externo y pines calibrados de corte interno. Activar cualquiera de los dos sistemas es suficiente para sellar la tubería."
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d-3.webp"
            imageAlt="Nuestra empresa"
            title="Presión hidrostática o presión del pulso"
            description="La herramienta incluye un perfil para operadora mecánica estándar, permitiendo accionamiento mecánico si es requerido. Una vez cerrada, FILL-D queda trabada en posición durante la vida útil de la sarta de producción."
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ToolsShowcase />
            
    </main>
  )
}
