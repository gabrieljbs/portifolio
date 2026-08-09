import { ProfileData, SocialLink } from "@/types/api";

interface HeroProps {
  profile: ProfileData | null;
  socialLinks: SocialLink[];
}

export default function HeroSection({ profile, socialLinks }: HeroProps) {
  const name = profile?.title || "Gabriel";
  const description =
    profile?.description ||
    "Bem-vindo ao meu portfólio. Explore minhas tecnologias, projetos recentes e artigos de desenvolvimento.";

  return (
    <section className="hero-section container">

      {/* ── Coluna esquerda — tipografia editorial ── */}
      <div className="hero-left">
        <span className="hero-index">001 — Portfólio</span>

        <h1 className="hero-title">
          Olá,<br />
          eu sou<br />
          <span className="name-highlight">{name}.</span>
        </h1>

        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Ver Projetos</a>
          <a href="#technologies" className="btn-secondary">Tecnologias</a>
        </div>
      </div>

      {/* ── Coluna direita — card de perfil ── */}
      <div className="hero-right">
        <div className="glass-card hero-card">

          <div className="hero-card-header">
            {/* Avatar SVG — sem emoji */}
            <div className="hero-card-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <span className="hero-card-name">{name}</span>
              <span className="hero-card-role">Fullstack Dev</span>
            </div>
          </div>

          <hr className="hero-card-divider" />

          {socialLinks && socialLinks.length > 0 && (
            <ul className="hero-social-list">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hero-social-link"
                  >
                    <span className="hero-social-icon">
                      {link.icon && (
                        <img
                          src={
                            link.icon.startsWith("http")
                              ? link.icon
                              : `https://cdn.simpleicons.org/${link.icon}/9A8872`
                          }
                          alt={link.name}
                        />
                      )}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>

    </section>
  );
}
