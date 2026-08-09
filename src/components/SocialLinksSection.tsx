import { SocialLink } from "@/types/api";
import { resolveIcon } from "@/lib/googleDriveUrl";

interface SocialProps {
  links: SocialLink[];
}

export default function SocialLinksSection({ links }: SocialProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="section-social container">
      <div className="section-header">
        <h2 className="section-title">Redes Sociais</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Vamos conversar. Me encontre nas plataformas abaixo.
        </p>
      </div>

      <div className="social-grid">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card social-link-item"
          >
            {link.icon && (
              <img
                src={resolveIcon(link.icon, "9A8872")}
                alt={link.name}
              />
            )}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
