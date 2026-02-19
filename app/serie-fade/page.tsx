"use client"

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
        <h1 className="sr-only">SERIE FADE</h1>

        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo"
        >
          <source src="/video/serie-fade/serie-fade-compressed.mp4" type="video/mp4" />
          <track kind="captions" />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 font-adelle">
            SERIE FADE
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2">
              Un diseño simple e inteligente que permite “ROMPER” 
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
            SERIE FADE de CODE® Engineering
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
        <ImageTextSection
            id="about"
            imageSrc="/img/serie-fade/serie-fade.webp"
            imageAlt="Nuestra empresa"
            title="TORPEDO"
            description="Un diseño simple e inteligente que permite “ROMPER” las cúpulas cerámicas o barreras de cristal sin intervención de coiled tubing y sin explosivos ni baterías"
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/serie-fade/serie-fade-1.webp"
            imageAlt="Nuestra empresa"
            title="TORPEDO"
            description="Se lanza dentro de la tubería y al llegar al fondo, dispara un proyectil que impacta la cúpula cerámica. La fuerza para este disparo está basada en diferenciales de presión, por lo cual no usa electrónica ni explosivos"
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <VideoBanner
          id="innovation"
          videoSrc="/video/serie-fade/serie-fade-1-compressed.mp4"
          overlayOpacity={0.0}
          overlayColor="bg-black"
          height="screen"
          
          autoPlay={true}
        >
          {/* Agrega algún contenido para probar */}
          {/* <h1 className="text-white text-4xl">Título del Banner</h1> */}
        </VideoBanner>

        {/* <ImageTextSection
            id="about"
            imageSrc="/img/serie-fade/serie-fade-5.webp"
            imageAlt="Nuestra empresa"
            title="Una vez en el fondo, las ventanas pueden ser cerradas"
            description="SERIE FADE, posee un doble sistema de cierre independiente, uno externo por disco de ruptura y otro interno por pines calibrados, de manera que con solo actuar uno de lo sistemas es suficiente para que la herramienta cumpla con el propósito de volver hermética la tubería."
            imagePosition="right"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        />

        <ImageTextSection
            id="about"
            imageSrc="/img/serie-fade/serie-fade-6.webp"
            imageAlt="Nuestra empresa"
            title="Posee además"
            description="Un perfil para alojar una operadora mecánica y accionarla en caso de ser necesario. Una vez que la herramienta se cierra, permanecerá trabada en posición cerrada durante la vida útil de la sarta de producción."
            imagePosition="left"
            backgroundColor="bg-transparent"
            titleColor="text-white"
            descriptionColor="text-gray-300"
        /> */}

        <ToolsShowcase />
            
    </main>
  )
}
