"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate form submission
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contato" className="scroll-mt-24 py-12">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Entre em Contato</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Tem uma ideia ou projeto em mente? Vamos conversar!
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl space-y-6">
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white">Informações de Contato</h4>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium opacity-60">Email</p>
                                <p className="font-semibold text-slate-800 dark:text-white">gabriel.dev@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium ml-1">Nome</label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all"
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium ml-1">Mensagem</label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all resize-none"
                            placeholder="Como posso te ajudar?"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 px-6 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {status === "loading" ? "Enviando..." : status === "success" ? "Enviado!" : (
                            <>
                                <span>Enviar Mensagem</span>
                                <Send className="h-5 w-5" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
