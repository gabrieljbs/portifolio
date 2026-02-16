
import Image from "next/image";
import { getProjects } from "@/actions/project";

export default async function Projects() {
    const data = await getProjects();

    const getGoogleDriveDirectLink = (url: string) => {
        if (!url) return url;
        if (url.includes('drive.google.com') || url.includes('docs.google.com')) {
            const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
            if (idMatch && idMatch[1]) {
                return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
            }
        }
        return url;
    };

    return (
        <section id="projetos" className="scroll-mt-24">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-4">Projetos em Destaque</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Conheça alguns dos meus trabalhos mais recentes e as tecnologias aplicadas em cada um deles.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((project) => (
                    <div
                        key={project.id}
                        className="group flex flex-col glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                    >
                        {/* Image Wrapper */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <Image
                                src={getGoogleDriveDirectLink(project.image)}
                                alt={`Projeto ${project.title}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/20 to-transparent opacity-80" />

                            {/* Floating Badge (Optional) */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/30">
                                    Fullstack
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-8 pb-10">
                            <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4 line-clamp-1">
                                {project.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-800 hover:bg-primary text-white text-sm font-semibold rounded-2xl transition-all duration-300 group-hover:bg-primary border border-slate-700 group-hover:border-primary shadow-sm active:scale-95"
                            >
                                <span>Ver Projeto Ativo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
