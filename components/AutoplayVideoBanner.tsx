'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AutoplayVideoBannerProps {
  id?: string;
  videoSrc: string;
  posterImage?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  children?: React.ReactNode;
  height?: 'screen' | 'half' | 'full';
  loop?: boolean;
}

export default function AutoplayVideoBanner({
  id,
  videoSrc,
  posterImage,
  overlayOpacity = 0.4,
  overlayColor = 'bg-black',
  children,
  height = 'screen',
  loop = true,
}: AutoplayVideoBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heightClasses = {
    screen: 'min-h-screen',
    half: 'min-h-[50vh]',
    full: 'h-screen',
  };

  // Función agresiva para forzar reproducción
  const forcePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // Asegurar que está muted para autoplay
      video.muted = true;
      video.playsInline = true;

      // Intentar reproducir
      const playPromise = video.play();

      if (playPromise !== undefined) {
        await playPromise;
        setIsVideoPlaying(true);
        console.log('✅ Video reproduciendo');
      }
    } catch (error) {
      console.error('❌ Error al reproducir:', error);

      // Segundo intento después de un delay
      setTimeout(async () => {
        try {
          await video?.play();
          setIsVideoPlaying(true);
        } catch (e) {
          console.error('❌ Segundo intento falló:', e);
        }
      }, 500);
    }
  };

  // Intersection Observer para detectar cuando el video está visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            forcePlay();
          }
        });
      },
      {
        threshold: 0.25, // Reproducir cuando el 25% del video es visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Múltiples eventos para forzar reproducción
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir cuando el video está listo
    const handleCanPlay = () => {
      if (!isVideoPlaying) {
        forcePlay();
      }
    };

    const handleLoadedData = () => {
      if (!isVideoPlaying) {
        forcePlay();
      }
    };

    const handleLoadedMetadata = () => {
      if (!isVideoPlaying) {
        forcePlay();
      }
    };

    // Detectar cuando el video efectivamente está reproduciendo
    const handlePlaying = () => {
      setIsVideoPlaying(true);
    };

    const handlePause = () => {
      setIsVideoPlaying(false);
      // Intentar reproducir de nuevo si se pausa
      forcePlay();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);

    // Intento inicial inmediato
    forcePlay();

    // Intento después de 100ms
    const timer1 = setTimeout(forcePlay, 100);

    // Intento después de 500ms
    const timer2 = setTimeout(forcePlay, 500);

    // Intento después de 1s
    const timer3 = setTimeout(forcePlay, 1000);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isVideoPlaying]);

  // Animaciones GSAP
  useEffect(() => {
    if (!sectionRef.current || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      const timer = setTimeout(() => {
        // Animación del overlay
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
            },
          }
        );

        // Animación del contenido
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
              },
            }
          );
        }

        // Efecto parallax
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

        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [overlayOpacity, children]);

  // Intentar reproducir cuando se hace click en cualquier parte (fallback interactivo)
  const handleUserInteraction = () => {
    if (!isVideoPlaying) {
      forcePlay();
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative ${heightClasses[height]} w-full overflow-hidden cursor-pointer`}
      onClick={handleUserInteraction}
      onMouseEnter={handleUserInteraction}
    >
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-contain scale-110"
        loop={loop}
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        webkit-playsinline="true"
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 ${overlayColor} z-10 pointer-events-none`}
        style={{ opacity: 0 }}
      />

      {/* Contenido */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex items-center justify-center px-6 opacity-0 pointer-events-none"
      >
        {children}
      </div>

      {/* Indicador de estado (solo visible en desarrollo) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 z-50 bg-black/80 text-white px-3 py-1 rounded text-xs">
          {isVideoPlaying ? '▶ Reproduciendo' : '⏸ Pausado'}
        </div>
      )}
    </section>
  );
}
