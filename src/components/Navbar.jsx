import React, { useState, useEffect } from 'react'

const links = ['Menu', 'Reviews', 'Location', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brew-espresso/95 backdrop-blur-sm shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/telegram-1775339760420.jpg`}
            alt="Velvet Brew"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-brew-latte text-sm tracking-widest uppercase hover:text-brew-gold transition-colors duration-300"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="font-body text-brew-espresso bg-brew-gold hover:bg-brew-caramel text-sm tracking-widest uppercase px-6 py-2.5 transition-colors duration-300"
          >
            Reserve
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-brew-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-brew-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-brew-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-brew-espresso/98 px-6 pb-6 flex flex-col gap-5 border-t border-brew-rich">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-brew-latte text-sm tracking-widest uppercase hover:text-brew-gold transition-colors text-left"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="font-body text-brew-espresso bg-brew-gold text-sm tracking-widest uppercase px-6 py-2.5 w-fit"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </header>
  )
}
