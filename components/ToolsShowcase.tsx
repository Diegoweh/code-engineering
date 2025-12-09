"use client"

import { useState, useRef } from "react"
import { Play, ArrowRight } from "lucide-react"

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  className="w-full h-full drop-shadow-2xl"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#ff7f00', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#ff5500', stopOpacity:1}} />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 50,10
                       C 25,10 5,30 5,60
                       C 5,90 25,110 50,110
                       C 80,110 115,60 115,60
                       C 115,60 80,10 50,10 Z

                       M 48,40
                       A 20,20 0 1,0 48,80
                       A 20,20 0 1,0 48,40 Z"
                    fill="url(#grad1)"
                  />
                </svg>
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
