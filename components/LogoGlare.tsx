'use client';

import Image from 'next/image';
import GlareHover from './GlareHover';

interface LogoGlareProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoGlare({
  width = 200,
  height = 80,
  className = ''
}: LogoGlareProps) {
  return (
    <GlareHover
      width={`${width}px`}
      height={`${height}px`}
      background="transparent"
      borderRadius="12px"
      borderColor="transparent"
      glareColor="#ff8c42"
      glareOpacity={0.6}
      glareAngle={-45}
      glareSize={200}
      transitionDuration={800}
      className={`border-0 ${className}`}
    >
      <Image
        src="/logoNav.svg"
        alt="Code Engineering Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain"
        priority
      />
    </GlareHover>
  );
}
