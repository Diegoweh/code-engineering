'use client';

import LightRays from './LightRays';

export default function BackgroundLightRays() {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff8c42"
        raysSpeed={1}
        lightSpread={1.2}
        rayLength={2}
        pulsating={false}
        fadeDistance={1.0}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.05}
        distortion={0.1}
      />
    </div>
  );
}
