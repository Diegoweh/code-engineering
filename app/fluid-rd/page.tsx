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
        <h1 className="sr-only">FLUID - RD・FLUID +</h1>

        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo"
        >
          <source src="/video/fluid-rd/fluid-rd-compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            FLUID-RD
            {/* <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2">
              Diseñada para la intervención de slickline o coiled tubing
            </span> */}
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
            FLUID-RD y FLUID+ de CODE® Engineering
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-start md:text-center text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed px-4 sm:px-6 md:px-0 font-adelle"
          >
            Intervención de slickline o coiled tubing
          </motion.p>
        </motion.div>
      </section>

      {/* Sección con imagen y texto */}
        {/* <ImageTextSection
            id="about"
            imageSrc="/img/fluid-rd/fluid-rd-1.webp"
            imageAlt="Nuestra empresa"
            title="Tras finalizar la terminación del pozo y antes de expulsar el POP o romper el domo cerámico"
            description="Suele reemplazarse el fluido de terminación por uno más liviano para reducir la presión hidrostática, facilitar el flujo a superficie y evitar dañar el reservorio por sobrepresión. Este cambio se realiza comúnmente mediante una camisa de circulación abierta con slickline o coiled tubing, desplazando el fluido por el anular. Sin embargo, este procedimiento implica riesgos operativos y costos adicionales innecesarios"
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        /> */}

        <CarouselTextSection
            images={[
              { src: '/img/fluid-rd/fluid-rd-1.webp', alt: 'Description 1' },
              { src: '/img/fluid-rd/fluid-rd-5.webp', alt: 'Description 0' },
              { src: '/img/fluid-rd/fluid-rd-6.webp', alt: 'Description 2' },
              { src: '/img/fluid-rd/fluid-rd-7.webp', alt: 'Description 3' },
            ]}
            title="Tras finalizar la terminación del pozo y antes de expulsar el POP o romper el domo cerámico"
            description="Suele reemplazarse el fluido de terminación por uno más liviano para reducir la presión hidrostática, facilitar el flujo a superficie y evitar dañar el reservorio por sobrepresión. Este cambio se realiza comúnmente mediante una camisa de circulación abierta con slickline o coiled tubing, desplazando el fluido por el anular. Sin embargo, este procedimiento implica riesgos operativos y costos adicionales innecesarios"
            imagePosition="left"
            autoPlay
            autoPlayInterval={3000}
          />

        <ImageTextSection
            id="about"
            imageSrc="/img/fluid-rd/fluid-rd-2.webp"
            imageAlt="Nuestra empresa"
            title="FLUID-RD y FLUID+ de CODE® Engineering"
            description="Resuelven este problema. Estas herramientas están diseñadas para realizar este procedimiento de manera que se minimice la intervención de slickline o coiled tubing"
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <VideoBanner
          id="innovation"
          videoSrc="/video/fluid-rd/fluid-rd-compressed.mp4"
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
            imageSrc="/img/fluid-rd/fluid-rd-3.webp"
            imageAlt="Nuestra empresa"
            title="Esta herramienta en cualquiera de sus dos versiones"
            description="Forma parte de la terminación superior, bajándose en posición cerrada por encima de la espiga de sellos, luego de que las operaciones de asentamiento y prueba de tubería han terminado, mediante un pulso de presión anular la herramienta es abierta por presión diferencial anular-tubería, esto crea una comunicación que es mayor que el área de flujo de la sarta de terminación, de esta forma se desplaza el fluido desde el anular hasta la tubería"
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/fluid-rd/fluid-rd-4.webp"
            imageAlt="Nuestra empresa"
            title="Una vez desplazado el fluido"
            description="Las herramientas FLUID-RD y FLUID+ pueden cerrarse con operadoras convencionales y permanecer en el pozo funcionando como camisa de circulación, permitiendo múltiples aperturas y cierres mecánicos. Además, FLUID+ incorpora una cámara de compensación que actúa como “booster” en pozos con fluidos de terminación muy pesados. Ambas herramientas son aptas para pozos horizontales o altamente desviados"
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ToolsShowcase />
            
    </main>
  )
}
