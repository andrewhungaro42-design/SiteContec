import React from 'react'
import logoImg from '../assets/Logo.png'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur z-30 border-b">
      <div className="container-max h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-md object-cover" />
          <div>
            <h1 className="text-lg font-semibold text-gray-700">Sonho de um Menino</h1>
          </div>
        </div>

        <nav>
          <ul className="flex gap-8 items-center">
            <li><a href="#sobre" className="text-gray-700 hover:text-blue-600">Sobre nós</a></li>
            <li><a href="#projetos" className="text-gray-700 hover:text-blue-600">Projetos Futuros</a></li>
            <li><a href="#contato" className="text-gray-700 hover:text-blue-600">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
