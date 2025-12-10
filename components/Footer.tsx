import Link from "next/link"
import Image from "next/image"
import LogoGlare from "./LogoGlare"
import { SpotlightReveal } from "./SpotlightReveal"

export function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Investig Smarter Today</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet mollis ex, eget auctor nunc.
        </p> */}
        <button className="border border-gray-500 text-gray-300 px-8 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Contacto
        </button>

        {/* Decorative Text */}
        <div className="mt-16 space-y-2">
          <p className="text-gray-600 tracking-[0.5em] text-sm md:text-base">
            C O N T I N U O S &nbsp;&nbsp;&nbsp; D E V E L O P I N G
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-orange-500"></span>
            <p className="text-orange-500 tracking-[0.4em] text-2xl md:text-3xl font-light">E N G I N E E R I N G</p>
            <span className="h-px w-8 bg-orange-500"></span>
          </div>
        </div>
      </section>

      {/* Logo with Glare Effect */}
      {/* <div className="flex justify-center py-12">
        <LogoGlare width={500} height={200} />
      </div> */}

      <SpotlightReveal spotlightSize={200} />

      {/* Blue Line Separator */}
      <div className="h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600"></div>

      {/* Footer Bar */}
      <div className="bg-black/95 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo - placeholder, user has their own */}
            {/* <div className="flex-shrink-0">
              <Image src="/logoNav.png" alt="CODE Logo" width={120} height={40} className="h-10 w-auto" />
            </div> */}

            {/* Navigation */}
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <Link href="#nosotros" className="hover:text-gray-900 transition-colors">
                Nosotros
              </Link>
              <Link href="#herramientas" className="hover:text-gray-900 transition-colors">
                Herramientas
              </Link>
              <Link href="#faq" className="hover:text-gray-900 transition-colors">
                FAQ
              </Link>
              <Link href="#contacto" className="hover:text-gray-900 transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-sm mt-4">2025 Copyright © Aset. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
