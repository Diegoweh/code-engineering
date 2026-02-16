'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ES');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ES' ? 'EN' : 'ES');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black-900/95 backdrop-blur-md shadow-xl'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Izquierda */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div className="">
                <Image
                  src="/logoNav.png"
                  alt="Logo de la empresa"
                  width={90}
                  height={40}
                  className="h-auto w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Links de navegación - Centro */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 font-adelle">
            <Link
              href="#inicio"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="#tools-showcase"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Herramientas
            </Link>
            <Link
              href="#proyectos"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              FAQ
            </Link>
            {/* <Link
              href="#nosotros"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Nosotros
            </Link> */}
          </div>

          {/* Botón de contacto e idiomas - Derecha */}
          <div className="hidden md:flex items-center space-x-4 font-adelle">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-orange-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {language}
            </button>
            <Link
              href="#contacto"
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-lg hover:shadow-gray-500/50"
            >
              Contacto
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 py-4 border-t border-white/20 font-adelle">
            <Link
              href="#inicio"
              onClick={closeMobileMenu}
              className="text-white hover:text-orange-400 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg"
            >
              Nosotros
            </Link>
            <Link
              href="#tools-showcase"
              onClick={closeMobileMenu}
              className="text-white hover:text-orange-400 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg"
            >
              Herramientas
            </Link>
            <Link
              href="#proyectos"
              onClick={closeMobileMenu}
              className="text-white hover:text-orange-400 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg"
            >
              FAQ
            </Link>
            {/* <Link
              href="#nosotros"
              onClick={closeMobileMenu}
              className="text-white hover:text-orange-400 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg"
            >
              Nosotros
            </Link> */}
            <div className="flex items-center space-x-3 px-4 pt-2">
              <button
                onClick={toggleLanguage}
                className="flex-1 text-white hover:text-orange-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10 border border-white/20"
              >
                {language}
              </button>
              <Link
                href="#contacto"
                onClick={closeMobileMenu}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-center"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}