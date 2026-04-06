import React, { useState } from 'react'
import { Coffee, Gift, Star, Zap, Crown, ChevronRight, Check } from 'lucide-react'

const tiers = [
  {
    name: 'Brew Starter',
    icon: Coffee,
    points: '0 – 199',
    color: 'border-brew-medium/40 bg-brew-rich',
    labelColor: 'text-brew-latte/70',
    accentColor: 'text-brew-caramel',
    badgeBg: 'bg-brew-medium/20',
    perks: [
      '1 point per $1 spent',
      'Birthday double-points day',
      'Early access to seasonal menus',
      'Member-only newsletter',
    ],
  },
  {
    name: 'Velvet Member',
    icon: Star,
    points: '200 – 599',
    color: 'border-brew-gold/50 bg-brew-rich',
    labelColor: 'text-brew-gold',
    accentColor: 'text-brew-gold',
    badgeBg: 'bg-brew-gold/10',
    popular: true,
    perks: [
      '1.5 points per $1 spent',
      'Free drink on every 10th visit',
      'Priority weekend reservations',
      'Complimentary pastry on birthday',
      '10% off merchandise',
    ],
  },
  {
    name: 'Gold Reserve',
    icon: Crown,
    points: '600+',
    color: 'border-brew-gold bg-gradient-to-b from-brew-rich to-brew-dark',
    labelColor: 'text-brew-gold',
    accentColor: 'text-brew-gold',
    badgeBg: 'bg-brew-gold/20',
    perks: [
      '2 points per $1 spent',
      'Free monthly signature drink',
      'Exclusive cupping & tasting events',
      'Personalised barista consultation',
      '20% off all purchases',
      'Complimentary cold brew on arrival',
    ],
  },
]

const howItWorks = [
  {
    step: '01',
    icon: Coffee,
    title: 'Visit & Purchase',
    desc: 'Every dollar you spend at Velvet Brew — in-store or online — earns you points automatically.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Earn Points',
    desc: 'Points accumulate in your account. Higher tiers multiply your earning rate up to 2× per dollar.',
  },
  {
    step: '03',
    icon: Gift,
    title: 'Redeem Rewards',
    desc: 'Swap your points for free drinks, pastries, merchandise, or exclusive member-only experiences.',
  },
]

const redeemOptions = [
  { points: 50, reward: 'Free Espresso Shot', icon: '☕' },
  { points: 100, reward: 'Free Drip Coffee', icon: '🫖' },
  { points: 150, reward: 'Free Cold Brew', icon: '🧊' },
  { points: 200, reward: 'Free Pastry', icon: '🥐' },
  { points: 300, reward: 'Free Signature Drink', icon: '✨' },
  { points: 500, reward: 'Velvet Brew Merch', icon: '🎁' },
]

