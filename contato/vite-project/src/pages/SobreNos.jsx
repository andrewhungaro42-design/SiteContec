import React from 'react';

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans pb-12">
      
      {/* Cabeçalho / Banner Principal */}
      {/* DICA: Para colocar a imagem de fundo depois, você pode adicionar a classe bg-[url('caminho-da-imagem')] aqui na div abaixo */}
      <div className="relative bg-blue-600 text-white py-24 px-6 text-center shadow-md overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl md:text-2xl italic font-light opacity-90">
            "Acreditamos que todo sonho merece uma chance."
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-[-40px] relative z-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
        {/* Nossa História */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
            Nossa História
          </h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-5 text-justify">
            <p>
              A ONG <strong>Sonho de um Menino</strong> nasceu no coração de Juiz de Fora com o propósito claro de transformar realidades e estender a mão a quem mais precisa. Somos uma organização não governamental estritamente voltada para amparar famílias e indivíduos em situações de vulnerabilidade social.
            </p>
            <p>
              O que começou como um desejo de fazer a diferença uniu pessoas dedicadas a transformar a solidariedade em ações práticas. Hoje, movemos redes de apoio para fazer com que recursos essenciais cheguem até as comunidades, garantindo que o básico e o afeto nunca falte.
            </p>
          </div>
        </section>

        {/* Missão e Valores */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
            O Que Nos Move
          </h2>
          
          <div className="bg-blue-50 rounded-2xl p-8 mb-8 shadow-inner">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Nossa Missão</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Promover a dignidade humana e o alívio da vulnerabilidade social por meio de campanhas ativas e contínuas de arrecadação e distribuição de alimentos, roupas, brinquedos e itens de primeira necessidade.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center bg-white">
              <span className="text-5xl mb-4 block">🤝</span>
              <h4 className="font-bold text-blue-600 text-xl mb-2">Solidariedade</h4>
              <p className="text-gray-600">O motor de cada campanha que realizamos.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center bg-white">
              <span className="text-5xl mb-4 block">💙</span>
              <h4 className="font-bold text-blue-600 text-xl mb-2">Inclusão & Amor</h4>
              <p className="text-gray-600">Olhar para o próximo sem distinção, acolhendo suas histórias.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center bg-white">
              <span className="text-5xl mb-4 block">🔍</span>
              <h4 className="font-bold text-blue-600 text-xl mb-2">Transparência</h4>
              <p className="text-gray-600">Compromisso total com cada doador e parceiro que viabiliza nosso trabalho.</p>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-l-4 border-blue-500 pl-4">
            Quem Faz Acontecer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            
            {/* Membro 1: Cristiano */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-gray-400 overflow-hidden shadow-md border-4 border-blue-100">
                <span className="text-sm px-4">Espaço para foto do Rosto</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cristiano Vieira</h3>
              <p className="text-blue-500 font-semibold text-lg">Presidente</p>
            </div>

            {/* Membro 2: Tatyane */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-gray-400 overflow-hidden shadow-md border-4 border-blue-100">
                <span className="text-sm px-4">Espaço para foto do Rosto</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Tatyane Almeida</h3>
              <p className="text-blue-500 font-semibold text-lg">Vice-Presidente</p>
            </div>

          </div>
          
          {/* Foto da Ação */}
          <div className="mt-12 bg-gray-100 rounded-2xl h-64 flex items-center justify-center text-gray-500 italic shadow-inner border-2 border-dashed border-gray-300">
            [ Espaço para a foto da equipe/voluntários em ação de rua ]
          </div>
        </section>

      </div>

      {/* Como Ajudar / CTA / Rodapé */}
      <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Como Ajudar</h2>
        <p className="text-blue-100 mb-10 text-xl">Faça uma doação e ajude a manter nossos projetos vivos.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {/* Card PIX */}
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg flex flex-col items-center text-center hover:bg-white/20 transition">
            <span className="text-4xl mb-4 block">💸</span>
            <h3 className="text-xl font-medium mb-3 text-blue-50">Chave PIX (CNPJ)</h3>
            <p className="text-2xl md:text-3xl font-mono bg-blue-800/50 py-3 px-6 rounded-xl font-bold tracking-wider w-full">
              50.412.437/0001-00
            </p>
          </div>
          
          {/* Card Contatos */}
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg flex flex-col justify-center space-y-6 hover:bg-white/20 transition">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">📱</span>
              <div>
                <span className="font-medium text-blue-100 block text-sm">Telefone / WhatsApp</span>
                <p className="text-xl font-bold tracking-wide">(32) 98805-1075</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">📸</span>
              <div>
                <span className="font-medium text-blue-100 block text-sm">Instagram</span>
                <p className="text-xl font-bold tracking-wide">@sonhodeummeninoong</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}