
import { getTechnologies } from "@/actions/info";

export default async function Technologies() {
    const data = await getTechnologies();

    // Ensure we have an array
    const technologies = Array.isArray(data?.technologies) ? data.technologies : [];

    return (
        <section id="tecnologias" className="scroll-mt-24">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Minha Stack</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Algumas das tecnologias e ferramentas que utilizo no meu dia a dia para construir soluções eficientes.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tec: any) => (
                    <div
                        key={tec.id}
                        className="group flex flex-col items-center justify-center p-6 glass rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <img
                                src={tec.logo?.trim() || `https://cdn.simpleicons.org/${encodeURIComponent(tec.name.toLowerCase())}/ffffff`}
                                alt={tec.name}
                                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                                title={tec.name}
                            />
                        </div>
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{tec.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
