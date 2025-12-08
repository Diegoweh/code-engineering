'use client';

import VideoBanner from './VideoBanner';

export default function VideoBannerExample() {
  return (
    <VideoBanner
      id="video-section"
      videoSrc="/videos/banner.mp4"
      posterImage="/images/video-poster.jpg"
      overlayOpacity={0.5}
      overlayColor="bg-black"
      height="screen"
      autoPlay={true}
      loop={true}
      muted={true}
    >
      {/* Contenido que se mostrará sobre el video */}
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Innovación en Acción
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Transformamos ideas en realidad
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105">
          Conocer Más
        </button>
      </div>
    </VideoBanner>
  );
}
