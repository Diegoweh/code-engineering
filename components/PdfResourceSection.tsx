"use client";

import { useEffect, useId, useState } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PdfResourceSectionProps {
  productName: string;
  pdfSrc: string;
}

export default function PdfResourceSection({
  productName,
  pdfSrc,
}: PdfResourceSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section className="relative py-20 px-4 font-adelle">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-zinc-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-orange-400/30 bg-orange-500/10 text-orange-400">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
                Ficha técnica
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {productName}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Consulta el documento técnico de la herramienta en formato PDF.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Ver PDF
            </button>
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Abrir
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative flex h-[88dvh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
                <h3
                  id={titleId}
                  className="min-w-0 truncate text-base font-semibold text-white sm:text-lg"
                >
                  {productName} PDF
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={pdfSrc}
                    download
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    aria-label={`Descargar PDF de ${productName}`}
                  >
                    <Download className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href={pdfSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    aria-label={`Abrir PDF de ${productName} en nueva pestaña`}
                  >
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    aria-label="Cerrar PDF"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <iframe
                src={`${pdfSrc}#view=FitH`}
                title={`PDF de ${productName}`}
                className="h-full w-full flex-1 bg-zinc-800"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
