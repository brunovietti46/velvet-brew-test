import React from 'react'

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image via Unsplash */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1800&q=80&auto=format&fit=crop')`,
        }}
      />

      {/* Layered dark overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brew-espresso/70 via-brew-dark/60 to-brew-espresso/90" />
      <div className="absolute inset-0 bg-brew-espresso/30" />

      {/* Decorative border lines */}
      <div className="absolute inset-8 border border-brew-gold/20 pointer-events-none hidden md:block" />
      <div className="absolute inset-10 border border-brew-gold/10 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-body text-brew-gold text-xs tracking-widest2 uppercase mb-6 opacity-90">
          Est. 2018 · Artisan Coffee
        </p>

        <h1 className="font-display text-brew-cream leading-none mb-4">
          <span className="block text-7xl md:text-9xl font-light italic text-brew-gold">Velvet</span>
          <span className="block text-6xl md:text-8xl font-semibold tracking-widest uppercase mt-2">Brew</span>
        </h1>

        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-brew-gold/60" />
          <span className="font-body text-brew-latte text-xs tracking-widest uppercase">Premium Coffee Experience</span>
          <div className="h-px w-16 bg-brew-gold/60" />
        </div>

        <p className="font-body text-brew-cream/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Where every cup tells a story. Sourced from the world's finest estates,
          crafted with passion, served with grace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMenu}
            className="font-body text-brew-espresso bg-brew-gold hover:bg-brew-caramel text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-brew-gold/20"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body text-brew-cream border border-brew-cream/40 hover:border-brew-gold hover:text-brew-gold text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-brew-gold/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brew-gold/60 to-transparent" />
      </div>
    </section>
  )
}
