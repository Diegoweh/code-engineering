'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const tubeVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-7, 10, -7],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <section className="min-h-dvh flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Logo */}
        {/* <motion.div variants={logoVariants} className="mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/img/codeHeroLogo.png"
            alt="Logo"
            width={200}
            height={80}
            className="h-auto w-32 sm:w-40 md:w-48 lg:w-56"
            priority
          />
        </motion.div> */}

        

        {/* Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-orange-400 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-3 sm:mb-4"
        >
          Nosotros
        </motion.p>

        {/* Título */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
        >
          Nuestra filosofía es clara, somos ingenieros que hacemos ingeniería
          {/* <span className="text-orange-400">con Código</span> */}
        </motion.h1>

        {/* Párrafo */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-start md:text-center text-base sm:text-lg md:text-xl max-w-xs   sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed px-4 sm:px-6 md:px-0"
        >
          Nos enfocamos en corregir las fallas más comunes en las herramientas actuales, mejorándolos en tres aspectos fundamentales, los hacemos más confiables, más eficientes y más versátiles, generando nuevas herramientas respaldadas por nuestra propia patentes
        </motion.p>

        {/* CTA opcional */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#contacto"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105 text-sm sm:text-base"
          >
            Comenzar Proyecto
          </a>
          <a
            href="#servicios"
            className="bg-transparent border-2 border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Ver Productos
          </a>
        </motion.div> */}
        {/* Imagen del tubo */}
        <motion.div
          variants={tubeVariants}
          className="mt-8 sm:mt-10 md:mt-12 relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative w-full"
          >
            <Image
              src="/img/heroTool.png"
              alt="Tubo"
              width={500}
              height={500}
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div> */}
    </section>
  );
}
