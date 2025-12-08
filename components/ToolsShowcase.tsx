"use client"

import { useState } from "react"
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

  const activeTool = tools.find((tool) => tool.id === activeToolId) || tools[0]

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleTabChange = (id: string) => {
    setActiveToolId(id)
    setIsPlaying(false)
  }

  return (
    <section className="py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-orange-500 text-center text-lg font-medium mb-6">Herramientas</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-zinc-800/60 rounded-full p-1.5 flex gap-1">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleTabChange(tool.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeToolId === tool.id ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-white"
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
              key={activeTool.videoUrl}
              src={activeTool.videoUrl}
              className="w-full aspect-video object-cover"
              autoPlay
              controls
              muted
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Play Button */}
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-800/90 rounded-full flex items-center justify-center hover:bg-zinc-700/90 transition-colors"
              >
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </button>

              {/* Product Name & CTA */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-white text-3xl font-light tracking-wider mb-4">{activeTool.name}</h3>
                <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
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
