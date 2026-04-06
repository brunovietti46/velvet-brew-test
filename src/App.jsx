import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Reviews from './components/Reviews.jsx'
import Loyalty from './components/Loyalty.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body bg-brew-espresso">
      <Navbar />
      <Hero />
      <Menu />
      <Reviews />
      <Loyalty />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}
