import React, { useState } from 'react'

const categories = [
  {
    id: 'espresso',
    label: 'Espresso',
    description: 'Bold, rich, and perfectly extracted',
    items: [
      { name: 'Signature Espresso', desc: 'Single origin, dark roast, silky crema', price: '$4.50' },
      { name: 'Velvet Cortado', desc: 'Equal parts espresso and steamed milk', price: '$5.00' },
      { name: 'Flat White', desc: 'Ristretto shots with velvety microfoam', price: '$5.50' },
      { name: 'Macchiato', desc: 'Espresso marked with a dash of foam', price: '$4.75' },
      { name: 'Cappuccino', desc: 'Classic triple layer, dry foam finish', price: '$5.25' },
      { name: 'Americano', desc: 'Double shot diluted with hot spring water', price: '$4.25' },
    ],
  },
  {
    id: 'cold-brew',
    label: 'Cold Brew',
    description: 'Slow-steeped for 20 hours, silky smooth',
    items: [
      { name: 'Classic Cold Brew', desc: '20-hour steep, pure and unadulterated', price: '$6.00' },
      { name: 'Nitro Cold Brew', desc: 'Nitrogen-infused, creamy cascading pour', price: '$6.75' },
      { name: 'Vanilla Cream Float', desc: 'Cold brew with house vanilla sweet cream', price: '$7.00' },
      { name: 'Salted Caramel Brew', desc: 'Cold brew, caramel syrup, sea salt', price: '$7.25' },
      { name: 'Cold Brew Tonic', desc: 'Refreshing tonic water and cold brew blend', price: '$6.50' },
      { name: 'Mocha Cold Brew', desc: 'Dark chocolate, cold brew, oat milk', price: '$7.50' },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    description: 'Baked fresh each morning in-house',
    items: [
      { name: 'Almond Croissant', desc: 'Twice-baked with frangipane cream', price: '$5.50' },
      { name: 'Cardamom Roll', desc: 'Scandinavian-style with pearl sugar', price: '$5.00' },
      { name: 'Pain au Chocolat', desc: 'Valrhona dark chocolate, buttery layers', price: '$5.25' },
      { name: 'Kouign-Amann', desc: 'Caramelized, flaky, indulgent', price: '$5.75' },
      { name: 'Lemon Tart', desc: 'Crème brûlée crust, curd filling', price: '$6.00' },
      { name: 'Seasonal Scone', desc: 'Rotating flavors, served with clotted cream', price: '$4.75' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('espresso')

  const current = categories.find((c) => c.id === active)

  return (
    <section id="menu" className="bg-brew-ivory py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-brew-sienna text-xs tracking-widest2 uppercase mb-3">Curated Selection</p>
          <h2 className="font-display text-brew-dark text-5xl md:text-6xl font-light italic mb-4">Our Menu</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-brew-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-brew-gold" />
            <div className="h-px w-20 bg-brew-gold" />
          </div>
          <p className="font-body text-brew-medium text-base max-w-xl mx-auto leading-relaxed">
            Sourced from single-origin farms across Ethiopia, Colombia, and Guatemala.
            Roasted in small batches for peak flavour.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-brew-latte overflow-hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`font-body text-sm tracking-widest uppercase px-8 py-3.5 transition-all duration-300 ${
                  active === cat.id
                    ? 'bg-brew-dark text-brew-gold'
                    : 'bg-transparent text-brew-medium hover:bg-brew-latte/50 hover:text-brew-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        <p className="font-display text-brew-sienna italic text-xl text-center mb-10">
          {current.description}
        </p>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brew-latte">
          {current.items.map((item, i) => (
            <div
              key={i}
              className="border-b border-r border-brew-latte p-8 group hover:bg-brew-cream transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-brew-dark text-xl font-medium group-hover:text-brew-rich transition-colors">
                  {item.name}
                </h3>
                <span className="font-body text-brew-gold font-semibold text-base ml-4 shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="font-body text-brew-medium text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4 w-0 group-hover:w-8 h-px bg-brew-gold transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-body text-brew-medium/70 text-xs text-center mt-10 tracking-wide">
          All items can be prepared with oat, almond, or soy milk at no extra charge.
          Seasonal specials available daily — ask your barista.
        </p>
      </div>
    </section>
  )
}
