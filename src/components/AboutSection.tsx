import { ProfileData } from "@/types/api";
import styles from "@/styles/components/AboutSection.module.css";

interface AboutProps {
  profile: ProfileData | null;
}

export default function AboutSection({ profile }: AboutProps) {
  if (!profile) return null;

  return (
    <section className={styles.blockAbout} id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre mim</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.aboutGrid}>

          {/* Foto ou placeholder */}
          <div className={styles.aboutPhotoWrap}>
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={profile.title}
                className={styles.aboutPhoto}
              />
            ) : (
              <div className={styles.aboutPhotoPlaceholder}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            )}
          </div>

          {/* Texto */}
          <div className={styles.aboutText}>
            
            <h3 className={styles.aboutHeading}>
              Construindo com propósito e precisão.
            </h3>

            <p className={styles.aboutBio}>{profile.description}</p>

            <p className={styles.aboutTagline}>
              "Sempre em busca de novos desafios para criar o melhor impacto possível no mundo digital."
            </p>

            <div style={{ display: "flex", gap: "0.875rem", marginTop: "0.5rem" }}>
              <a href="#contact" className="btn-secondary">Contato</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
