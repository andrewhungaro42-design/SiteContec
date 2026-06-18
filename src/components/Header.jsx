import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/LogoOriginal.png'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/projetos', label: 'Projetos Futuros' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const timer = window.setTimeout(() => setMenuOpen(false), 0)
    return () => window.clearTimeout(timer)
  }, [location.pathname, menuOpen])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: scrolled || menuOpen ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src={logoImg}
            alt="Logo Sonho de um Menino"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <span
            className="hidden sm:block text-base font-bold"
            style={{ fontFamily: "'Fredoka One', cursive", color: '#1a1a2e' }}
          >
            Sonho de um Menino
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 no-underline"
              style={{
                color: isActive(to) ? '#3d8fd1' : '#1a1a2e',
                backgroundColor: isActive(to) ? '#f0f4ff' : 'transparent',
              }}
              onMouseEnter={e => {
                if (!isActive(to)) {
                  e.currentTarget.style.backgroundColor = '#f0f4ff'
                  e.currentTarget.style.color = '#3d8fd1'
                }
              }}
              onMouseLeave={e => {
                if (!isActive(to)) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#1a1a2e'
                }
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 no-underline"
            style={{ backgroundColor: '#3d8fd1' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2e6fa3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3d8fd1')}
          >
            Doe Agora
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ color: '#1a1a2e' }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 border-t" style={{ borderColor: '#f0f4ff' }}>
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-colors"
                style={{
                  color: isActive(to) ? '#3d8fd1' : '#1a1a2e',
                  backgroundColor: isActive(to) ? '#f0f4ff' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-white text-center no-underline"
              style={{ backgroundColor: '#3d8fd1' }}
            >
              Doe Agora 💙
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
