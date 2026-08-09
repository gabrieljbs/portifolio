import { Technology } from "@/types/api";
import styles from "@/styles/components/StackSection.module.css";

interface StackProps {
  technologies: Technology[];
}

export default function StackSection({ technologies }: StackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className={styles.blockStack} id="stack">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Minha Stack</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.techChips}>
          {technologies.map((tech, i) => (
            <div key={tech.id || i} className={styles.techChip}>
              {tech.logo && (
                <img src={tech.logo} alt={tech.name} />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
