"use client"

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import ImageTextSection from '@/components/ImageTextSection'
import VideoBanner from '@/components/VideoBanner'
import { ToolsShowcase } from '@/components/ToolsShowcase'
import CarouselTextSection from '@/components/CarouselTextSection'

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
          <source src="/video/fill-d/fill-d-shortcut.compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            FILL-D
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2">
              Dispositivo de llenado de tubería que se activa remotamente mediante un pulso de presión desde una superficie.
            </span>
          </h2>
        </div>
      </header>


      {/* <section
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
      </section> */}

      {/* Sección con imagen y texto */}
        {/* <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d.webp"
            imageAlt="Nuestra empresa"
            title="En Pozos en los cuales su diseño precisa"
            description="La tubería de producción tiene que bajarse cerrada. La misma debe ser llenada con el fluido de terminación existente en el pozo. La manera mas sencilla de hacerlo es desde superficie, simplemente llenándola manualmente, con el consiguiente retraso y riesgos ambientales y humanos por cosntaminación. Otras alternativas es usar una manga o camisa de circulación la cual puede ser cerrada posteriormente con Coiled tubing o silickline con la consecuencia en costos y riesgos operacionales que esto conlleva. Otro mecanismo usado son las zapatas flotadoras, pero su uso depende del tipo de pozo y algunas veces son susceptibles de falla."
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        /> */}

        <CarouselTextSection
          images={[
            { src: '/img/fill-d/fill-d-1.webp', alt: 'Description 1' },
            { src: '/img/fill-d/fill-d.webp', alt: 'Description 0' },
            { src: '/img/fill-d/fill-d-2.webp', alt: 'Description 2' },
            { src: '/img/fill-d/fill-d-3.webp', alt: 'Description 3' },
          ]}
          title="En Pozos en los cuales su diseño precisa"
          description="La tubería de producción tiene que bajarse cerrada. La misma debe ser llenada con el fluido de terminación existente en el pozo. La manera mas sencilla de hacerlo es desde superficie, simplemente llenándola manualmente, con el consiguiente retraso y riesgos ambientales y humanos por cosntaminación. Otras alternativas es usar una manga o camisa de circulación la cual puede ser cerrada posteriormente con Coiled tubing o silickline con la consecuencia en costos y riesgos operacionales que esto conlleva. Otro mecanismo usado son las zapatas flotadoras, pero su uso depende del tipo de pozo y algunas veces son susceptibles de falla."
          imagePosition="left"
          autoPlay
          autoPlayInterval={3000}
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d-4.webp"
            imageAlt="Nuestra empresa"
            title="FILL-D, de CODE® Engineering"
            description="Es un dispositivo de llenado de tubería que puede ser activado de forma remota mediante un pulso de presión desde superficie. La herramienta como tal, forma parte de la sarta de terminación colocándose por encima del empacador, su sistema de ventanas, poseen un área de flujo mayor que el área de flujo de la sarta, y permanecen abiertas durante la bajada de la sarta permitiendo la entrada de fluido desde el anular hasta la tubería."
            imagePosition="right"
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
            imageSrc="/img/fill-d/fill-d-5.webp"
            imageAlt="Nuestra empresa"
            title="Una vez en el fondo, las ventanas pueden ser cerradas"
            description="FILL-D, posee un doble sistema de cierre independiente, uno externo por disco de ruptura y otro interno por pines calibrados, de manera que con solo actuar uno de lo sistemas es suficiente para que la herramienta cumpla con el propósito de volver hermética la tubería."
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/fill-d/fill-d-6.webp"
            imageAlt="Nuestra empresa"
            title="Posee además"
            description="Un perfil para alojar una operadora mecánica y accionarla en caso de ser necesario. Una vez que la herramienta se cierra, permanecerá trabada en posición cerrada durante la vida útil de la sarta de producción."
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ToolsShowcase />
            
    </main>
  )
}
