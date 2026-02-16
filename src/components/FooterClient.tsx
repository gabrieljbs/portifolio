
'use client';

import { SocialLink, ProfileData } from "@/types/backend";
import { useEffect, useState } from "react";

interface FooterClientProps {
    data: ProfileData | null;
    socialLinks: SocialLink[];
}

export default function FooterClient({ data, socialLinks }: FooterClientProps) {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const name = data?.title || "Gabriel Santos";

    return (
        <footer className="w-full mt-24 border-t border-slate-800 bg-dark-surface/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gradient mb-2">{name}</h2>
                        <p className="text-sm text-slate-500 max-w-xs">
                            Construindo o futuro através de código limpo e experiências excepcionais.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    <img
                                        src={link.icon.startsWith('http') ? link.icon : `https://cdn.simpleicons.org/${link.icon}/ffffff`}
                                        alt={link.name}
                                        className="w-5 h-5 opacity-70 group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-slate-600">
                            © {currentYear || 2026} {name}. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
