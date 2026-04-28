"use client";

import { ExternalLink, PlayCircle } from "lucide-react";

interface VideoLinkSectionProps {
  productName: string;
  videoHref: string;
  linkLabel?: string;
}

export default function VideoLinkSection({
  productName,
  videoHref,
  linkLabel = "Ver video",
}: VideoLinkSectionProps) {
  const isExternal = /^https?:\/\//.test(videoHref);

  return (
    <section className="relative px-4 py-10 font-adelle sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-y border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
              Video
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {productName}
            </h2>
          </div>

          <a
            href={videoHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            {linkLabel}
            {isExternal && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
          </a>
        </div>
      </div>
    </section>
  );
}
