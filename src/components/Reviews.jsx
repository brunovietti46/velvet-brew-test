import React, { useState } from 'react'
import { Play, X, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Isabelle Marchand',
    title: 'Food Critic — The Daily Palate',
    quote: 'The flat white alone is worth the trip. Silky, balanced, and presented with the quiet elegance this place is known for.',
    stars: 5,
    thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80&auto=format&fit=crop',
    videoId: 'YkgkThdzX-8',
    duration: '1:42',
    tag: 'Espresso Review',
  },
  {
    id: 2,
    name: 'James Thornton',
    title: 'Regular — 2 Years',
    quote: 'The staff remember my name, my order. The nitro cold brew is unlike anything else I have tried in the city.',
    stars: 5,
    thumbnail: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80&auto=format&fit=crop',
    videoId: 'YkgkThdzX-8',
    duration: '2:08',
    tag: 'Cold Brew',
  },
  {
    id: 3,
    name: 'Priya Kapoor',
    title: 'Interior Design Blogger',
    quote: 'Beyond the coffee — the atmosphere is a masterclass in thoughtful design. Warm, unhurried, and genuinely beautiful.',
    stars: 5,
    thumbnail: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80&auto=format&fit=crop',
    videoId: 'YkgkThdzX-8',
    duration: '1:55',
    tag: 'Ambience',
  },
  {
    id: 4,
    name: 'Marcus Rivera',
    title: 'Coffee Enthusiast',
    quote: 'The kouign-amann paired with a cardamom cortado is one of the best flavour combinations I have ever experienced.',
    stars: 5,
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&auto=format&fit=crop',
    videoId: 'YkgkThdzX-8',
    duration: '2:21',
    tag: 'Pastries',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < count ? 'fill-brew-gold text-brew-gold' : 'text-brew-medium/30'}
        />
      ))}
    </div>
  )
}

function VideoModal({ testimonial, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brew-espresso/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 font-body text-brew-latte/70 hover:text-brew-gold text-xs tracking-widest uppercase transition-colors"
        >
          <X size={16} /> Close
        </button>
        <div className="w-full aspect-video bg-brew-dark border border-brew-rich">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
            title={`${testimonial.name} testimonial`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="bg-brew-dark border border-t-0 border-brew-rich px-6 py-4 flex items-center justify-between">
          <div>
            <p className="font-body text-brew-cream text-sm font-medium">{testimonial.name}</p>
            <p className="font-body text-brew-latte/60 text-xs mt-0.5">{testimonial.title}</p>
          </div>
          <StarRow count={testimonial.stars} />
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {active !== null && (
        <VideoModal testimonial={testimonials[active]} onClose={() => setActive(null)} />
      )}

      <section id="reviews" className="bg-brew-dark py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brew-gold/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brew-gold/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-body text-brew-gold text-xs tracking-widest2 uppercase mb-3">Hear From Our Guests</p>
            <h2 className="font-display text-brew-cream text-5xl md:text-6xl font-light italic mb-4">
              Video Testimonials
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-brew-gold/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-brew-gold/50" />
              <div className="h-px w-20 bg-brew-gold/50" />
            </div>
            <p className="font-body text-brew-latte/60 text-base max-w-xl mx-auto leading-relaxed">
              Real stories from the people who make Velvet Brew what it is — our guests.
            </p>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="group cursor-pointer flex flex-col"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(i)}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-brew-rich">
                  <img
                    src={t.thumbnail}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brew-espresso/50 group-hover:bg-brew-espresso/30 transition-all duration-300" />
                  <span className="absolute top-3 right-3 font-body text-brew-cream text-xs bg-brew-espresso/80 px-2 py-1 tracking-wide">
                    {t.duration}
                  </span>
                  <span className="absolute top-3 left-3 font-body text-brew-gold text-xs border border-brew-gold/50 bg-brew-espresso/70 px-2 py-1 tracking-widest uppercase">
                    {t.tag}
                  </span>
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered === i ? 'scale-110' : 'scale-100'}`}>
                    <div className="w-14 h-14 rounded-full border-2 border-brew-gold bg-brew-espresso/60 flex items-center justify-center group-hover:bg-brew-gold/20 transition-all duration-300">
                      <Play size={22} className="text-brew-gold fill-brew-gold ml-1" />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-brew-rich border border-t-0 border-brew-medium/20 p-5 flex flex-col flex-1 group-hover:border-brew-gold/30 transition-colors duration-300">
                  <div className="mb-3">
                    <StarRow count={t.stars} />
                  </div>
                  <div className="flex-1">
                    <Quote size={16} className="text-brew-gold/40 mb-2" />
                    <p className="font-display text-brew-cream/90 text-base italic font-light leading-snug">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-brew-medium/20">
                    <p className="font-body text-brew-gold text-xs font-medium tracking-wide">{t.name}</p>
                    <p className="font-body text-brew-latte/50 text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-16 border border-brew-rich py-8 px-10">
            <div className="text-center">
              <p className="font-display text-brew-gold text-5xl font-light">4.9</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brew-gold text-brew-gold" />)}
              </div>
              <p className="font-body text-brew-latte/50 text-xs mt-1 tracking-wide">Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-14 bg-brew-rich" />
            <div className="text-center">
              <p className="font-display text-brew-gold text-5xl font-light">847</p>
              <p className="font-body text-brew-latte/50 text-xs mt-2 tracking-wide">Total Reviews</p>
            </div>
            <div className="hidden sm:block w-px h-14 bg-brew-rich" />
            <div className="text-center">
              <p className="font-display text-brew-gold text-5xl font-light">98%</p>
              <p className="font-body text-brew-latte/50 text-xs mt-2 tracking-wide">Would Recommend</p>
            </div>
            <div className="hidden sm:block w-px h-14 bg-brew-rich" />
            <div className="text-center">
              <p className="font-display text-brew-gold text-5xl font-light">12k+</p>
              <p className="font-body text-brew-latte/50 text-xs mt-2 tracking-wide">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
