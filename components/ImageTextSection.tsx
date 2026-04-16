'use client';

import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SECTION_DESCRIPTION_CLASS, SECTION_TITLE_CLASS } from '@/lib/sectionTextStyles';

interface ImageTextSectionProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  showDescriptionToggle?: boolean;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ImageTextSection({
  id,
  imageSrc,
  imageAlt,
  title,
  description,
  showDescriptionToggle = true,
  imagePosition = 'left',
  backgroundColor = 'bg-transparent',
  titleColor = 'text-white',
  descriptionColor = 'text-gray-300',
  imageWidth = 600,
  imageHeight = 600,
}: ImageTextSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: imagePosition === 'left' ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const content = (
    <>
      {/* Imagen */}
      <motion.div
        variants={imageVariants}
        className="w-full lg:w-1/2 flex items-center justify-center"
      >
        <div className="relative w-full max-w-lg aspect-square">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Contenido de texto */}
      <motion.div
        variants={textVariants}
        className="w-full  flex flex-col justify-center space-y-6 px-6 lg:px-12 text-center md:text-start font-adelle"
      >
        <h2 className={`${SECTION_TITLE_CLASS} ${titleColor}`}>
          {title}
        </h2>
        <div className="flex flex-col items-center gap-3">
          {showDescriptionToggle && (
            <button
              type="button"
              onClick={() => setIsDescriptionVisible((prev) => !prev)}
              className="text-sm md:text-base font-semibold text-orange-500 underline underline-offset-4 transition-opacity hover:opacity-80"
              aria-expanded={isDescriptionVisible}
            >
              {isDescriptionVisible ? 'Ver menos' : 'Ver más'}
            </button>
          )}

          {(!showDescriptionToggle || isDescriptionVisible) && (
            <p className={`${SECTION_DESCRIPTION_CLASS} ${descriptionColor}`}>
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </>
  );

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen flex items-center py-12 ${backgroundColor}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`max-w-7xl mx-auto w-full flex flex-col ${
          imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center lg:items-start gap-12 lg:gap-20`}
      >
        {content}
      </motion.div>
    </section>
  );
}
