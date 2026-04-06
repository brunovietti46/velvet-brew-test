import React, { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const occasions = ['Morning Coffee', 'Lunch Meeting', 'Private Event', 'Birthday', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    occasion: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.date) e.date = 'Date is required'
    if (!form.time) e.time = 'Time is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div>
      <label className="font-body text-brew-latte/70 text-xs tracking-widest uppercase block mb-2">
        {label}
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className={`w-full bg-brew-rich border ${errors[key] ? 'border-red-400' : 'border-brew-medium/40'} 
          text-brew-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-brew-gold 
          transition-colors placeholder-brew-medium/50`}
      />
      {errors[key] && (
        <p className="font-body text-red-400 text-xs mt-1">{errors[key]}</p>
      )}
    </div>
  )

  if (submitted) {
    return (
      <section id="contact" className="bg-brew-espresso py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-brew-gold" />
          </div>
          <h3 className="font-display text-brew-cream text-4xl italic font-light mb-4">
            Reservation Received
          </h3>
          <p className="font-body text-brew-latte/70 text-base leading-relaxed mb-8">
            Thank you, {form.name}. We have received your enquiry and will confirm your reservation
            via email within 2 hours. We look forward to welcoming you to Velvet Brew.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',guests:'2',date:'',time:'',occasion:'',message:'' }) }}
            className="font-body text-brew-espresso bg-brew-gold hover:bg-brew-caramel text-sm tracking-widest uppercase px-10 py-4 transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-brew-espresso py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-brew-gold text-xs tracking-widest2 uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-brew-cream text-5xl md:text-6xl font-light italic mb-4">
            Reserve a Table
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-brew-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-brew-gold/50" />
            <div className="h-px w-20 bg-brew-gold/50" />
          </div>
          <p className="font-body text-brew-latte/70 text-base max-w-xl mx-auto leading-relaxed">
            Whether you are planning a quiet morning meeting or a private celebration,
            we would love to host you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-brew-rich">
          {/* Sidebar */}
          <div className="bg-brew-rich p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="font-display text-brew-gold text-3xl italic font-light mb-3">
                  A table awaits
                </p>
                <p className="font-body text-brew-latte/70 text-sm leading-relaxed">
                  Reservations recommended for weekends and evenings. Walk-ins welcome during the week.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Reservations', val: '+1 (718) 555-0182' },
                  { label: 'Events', val: 'events@velvetbrew.com' },
                  { label: 'Response', val: 'Within 2 hours' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-body text-brew-gold/60 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="font-body text-brew-cream text-sm">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-brew-medium/30">
              <p className="font-display text-brew-cream/50 text-sm italic leading-relaxed">
                "The best conversations happen over great coffee."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-brew-dark p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {field('name', 'Full Name', 'text', 'Jane Smith')}
                {field('email', 'Email Address', 'email', 'jane@example.com')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {field('phone', 'Phone (optional)', 'tel', '+1 (555) 000-0000')}
                <div>
                  <label className="font-body text-brew-latte/70 text-xs tracking-widest uppercase block mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-brew-rich border border-brew-medium/40 text-brew-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-brew-gold transition-colors appearance-none"
                  >
                    {['1','2','3','4','5','6','7','8+'].map((n) => (
                      <option key={n} value={n} className="bg-brew-rich">{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {field('date', 'Preferred Date', 'date')}
                {field('time', 'Preferred Time', 'time')}
              </div>

              <div>
                <label className="font-body text-brew-latte/70 text-xs tracking-widest uppercase block mb-2">
                  Occasion
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setForm({ ...form, occasion: o })}
                      className={`font-body text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                        form.occasion === o
                          ? 'border-brew-gold bg-brew-gold/10 text-brew-gold'
                          : 'border-brew-medium/40 text-brew-latte/60 hover:border-brew-gold/60 hover:text-brew-latte'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-body text-brew-latte/70 text-xs tracking-widest uppercase block mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Dietary requirements, special requests, or anything else we should know..."
                  className="w-full bg-brew-rich border border-brew-medium/40 text-brew-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-brew-gold transition-colors resize-none placeholder-brew-medium/50"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-3 font-body text-brew-espresso bg-brew-gold hover:bg-brew-caramel text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-brew-gold/20"
                >
                  <span>Request Reservation</span>
                  <Send size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
