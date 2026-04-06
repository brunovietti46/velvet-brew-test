import React from 'react'
import { MapPin, Clock, Phone, Coffee } from 'lucide-react'

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 7:00 PM' },
]

export default function Location() {
  return (
    <section id="location" className="bg-brew-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-brew-sienna text-xs tracking-widest2 uppercase mb-3">Find Us</p>
          <h2 className="font-display text-brew-dark text-5xl md:text-6xl font-light italic mb-4">Our Location</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-brew-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-brew-gold" />
            <div className="h-px w-20 bg-brew-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-brew-latte shadow-xl shadow-brew-dark/10">
          {/* Info panel */}
          <div className="lg:col-span-2 bg-brew-dark p-10 flex flex-col justify-between">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border border-brew-gold/40 flex items-center justify-center">
                    <MapPin size={16} className="text-brew-gold" />
                  </div>
                  <p className="font-body text-brew-gold text-xs tracking-widest uppercase">Address</p>
                </div>
                <p className="font-display text-brew-cream text-xl font-light leading-relaxed">
                  248 Montague Street<br />
                  Brooklyn, New York<br />
                  NY 11201
                </p>
                <a
                  href="https://www.google.com/maps/search/248+Montague+Street+Brooklyn+NY"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-body text-brew-gold/70 hover:text-brew-gold text-xs tracking-widest uppercase mt-4 transition-colors underline underline-offset-4"
                >
                  Get Directions →
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border border-brew-gold/40 flex items-center justify-center">
                    <Clock size={16} className="text-brew-gold" />
                  </div>
                  <p className="font-body text-brew-gold text-xs tracking-widest uppercase">Hours</p>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span className="font-body text-brew-latte/70 text-sm">{h.day}</span>
                      <span className="font-body text-brew-cream text-sm shrink-0">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 border border-brew-gold/40 flex items-center justify-center">
                    <Phone size={16} className="text-brew-gold" />
                  </div>
                  <p className="font-body text-brew-gold text-xs tracking-widest uppercase">Contact</p>
                </div>
                <a href="tel:+17185550182" className="font-display text-brew-cream text-xl hover:text-brew-gold transition-colors">
                  +1 (718) 555-0182
                </a>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-10 pt-8 border-t border-brew-rich">
              <p className="font-body text-brew-gold/60 text-xs tracking-widest uppercase mb-4">Amenities</p>
              <div className="flex flex-wrap gap-2">
                {['Free Wi-Fi', 'Outdoor Seating', 'Private Events', 'Dog Friendly', 'Reservations'].map((a) => (
                  <span
                    key={a}
                    className="font-body text-brew-latte/70 text-xs border border-brew-rich px-3 py-1.5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 h-80 lg:h-auto min-h-96 relative overflow-hidden">
            <iframe
              title="Velvet Brew Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3474671484975!2d-73.99498738459388!3d40.69344637933445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a471e588de3%3A0x67fa16dbe2928e15!2sMontague%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale contrast-125 sepia"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Map overlay for dark toning */}
            <div className="absolute inset-0 bg-brew-dark/10 pointer-events-none mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  )
}
