"use client"

import { useState, useRef } from "react"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

const tools = [
  {
    id: "fill-d",
    name: "FILL-D",
    videoUrl: "/video/fill-d-compressed.mp4",
    thumbnail: "/img/fill-d.webp",
  },
  {
    id: "fluid-rd",
    name: "FLUID-RD * FLUID +",
    videoUrl: "/video/fluid-rd-compressed.mp4",
    thumbnail: "/img/fluid-rd-fluid+.webp",
  },
  {
    id: "serie-fade",
    name: "SERIE FADE",
    videoUrl: "/video/set-fade-compressed.mp4",
    thumbnail: "/img/code.webp",
  },
]

export function ToolsShowcase() {
  const [activeToolId, setActiveToolId] = useState(tools[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const activeTool = tools.find((tool) => tool.id === activeToolId) || tools[0]

  const handlePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setIsPlaying(true)
    // Intentar reproducir el video manualmente en mobile
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  const handleTabChange = (id: string) => {
    setActiveToolId(id)
    setIsPlaying(false)
  }

  return (
    <section className="py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-center text-lg font-medium mb-6">Herramientas</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto px-2">
          <div className="bg-zinc-800/60 rounded-full p-1 sm:p-1.5 flex gap-1 min-w-max">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleTabChange(tool.id)}
                onTouchEnd={() => handleTabChange(tool.id)}
                className={`px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap touch-manipulation ${
                  activeToolId === tool.id ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-white active:text-white"
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>
        </div>

        {/* Video Card */}
        <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
          {isPlaying ? (
            <video
              ref={videoRef}
              key={activeTool.videoUrl}
              src={activeTool.videoUrl}
              className="w-full aspect-video object-cover"
              autoPlay
              controls
              muted
              playsInline
            />
          ) : (
            <div className="relative">
              {/* Thumbnail */}
              <img
                src={activeTool.thumbnail || "/placeholder.svg"}
                alt={activeTool.name}
                className="w-full aspect-video object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Play Button - Mejorado para mobile */}
              <button
                onClick={handlePlay}
                onTouchEnd={handlePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all touch-manipulation z-10"
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

              {/* Product Name & CTA */}
              <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-white text-2xl sm:text-3xl font-light tracking-wider mb-3 sm:mb-4 px-4">{activeTool.name}</h3>
                <button
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
