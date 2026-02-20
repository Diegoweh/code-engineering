"use client"

import { useState } from "react"

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué tipo de herramientas desarrolla CODE Engineering?",
    answer:
      "Desarrollamos soluciones para completación, intervención y optimización operativa en pozos de petróleo y gas, enfocadas en reducir tiempos, riesgos y costos.",
  },
  {
    question: "¿Las herramientas requieren intervención con coiled tubing o slickline?",
    answer:
      "Depende de la aplicación. Varios diseños buscan minimizar o evitar intervenciones adicionales, simplificando la operación en campo.",
  },
  {
    question: "¿Sus herramientas funcionan en pozos desviados u horizontales?",
    answer:
      "Sí. Nuestros desarrollos consideran condiciones exigentes de operación, incluyendo pozos altamente desviados y horizontales.",
  },
  {
    question: "¿Ofrecen acompañamiento técnico durante la implementación?",
    answer:
      "Sí. Brindamos soporte técnico desde la evaluación inicial hasta la ejecución operativa para asegurar una implementación segura y eficiente.",
  },
  {
    question: "¿Cómo puedo solicitar información comercial o una propuesta técnica?",
    answer:
      "Puedes contactarnos por el botón de contacto del sitio para coordinar una reunión técnica y revisar los requerimientos de tu operación.",
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <section className="max-w-5xl mx-auto font-adelle">
        <div className="text-center mb-12">
          <p className="text-orange-400 tracking-[0.28em] uppercase text-xs sm:text-sm">
            Support
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
            FAQ
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Preguntas frecuentes sobre nuestras herramientas, implementación y soporte técnico.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className="rounded-2xl border border-white/15 bg-black/40 backdrop-blur-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <h2 className="text-white text-lg sm:text-xl font-semibold">{item.question}</h2>
                  <span
                    className={`text-orange-400 text-2xl leading-none transition-transform ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 sm:px-7 sm:pb-7 text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
