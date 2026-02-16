import Link from "next/link"
import Image from "next/image"
import LogoGlare from "./LogoGlare"
import { SpotlightReveal } from "./SpotlightReveal"
import { FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="py-16 px-4 text-center font-adelle">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Investig Smarter Today</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mollis ex, eget auctor nunc.
        </p> */}
        <button className="border border-gray-500 text-gray-300 px-8 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Contacto
        </button>

        {/* Decorative Text */}
        <div className="mt-16 space-y-2 text-center">
          <p className="text-gray-600 uppercase text-xs sm:text-sm md:text-base
                        tracking-[0.28em] sm:tracking-[0.4em] md:tracking-[0.5em]
                        whitespace-nowrap">
            CONTINUOUSLY&nbsp;DEVELOPING
          </p>

          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 sm:w-8 bg-orange-500"></span>

            <p className="text-orange-500 uppercase font-light
                          text-xl sm:text-2xl md:text-3xl
                          tracking-[0.25em] sm:tracking-[0.32em] md:tracking-[0.4em]
                          whitespace-nowrap">
              ENGINEERING
            </p>

            <span className="h-px w-6 sm:w-8 bg-orange-500"></span>
          </div>
        </div>
      </section>

      {/* Logo with Glare Effect */}
      {/* <div className="flex justify-center py-12">
        <LogoGlare width={500} height={200} />
      </div> */}

      <SpotlightReveal spotlightSize={650} />

      {/* Blue Line Separator */}
      <div className="h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600"></div>

      {/* Footer Bar */}
      <div className="bg-black/95 py-6 px-4 font-adelle">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo - placeholder, user has their own */}
            {/* <div className="flex-shrink-0">
              <Image src="/logoNav.png" alt="CODE Logo" width={120} height={40} className="h-10 w-auto" />
            </div> */}

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <Link href="#nosotros" className="hover:text-orange-500 transition-colors">
                Nosotros
              </Link>
              <Link href="#herramientas" className="hover:text-orange-500 transition-colors">
                Herramientas
              </Link>
              <Link href="#faq" className="hover:text-orange-500 transition-colors">
                FAQ
              </Link>
              <Link href="#contacto" className="hover:text-orange-500 transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <FaYoutube className="w-8 h-8" />
              </Link>
              
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-sm mt-4">2026 Copyright © Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
