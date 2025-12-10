'use client';

import { useEffect, useRef, useState, } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface VideoBannerProps {
  id?: string;
  videoSrc: string;
  posterImage?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  children?: React.ReactNode;
  height?: 'screen' | 'half' | 'full';
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  showPlayButton?: boolean;
}

export default function VideoBanner({
  id,
  videoSrc,
  posterImage,
  overlayOpacity = 0.4,
  overlayColor = 'bg-black',
  children,
  height = 'screen',
  autoPlay = false,
  loop = true,
  muted = true,
  showPlayButton = false,
}: VideoBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const heightClasses = {
    screen: 'min-h-screen',
    half: 'min-h-[50vh]',
    full: 'h-screen',
  };

  const handlePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  useEffect(() => {
    if (!sectionRef.current || !overlayRef.current) return;

    // Contexto de GSAP para mejor limpieza
    const ctx = gsap.context(() => {
      // Pequeño delay para asegurar que el DOM esté listo
      const timer = setTimeout(() => {
        // Animación del overlay con ScrollTrigger
        gsap.fromTo(
          overlayRef.current,
          {
            opacity: 0,
          },
          {
            opacity: overlayOpacity,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
              // Opcional: agregar marcadores para debug
              // markers: process.env.NODE_ENV === 'development',
            },
          }
        );

        // Animación del contenido con ScrollTrigger (solo si existe children)
        if (contentRef.current && children) {
          gsap.fromTo(
            contentRef.current,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.3,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
                // Opcional: agregar marcadores para debug
                // markers: process.env.NODE_ENV === 'development',
              },
            }
          );
        }

        // Animación de parallax al hacer scroll (solo si hay video)
        if (videoRef.current) {
          gsap.to(videoRef.current, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        // Refrescar ScrollTrigger después de configurar todo
        ScrollTrigger.refresh();
      }, 100);

      // Limpiar el timer
      return () => clearTimeout(timer);
    }, sectionRef);

    // Limpieza cuando el componente se desmonte
    return () => {
      ctx.revert();
    };
  }, [overlayOpacity, children]); // Dependencias

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative ${heightClasses[height]} w-full overflow-hidden`}
    >
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-contain scale-110"
        autoPlay={showPlayButton ? false : autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        poster={posterImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 ${overlayColor} z-10`}
        style={{ opacity: 0 }}
      />

      {/* Contenido */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex items-center justify-center px-6 opacity-0"
      >
        {children}
      </div>

      {/* Play Button - Solo se muestra si showPlayButton es true y no está reproduciendo */}
      {showPlayButton && !isPlaying && (
        <button
          onClick={handlePlay}
          onTouchEnd={handlePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center hover:scale-110 active:scale-95 transition-all touch-manipulation z-30"
          aria-label="Reproducir video"
        >
          <Image
            src="/img/play.svg"
            alt="Reproducir"
            fill
            className="object-contain drop-shadow-2xl select-none pointer-events-none"
            priority
          />
        </button>
      )}
    </section>
  );
}