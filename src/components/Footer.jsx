import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brew-espresso border-t border-brew-rich px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-display text-brew-gold text-3xl font-light italic tracking-wider">Velvet</span>
              <span className="font-display text-brew-cream text-3xl font-semibold tracking-widest ml-2">BREW</span>
            </div>
            <p className="font-body text-brew-latte/60 text-sm leading-relaxed max-w-xs mb-6">
              A premium specialty coffee experience rooted in craft, community, and the pursuit of the perfect cup.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 border border-brew-rich hover:border-brew-gold flex items-center justify-center text-brew-medium hover:text-brew-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-brew-gold text-xs tracking-widest uppercase mb-5">Explore</p>
            <div className="space-y-3">
              {['Menu', 'Reviews', 'Location', 'Contact', 'Events', 'Gift Cards'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-body text-brew-latte/60 text-sm hover:text-brew-gold transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-body text-brew-gold text-xs tracking-widest uppercase mb-5">Stay Updated</p>
            <p className="font-body text-brew-latte/60 text-sm leading-relaxed mb-4">
              New seasonal menus, events, and exclusive offers — directly to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-brew-rich border border-brew-medium/40 text-brew-cream text-sm px-4 py-2.5 flex-1 focus:outline-none focus:border-brew-gold placeholder-brew-medium/50 font-body"
              />
              <button className="bg-brew-gold hover:bg-brew-caramel text-brew-espresso text-xs tracking-widest px-4 py-2.5 transition-colors font-body uppercase shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brew-rich pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-brew-medium/50 text-xs tracking-wide">
            © 2025 Velvet Brew. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <button key={item} className="font-body text-brew-medium/50 text-xs hover:text-brew-gold transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
