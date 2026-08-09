import { Technology } from "@/types/api";

interface TechProps {
  technologies: Technology[];
}

export default function TechnologiesSection({ technologies }: TechProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section id="technologies" className="section-tech">
      <div className="container">
        <div className="section-header">
          <span className="section-index">02 — Stack</span>
          <h2 className="section-title">Tecnologias</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Ferramentas e linguagens que utilizo para construir soluções eficientes.
          </p>
        </div>

        <div className="tech-scroll-wrapper">
          <div className="tech-chips">
            {technologies.map((tech) => (
              <div key={tech.id} className="tech-chip">
                {tech.logo && (
                  <img src={tech.logo} alt={tech.name} />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
