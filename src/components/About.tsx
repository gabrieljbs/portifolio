
import { getProfileData } from "@/actions/info";

export default async function About() {
    const data = await getProfileData();

    if (!data) return null;

    return (
        <section id="sobre" className="scroll-mt-24">
            <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {data.photo_url && (
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                            <img
                                src={data.photo_url}
                                alt={data.title}
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl border-4 border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    )}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-6">Sobre Mim</h3>
                        <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                            <p>
                                {data.description}
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                "Sempre em busca de novos desafios e tecnologias para criar o melhor impacto possível no mundo digital."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
