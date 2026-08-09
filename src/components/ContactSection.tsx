import { SocialLink } from "@/types/api";
import { resolveIcon } from "@/lib/googleDriveUrl";
import styles from "@/styles/components/ContactSection.module.css";

interface ContactProps {
  socialLinks: SocialLink[];
}

export default function ContactSection({ socialLinks }: ContactProps) {
  if (!socialLinks || socialLinks.length === 0) return null;

  return (
    <section className={styles.blockContact} id="contact">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Vamos conversar</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.contactLayout}>
          <div>
            <h3 className={styles.contactCtaText}>
              Pronto para criar <span>algo incrível</span>?
            </h3>
            <p className={styles.contactSubtitle}>
              Sinta-se à vontade para entrar em contato para projetos, colaborações ou apenas para dar um oi.
            </p>
          </div>

          <ul className={styles.socialList}>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                >
                  {link.icon && (
                    <img
                      src={resolveIcon(link.icon)}
                      alt={link.name}
                      className={styles.socialIcon}
                      loading="lazy"
                    />
                  )}
                  {link.name}
                  
                  <span className={styles.socialItemArrow}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
