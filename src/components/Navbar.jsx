import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold text-slate-800">TechAIVV</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-[#7c3aed] transition-colors">Home</Link>
          <Link to="/services" className="font-medium hover:text-[#7c3aed] transition-colors">Services</Link>
          <Link to="/contact" className="font-medium hover:text-[#7c3aed] transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold shadow hover:shadow-lg transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-inner">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="font-medium hover:text-[#7c3aed]">
              Home
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="font-medium hover:text-[#7c3aed]">
              Services
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="font-medium hover:text-[#7c3aed]">
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold shadow"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
