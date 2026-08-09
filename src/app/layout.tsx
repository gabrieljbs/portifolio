import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Santos | DevSuite Portfólio",
  description: "Portfólio profissional de Gabriel Santos — desenvolvedor fullstack focado em experiências digitais de qualidade.",
  openGraph: {
    title: "Gabriel Santos | DevSuite Portfólio",
    description: "Portfólio profissional de Gabriel Santos — desenvolvedor fullstack focado em experiências digitais de qualidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Blobs de fundo sutis (z-index 0) */}
        <div className="bg-blob-1" aria-hidden="true" />
        <div className="bg-blob-2" aria-hidden="true" />

        {/* Navbar fixa */}
        <Navbar />

        {/* Conteúdo principal */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}

          {/* Footer mínimo */}
          <footer style={{
            background: "var(--bg-void)",
            borderTop: "1px solid rgba(237,230,208,0.06)",
            padding: "1.5rem 0",
            textAlign: "center",
            color: "var(--text-muted)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.05em",
          }}>
            <div className="container">
              &copy; {new Date().getFullYear()} Gabriel Santos — Feito com Next.js
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
