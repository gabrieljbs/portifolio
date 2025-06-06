import Image from "next/image";
import Link from "next/link";
import { projetos } from "../../public/lib/projetos";
import { tecnologias } from "../../public/lib/tecnologias";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans max-w-screen-xl mx-auto px-4">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-gray-800">
        <h1 className="text-2xl font-bold">Gabriel Dev</h1>
        <nav className="space-x-4">
          <Link href="#tecnologias" className="hover:underline hover:text-blue-400">Tecnologias</Link>
          <Link href="#projetos" className="hover:underline hover:text-blue-400">Projetos</Link>
          <Link href="#sobre" className="hover:underline hover:text-blue-400">Sobre</Link>
          <Link href="#contato" className="hover:underline hover:text-blue-400">Contato</Link>
        </nav>
      </header>

      {/* Seção principal centralizada */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 bg-gray-800 py-24 min-h-[80vh]">
        {/* Introdução */}
        <section className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left max-w-xl mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">Oi! Sou o Gabriel Santos</h2>
          <p className="text-lg mb-6 text-gray-300">
            Gosto de criar interfaces bonitas, simples e funcionais. Uso ferramentas como Angular, React, Next.js e outras para dar vida às ideias.
          </p>
          <Link
            href="#projetos"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Ver Projetos
          </Link>
        </section>

        {/* Contatos */}
        <section className="bg-gray-700 shadow-md rounded-lg p-6 flex flex-col items-center lg:items-start gap-4 text-gray-300 text-sm w-full max-w-sm">
          <a href="mailto:gabrieljbs@email.com" className="flex items-center gap-2 hover:text-blue-400">
            <img src="https://cdn.simpleicons.org/gmail" alt="Email" className="w-4 h-4" />
            <span>gabrieljbs@email.com</span>
          </a>
          <a href="tel:+5541988326307" className="flex items-center gap-2 hover:text-blue-400">
            <img src="https://cdn.simpleicons.org/whatsapp" alt="Telefone" className="w-4 h-4" />
            <span>+55 41 98832-6307</span>
          </a>
          <a
            href="https://linkedin.com/in/gabriel-santos-2a0146365/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-blue-400"
            aria-label="LinkedIn"
          >
            {/* SVG unchanged */}
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4.983 3.5C4.983 4.88071 3.87671 6 2.5 6C1.12329 6 0 4.88071 0 3.5C0 2.11929 1.12329 1 2.5 1C3.87671 1 4.983 2.11929 4.983 3.5ZM0.332 8.25H4.67V23.5H0.332V8.25ZM7.875 8.25H12.055V10.29H12.105C12.68 9.255 14.003 8.172 16.065 8.172C20.16 8.172 21 10.956 21 14.742V23.5H16.65V15.63C16.65 13.908 16.61 11.785 14.415 11.785C12.18 11.785 11.775 13.53 11.775 15.5V23.5H7.425V8.25H7.875Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/gabrieljbs"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </section>
      </div>

      {/* Tecnologias */}
      <section id="tecnologias" className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-100">Tecnologias que uso</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {tecnologias.map((tec) => (
            <div key={tec} className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded text-sm text-gray-200">
              <img
                src={`https://cdn.simpleicons.org/${encodeURIComponent(tec)}`}
                alt={tec}
                className="w-4 h-4"
                title={tec}
              />
              <span>{tec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-100">Projetos em Destaque</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map((project) => (
            <div key={project.id} className="border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition bg-gray-800">
              <Image src={project.imagem} alt={`Projeto ${project.titulo}`} width={500} height={500} className="rounded" />
              <h4 className="text-xl font-bold mt-4 text-gray-100">{project.titulo}</h4>
              <p className="text-gray-300 mt-2">{project.descricao}</p>
              <p className="mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Ver Projeto
                </a>
              </p>
              {project.tecnologias && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tecnologias.map((tec) => (
                    <div key={tec} className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded text-sm text-gray-200">
                      <img
                        src={`https://cdn.simpleicons.org/${tec}`}
                        alt={tec}
                        className="w-4 h-4"
                        title={tec}
                      />
                      <span>{tec}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 px-6 bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-100">Sobre Mim</h3>
        <div className="max-w-2xl mx-auto text-left text-gray-300">
          <p className="mb-4">
            Sou um desenvolvedor front-end movido pela curiosidade e pela paixão em transformar ideias em interfaces intuitivas, bonitas e acessíveis. Acredito que uma boa experiência do usuário nasce da harmonia entre design e código.
          </p>
          <p>
            Estou em constante evolução, sempre buscando aprender, colaborar e construir experiências digitais que façam sentido para as pessoas. Para mim, cada linha de código é uma oportunidade de criar algo significativo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 mt-12 space-y-2 text-gray-400">
        <p>© {new Date().getFullYear()} Gabriel Santos. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:gabrieljbs@email.com" className="hover:text-blue-400" aria-label="Email">
            <img src="https://cdn.simpleicons.org/gmail" alt="Email" className="inline w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/gabriel-santos-2a0146365/" target="_blank" rel="noopener" className="hover:text-blue-400" aria-label="LinkedIn">
            <svg
              className="inline w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4.983 3.5C4.983 4.88071 3.87671 6 2.5 6C1.12329 6 0 4.88071 0 3.5C0 2.11929 1.12329 1 2.5 1C3.87671 1 4.983 2.11929 4.983 3.5ZM0.332 8.25H4.67V23.5H0.332V8.25ZM7.875 8.25H12.055V10.29H12.105C12.68 9.255 14.003 8.172 16.065 8.172C20.16 8.172 21 10.956 21 14.742V23.5H16.65V15.63C16.65 13.908 16.61 11.785 14.415 11.785C12.18 11.785 11.775 13.53 11.775 15.5V23.5H7.425V8.25H7.875Z" />
            </svg>
          </a>
          <a href="https://github.com/gabrieljbs" target="_blank" rel="noopener" className="hover:text-blue-400" aria-label="GitHub">
            <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="inline w-5 h-5" />
          </a>
        </div>
      </footer>
    </main>
  )
}
