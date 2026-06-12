import React from 'react'
import Header from './Header'
import heroImg from '../assets/Graphic Placeholder.png'
import qrImg from '../assets/QR Code Placeholder.png'
import pixLogo from '../assets/Pix Logo.png'
import copyImg from '../assets/Copy Paste.png'
import heartImg from '../assets/heart on hand.png'
import footballImg from '../assets/football.jpg'
import childrenImg from '../assets/children.png'

export default function Landing() {
  const copyCnpj = async () => {
    const text = 'Inserir CNPJ'
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container-max flex-1 pt-24 pb-12  w-full border-none outline-none">
        <section className="grid lg:grid-cols-2 gap-8 items-start justify-center">
          <div className="flex-col justify-center">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-4xl font-extrabold text-blue-600 leading-tight">Sonho de um Menino</h2>
              <p className="mt-4 text-2xl t-24 text-gray-700"className="font-semibold text-blue-600">Construindo o futuro, peça por peça!</p>

              <div className="mt-8 flex gap-4 justify-center">
                <a href="#contato" className="px-6 py-3 bg-[#175391] text-white rounded-md shadow-lg donate-btn">Faça Sua Doação</a>
                <a href="#projetos" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md">Saiba Mais</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-end">
            <div className="w-full max-w-sm">
              <img src={heroImg} alt="Imagem ilustrativa" className="w-full h-72 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section id="sobre" className="mt-12">
          <h3 className="text-2xl font-semibold">Quem Somos</h3>
          <p className="mt-4 text-gray-600">A ONG Sonho de um Menino nasceu com o propósito de transformar vidas através do amor, do esporte e da solidariedade.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-md flex flex-col items-center">
              <img src={heartImg} alt="Missão" className="h-12 w-12 object-contain" />
              <p className="text-sm text-gray-600 mt-2 text-center">Somos uma ONG que realiza trabalhos sociais nas ruas, levando apoio, cuidado, esperança e atenção para pessoas que precisam ser vistas e acolhidas. Acreditamos que pequenos gestos podem mudar histórias.</p>
            </div>
            <div className="p-4 border rounded-md flex flex-col items-center">
              <img src={footballImg} alt="Visão" className="h-12 w-12 object-contain" />
              <p className="text-sm text-gray-600 mt-2 text-center">Também desenvolvemos uma escolhinha de futebol, onde crianças e adolescentes encontram muito mais do que esporte: encontram disciplina, amizade, oportunidades, respeito e incentivo para sonhar com um futuro melhor.</p>
            </div>
            <div className="p-4 border rounded-md flex flex-col items-center">
              <img src={childrenImg} alt="Valores" className="h-12 w-12 object-contain" />
              <p className="text-sm text-gray-600 mt-2 text-center">Nosso comprometimento é plantar esperança, fortalecer famílias e mostrar que todo menino e toda menina merecem oportunidades para crescer com dignidade, amor e propósito.</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mt-10">
          <h3 className="text-2xl font-semibold">Projetos Futuros</h3>
          <p className="mt-4 text-gray-600">Resumo dos projetos (espaço para imagens e descrições no futuro).</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-md">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">Imagem do projeto (placeholder)</div>
              <h4 className="mt-4 font-semibold">Projeto A</h4>
              <p className="text-sm text-gray-600 mt-2">Breve resumo do projeto A.</p>
            </div>
            <div className="p-4 border rounded-md">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">Imagem do projeto (placeholder)</div>
              <h4 className="mt-4 font-semibold">Projeto B</h4>
              <p className="text-sm text-gray-600 mt-2">Breve resumo do projeto B.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="mt-10">
          <h3 className="text-2xl font-semibold">Faça Sua Doação</h3>
          <p className="mt-4 text-gray-600">Escaneie e doe!</p>
          <div className="mt-6 flex flex-col items-center">
            <img src={qrImg} alt="QR Code" className="h-56 w-56 object-contain bg-gray-50 p-1 rounded border border-gray-200" />

            <div className="mt-12 flex items-center gap-1 justify-center">
              <p className="text-gray-600">Ou doe via PIX (CNPJ)</p>
              <img src={pixLogo} alt="PIX Logo" className="h-6 ml-2" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-md hover:bg-gray-100 cursor-pointer transition" onClick={copyCnpj}>
              <button type="button" onClick={copyCnpj} className="text-gray-600 focus:outline-none">Inserir CNPJ</button>
              <img src={copyImg} alt="Copiar" className="h-6 w-6" />
            </div>
          </div>
        </section>

        <section id="contato" className="mt-10">
          <h3 className="text-2xl font-semibold">Gratidão por fazer parte desse sonho!</h3>
          </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Sonho de um Menino — Todos os direitos reservados</div>
        </div>
      </footer>
    </div>
  )
}
