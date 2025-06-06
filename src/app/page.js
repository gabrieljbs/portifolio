import Image from "next/image";
import Link from "next/link";
import { projetos } from "../../public/lib/projetos";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <nav className="space-x-4">
          <Link href="#projetos" className="hover:underline">Projetos</Link>
          <Link href="#sobre" className="hover:underline">Sobre</Link>
          <Link href="#contato" className="hover:underline">Contato</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Olá, sou Gabriel Santos, sou um desenvolvedor Front-End</h2>
        <p className="text-lg max-w-xl">Crio interfaces modernas, responsivas e com foco na experiência do usuário usando Angular, React, Next.js, Tailwind CSS e mais.</p>
        <Link href="#projetos" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Ver Projetos</Link>
      </section>

      <section id="projetos" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Projetos em Destaque</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <Image src={project.imagem} alt={`Projeto ${project.titulo}`} width={500} height={500} className="rounded" />
              <h4 className="text-xl font-bold mt-4">{project.titulo}</h4>
              <p className="text-gray-600 mt-2">{project.descricao}</p>
              <p className="mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Ver Projeto
                </a>
              </p>

              {project.tecnologias && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tecnologias.map((tec) => (
                    <div key={tec} className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded text-sm">
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

      <section id="sobre" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-8">Sobre Mim</h3>
        <div className="max-w-2xl mx-auto text-center text-gray-700">
          <p>Sou apaixonado por desenvolvimento front-end e busco criar experiências visuais agradáveis e funcionais. Estou sempre aprendendo novas tecnologias e buscando evoluir como desenvolvedor.</p>
        </div>
      </section>

      <section id="contato" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Entre em Contato</h3>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Mensagem" rows={4} className="w-full border p-2 rounded" />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Enviar</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-100 mt-12">
        <p className="text-gray-600">© {new Date().getFullYear()} Gabriel Santos. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