export default function Loyalty() {
  const [simulatedSpend, setSimulatedSpend] = useState(50)

  const pointsEarned = Math.floor(simulatedSpend * 1)
  const tierReached =
    pointsEarned >= 600 ? 'Gold Reserve' :
    pointsEarned >= 200 ? 'Velvet Member' : 'Brew Starter'

  return (
    <section id="loyalty" className="bg-brew-espresso py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brew-gold/3 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brew-gold/3 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-brew-gold text-xs tracking-widest2 uppercase mb-3">Members Club</p>
          <h2 className="font-display text-brew-cream text-5xl md:text-6xl font-light italic mb-4">
            Velvet Rewards
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-brew-gold/50" />
            <Crown size={14} className="text-brew-gold" />
            <div className="h-px w-20 bg-brew-gold/50" />
          </div>
          <p className="font-body text-brew-latte/60 text-base max-w-xl mx-auto leading-relaxed">
            Every cup brings you closer to something special. Join our loyalty programme
            and let your passion for great coffee pay you back.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brew-rich mb-20">
          {howItWorks.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className={`p-10 flex flex-col gap-5 ${i < howItWorks.length - 1 ? 'border-b md:border-b-0 md:border-r border-brew-rich' : ''} group hover:bg-brew-rich/30 transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-brew-gold/20 text-5xl font-light leading-none">{step.step}</span>
                  <div className="w-10 h-10 border border-brew-gold/30 flex items-center justify-center group-hover:border-brew-gold/60 transition-colors">
                    <Icon size={18} className="text-brew-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-brew-cream text-xl font-medium mb-2">{step.title}</h3>
                  <p className="font-body text-brew-latte/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tier cards */}
        <h3 className="font-display text-brew-cream text-3xl font-light italic text-center mb-10">
          Membership Tiers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative border ${tier.color} flex flex-col transition-transform duration-300 hover:-translate-y-1`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="font-body text-brew-espresso bg-brew-gold text-xs tracking-widest uppercase px-5 py-1.5">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 border-b border-brew-rich/50">
                  <div className={`inline-flex items-center gap-2 ${tier.badgeBg} px-3 py-1.5 mb-5`}>
                    <Icon size={14} className={tier.accentColor} />
                    <span className={`font-body text-xs tracking-widest uppercase ${tier.labelColor}`}>{tier.name}</span>
                  </div>
                  <div className="flex items-end gap-2 mb-1">
                    <span className={`font-display text-4xl font-light ${tier.accentColor}`}>
                      {tier.points.split('–')[0].trim()}
                    </span>
                    {tier.points.includes('–') && (
                      <span className="font-body text-brew-latte/40 text-sm mb-1.5">pts to unlock</span>
                    )}
                    {tier.points.endsWith('+') && (
                      <span className="font-body text-brew-latte/40 text-sm mb-1.5">pts</span>
                    )}
                  </div>
                  <p className="font-body text-brew-latte/40 text-xs tracking-wide">{tier.points} points</p>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={13} className={`${tier.accentColor} mt-0.5 shrink-0`} />
                        <span className="font-body text-brew-latte/70 text-sm leading-snug">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`mt-8 w-full font-body text-xs tracking-widest uppercase py-3.5 transition-all duration-300 flex items-center justify-center gap-2 group/btn
                      ${tier.popular
                        ? 'bg-brew-gold text-brew-espresso hover:bg-brew-caramel'
                        : 'border border-brew-medium/40 text-brew-latte/70 hover:border-brew-gold hover:text-brew-gold'
                      }`}
                  >
                    Join Now
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Redeem options */}
        <div className="mb-20">
          <h3 className="font-display text-brew-cream text-3xl font-light italic text-center mb-10">
            Redeem Your Points
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {redeemOptions.map((opt, i) => (
              <div
                key={i}
                className="border border-brew-rich bg-brew-rich hover:border-brew-gold/40 transition-all duration-300 p-5 text-center group cursor-default hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{opt.icon}</div>
                <p className="font-display text-brew-gold text-2xl font-light mb-1">{opt.points}</p>
                <p className="font-body text-brew-gold/60 text-xs mb-2">points</p>
                <p className="font-body text-brew-cream/80 text-xs leading-snug">{opt.reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive points simulator */}
        <div className="border border-brew-rich bg-brew-dark p-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body text-brew-gold text-xs tracking-widest uppercase mb-2">Interactive</p>
              <h3 className="font-display text-brew-cream text-3xl font-light italic">Points Calculator</h3>
              <p className="font-body text-brew-latte/50 text-sm mt-2">
                See how quickly your points add up
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <label className="font-body text-brew-latte/60 text-xs tracking-widest uppercase block mb-3">
                  Monthly spend at Velvet Brew
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-display text-brew-gold text-4xl font-light">${simulatedSpend}</span>
                  <span className="font-body text-brew-latte/40 text-sm">/ month</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  value={simulatedSpend}
                  onChange={(e) => setSimulatedSpend(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                  style={{ accentColor: '#C9A96E' }}
                />
                <div className="flex justify-between font-body text-brew-medium/50 text-xs mt-1">
                  <span>$10</span>
                  <span>$500</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Points this month', value: pointsEarned, suffix: 'pts' },
                  { label: 'Points after 12 months', value: pointsEarned * 12, suffix: 'pts' },
                  { label: 'Your tier', value: tierReached, suffix: '' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-brew-rich pb-3">
                    <span className="font-body text-brew-latte/60 text-sm">{stat.label}</span>
                    <span className={`font-display text-xl font-light ${i === 2 ? 'text-brew-gold' : 'text-brew-cream'}`}>
                      {stat.value}{stat.suffix && <span className="font-body text-xs text-brew-latte/50 ml-1">{stat.suffix}</span>}
                    </span>
                  </div>
                ))}
                <p className="font-body text-brew-gold/60 text-xs mt-2 leading-relaxed">
                  * Based on Brew Starter rate of 1pt per $1. Higher tiers earn up to 2× per dollar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 border border-brew-gold/30 bg-brew-rich p-10 text-center">
          <p className="font-display text-brew-cream text-4xl italic font-light mb-3">
            Start earning today
          </p>
          <p className="font-body text-brew-latte/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Sign up in-store or scan the QR code at the counter. Your first coffee is on us.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body text-brew-espresso bg-brew-gold hover:bg-brew-caramel text-sm tracking-widest uppercase px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-brew-gold/20"
          >
            Join Velvet Rewards
          </button>
        </div>
      </div>
    </section>
  )
}
