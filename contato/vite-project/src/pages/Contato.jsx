export default function ContatoPage() {
  return (
    // TROQUE A COR DO FUNDO AQUI -> bg-gray-100
    <div className="min-h-screen w-full bg-blue-100 flex items-center justify-center p-6">
      
      {/* TROQUE A COR DA CAIXA PRINCIPAL AQUI -> bg-white */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8 grid md:grid-cols-2 gap-16 items-start">

        {/* Informações de contato */}
        <div>

          {/* TROQUE A COR DO TÍTULO AQUI -> text-blue-700 */}
        <h1 className="text-5xl font-bold text-red-700 mb-2">            Contato
          </h1>

          {/* TROQUE A COR DO TEXTO AQUI -> text-gray-700 */}
          <p className="text--700 mb-8">
            Entre em contato com a ONG <strong>Sonho de um Menino</strong>.
            Estamos sempre abertos para conversar, tirar dúvidas e receber apoio.
          </p>

          <div className="space-y-5">

            {/* WhatsApp */}
            <div className="border rounded-2xl p-8 min-h-[140px] flex flex-col justify-center hover:shadow-md transition">

              {/* TROQUE A COR DO TÍTULO AQUI -> text-green-600 */}
              <h2 className="text-lg font-semibold text-pink-600">
                📱 WhatsApp
              </h2>

              {/* TROQUE A COR DO TEXTO AQUI -> text-gray-500 */}
              <p className="text-gray-500">
                Em breve disponível
              </p>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sonhodeummeninoong"
              target="_blank"
              rel="noreferrer"
              className="border rounded-2xl p-8 min-h-[140px] flex flex-col justify-center hover:shadow-md transition"
            >

              {/* TROQUE A COR DO TÍTULO AQUI -> text-pink-600 */}
              <h2 className="text-lg font-semibold text-pink-600">
                📸 Instagram
              </h2>

              {/* TROQUE A COR DO @ AQUI -> text-pink-500 */}
              <p className="text-pink-500 font-medium">
                @sonhodeummeninoong
              </p>
            </a>

            {/* Email */}
            <div className="border rounded-2xl p-8 min-h-[140px] flex flex-col justify-center hover:shadow-md transition">

              {/* TROQUE A COR DO TÍTULO AQUI -> text-purple-600 */}
              <h2 className="text-lg font-semibold text-purple-600">
                ✉️ Email
              </h2>

              <p className="text-gray-500">
                Em breve disponível
              </p>
            </div>

          </div>
        </div>

        {/* Formulário */}
        {/* TROQUE A COR DO FUNDO DO FORMULÁRIO AQUI -> bg-gray-50 */}
        <div className="bg-gray-50 rounded-3xl p-6 shadow-inner">

          {/* TROQUE A COR DO TÍTULO AQUI -> text-blue-700 */}
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Envie uma mensagem
          </h2>

          <form className="space-y-8">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"

                /* TROQUE A COR DA BORDA */
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>

              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>

              <textarea
                rows="5"
                placeholder="Digite sua mensagem"
                className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* TROQUE A COR DO BOTÃO AQUI -> bg-blue-700 */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Enviar
            </button>

            <p className="text-sm text-gray-500 text-center mt-2">
              * O formulário ainda não está conectado.
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}