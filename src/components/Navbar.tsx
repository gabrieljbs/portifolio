"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#tecnologias", label: "Tecnologias" },
        { href: "#projetos", label: "Projetos" },
        { href: "#sobre", label: "Sobre" },
    ];

    return (
        <>
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-slate-500 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="md:hidden flex items-center space-x-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-slate-500 dark:text-slate-300 hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden bg-background/80 backdrop-blur-md">
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-slate-500 dark:text-slate-300"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-slate-800 dark:text-white hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
