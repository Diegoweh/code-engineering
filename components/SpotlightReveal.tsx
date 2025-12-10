"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"

interface SpotlightRevealProps {
  spotlightSize?: number
}

export function SpotlightReveal({ spotlightSize = 250 }: SpotlightRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const lastPosRef = useRef({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const updateVars = useCallback(() => {
    rafRef.current = null
    const el = containerRef.current
    if (!el) return
    const { x, y } = lastPosRef.current
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()

      lastPosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(updateVars)
      }
    },
    [updateVars]
  )

  const handleTap = useCallback(() => {
    if (isTouchDevice) {
      setIsHovering((prev) => !prev)
    }
  }, [isTouchDevice])

  // Detectar si es dispositivo táctil
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      )
    }
    checkTouch()
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[500px] overflow-hidden bg-[#0a0a0a] ${
        isTouchDevice ? 'cursor-pointer' : 'cursor-none'
      }`}
      style={
        {
          // CSS vars iniciales
          "--mx": "0px",
          "--my": "0px",
          "--spot": `${spotlightSize}px`,
        } as React.CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerEnter={() => !isTouchDevice && setIsHovering(true)}
      onPointerLeave={() => !isTouchDevice && setIsHovering(false)}
      onClick={handleTap}
    >
      {/* Capa revelada */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-[clip-path] duration-150 ease-out`}
        style={{
          clipPath: isHovering
            ? `circle(var(--spot) at var(--mx) var(--my))`
            : `circle(0px at var(--mx) var(--my))`,
          willChange: "clip-path",
        }}
      >
        <Image
          src="/logoNav_1920.svg"
          alt="Logo"
          width={500}
          height={173}
          className="w-[90%] max-w-[1800px] opacity-40 translate-y-2"
          priority
        />
      </div>

      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovering
            ? `radial-gradient(
                circle calc(var(--spot) * 1.8) at var(--mx) var(--my),
                transparent 0%,
                rgba(10,10,10,0.4) 40%,
                rgba(10,10,10,0.95) 70%,
                rgba(10,10,10,1) 100%
              )`
            : "transparent",
          willChange: "background",
        }}
      />

      {/* Noise (mejor estático) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage: "url(/noise.png)", // ideal: textura chica 256px
          backgroundRepeat: "repeat",
        }}
      />

      {/* Spotlight glow con transform */}
      {isHovering && (
        <div
          className="absolute pointer-events-none rounded-full will-change-transform"
          style={{
            width: spotlightSize * 2.5,
            height: spotlightSize * 2.5,
            transform: `translate3d(calc(var(--mx) - ${spotlightSize * 1.25}px), calc(var(--my) - ${
              spotlightSize * 1.25
            }px), 0)`,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Custom cursor con transform - solo desktop */}
      {isHovering && !isTouchDevice && (
        <div
          className="absolute pointer-events-none z-50 transition-transform duration-75 will-change-transform"
          style={{
            width: 32,
            height: 32,
            transform: "translate3d(calc(var(--mx) - 16px), calc(var(--my) - 16px), 0)",
          }}
        >
          <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      )}

      {/* Hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.3em] uppercase transition-opacity duration-500 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
      >
        {isTouchDevice ? "Tap to reveal" : "Hover to reveal"}
      </div>
    </div>
  )
}
