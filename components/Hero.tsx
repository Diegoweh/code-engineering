'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const tubeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-7, 10, -7],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6 mt-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div variants={logoVariants} className="mb-8">
          <Image
            src="/img/codeHeroLogo.png"
            alt="Logo"
            width={200}
            height={80}
            className="h-auto w-auto"
            priority
          />
        </motion.div>

        {/* Imagen del tubo */}
        <motion.div
          variants={tubeVariants}
          className="mb-12 relative"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            <Image
              src="/img/heroTool.png"
              alt="Tubo"
              width={400}
              height={400}
              className="h-auto w-auto max-w-md drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-orange-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-4"
        >
          Nosotros
        </motion.p>

        {/* Título */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Nuestra filosofía es clara, somos ingeieros que hacemos ingeniería
          <br />
          {/* <span className="text-orange-400">con Código</span> */}
        </motion.h1>

        {/* Párrafo */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl max-w-5xl leading-relaxed"
        >
          Nos enfocamos en corregir las fallas más comunes en las herramientas actuales, mejorándolos en tres aspectos fundamentales, los hacemos más confiables, más eficientes y más versátiles, generando nuevas herramientas respaldadas por nuestra propia patentes
        </motion.p>

        {/* CTA opcional */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contacto"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105"
          >
            Comenzar Proyecto
          </a>
          <a
            href="#servicios"
            className="bg-transparent border-2 border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Ver Productos
          </a>
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
