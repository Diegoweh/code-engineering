'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
}

export default function VideoBanner({
  id,
  videoSrc,
  posterImage,
  overlayOpacity = 0.4,
  overlayColor = 'bg-black',
  children,
  height = 'screen',
  autoPlay = true,
  loop = true,
  muted = true,
}: VideoBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const heightClasses = {
    screen: 'min-h-screen',
    half: 'min-h-[50vh]',
    full: 'h-screen',
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
        className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        autoPlay={autoPlay}
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
    </section>
  );
}