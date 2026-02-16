
import Link from "next/link";
import { getProfileData, getSocialLinks } from "@/actions/info";

export default async function Hero() {
    const [data, socialLinks] = await Promise.all([
        getProfileData(),
        getSocialLinks()
    ]);

    const profile = data || {
        id: 0,
        title: "Gabriel Developer",
        description: "Desenvolvedor Fullstack focado em criar experiências digitais incríveis.",
        photo_url: ""
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 gap-12">
            {/* Introdução */}
            <section className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
                <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
                    Olá, eu sou <span className="text-gradient leading-tight">{profile.title}</span>
                </h2>
                <p className="text-lg sm:text-xl mb-10 text-slate-400 max-w-2xl leading-relaxed">
                    {profile.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                        href="#projetos"
                        className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-105 transition-all duration-300"
                    >
                        Ver Projetos
                    </Link>
                    <Link
                        href="#sobre"
                        className="inline-flex items-center justify-center bg-slate-800 text-white font-semibold py-3 px-8 rounded-full border border-slate-700 hover:bg-slate-700 hover:scale-105 transition-all duration-300"
                    >
                        Sobre mim
                    </Link>
                </div>
            </section>

            {/* Contatos / Social links */}
            <section className="w-full max-w-sm glass rounded-3xl p-8 animate-in fade-in slide-in-from-right duration-1000">
                <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-4">Conecte-se comigo</h3>
                <div className="flex flex-col gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target={link.url.startsWith('http') ? '_blank' : '_self'}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <img
                                    src={link.icon.startsWith('http') ? link.icon : `https://cdn.simpleicons.org/${link.icon}/ffffff`}
                                    alt={link.name}
                                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                                />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{link.name}</span>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
