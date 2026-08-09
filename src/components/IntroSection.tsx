import { Suspense } from "react";
import { ProfileData } from "@/types/api";
import TypewriterText from "@/components/TypewriterText";
import styles from "@/styles/components/IntroSection.module.css";

interface IntroProps {
  profile: ProfileData | null;
}

export default function IntroSection({ profile }: IntroProps) {

  return (
    <section className={styles.blockIntro} id="intro">
      <div className="container">
        <div className={styles.introContent}>

          {/* Animação de digitação */}
          <div className={styles.introTypewriterWrapper}>
            <span className={styles.introTypewriterPrefix}>{">"}&nbsp;</span>
            <TypewriterText />
          </div>

          {/* Descrição */}
          <p className={styles.introDescription}>Este é meu espaço para mostrar quem sou, o que construo e o que aprendo. Explore os projetos e a stack que uso.</p>

          {/* CTAs */}
          <div className={styles.introActions}>
            <a href="#projects" className="btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn-secondary">Entrar em Contato</a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollIndicatorLine} />
        <span className={styles.scrollIndicatorLabel}>scroll</span>
      </div>
    </section>
  );
}
