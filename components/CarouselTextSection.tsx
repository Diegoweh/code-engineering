'use client';

import Image from 'next/image';
import { motion, Variants, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselTextSectionProps {
  id?: string;
  images: CarouselImage[];
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  imageWidth?: number;
  imageHeight?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function CarouselTextSection({
  id,
  images,
  title,
  description,
  imagePosition = 'left',
  backgroundColor = 'bg-transparent',
  titleColor = 'text-white',
  descriptionColor = 'text-gray-300',
  imageWidth = 600,
  imageHeight = 600,
  autoPlay = true,
  autoPlayInterval = 3500,
}: CarouselTextSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, next, images.length]);

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

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as const },
    }),
  };

  const content = (
    <>
      {/* Carousel */}
      <motion.div
        variants={imageVariants}
        className="w-full lg:w-1/2 flex items-center justify-center"
      >
        <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        variants={textVariants}
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 px-6 lg:px-12 text-center md:text-start font-adelle"
      >
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor}`}>
          {title}
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed ${descriptionColor}`}>
          {description}
        </p>
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
