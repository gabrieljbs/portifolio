import { cleanGoogleDriveUrl } from "@/lib/googleDriveUrl";
import styles from "@/styles/components/ProjectsSection.module.css";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  image?: string;
  url?: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className={styles.blockProjects} id="projects">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">O que ando construindo</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={`${styles.projectCard} glass-card`}>
              <img
                src={cleanGoogleDriveUrl(project.imageUrl || project.image || "")}
                alt={project.title}
                className={styles.projectImage}
                loading="lazy"
              />
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDesc}>{project.description}</p>
                {(project.url || project.link) && (
                  <a
                    href={project.url || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectBtn}
                  >
                    Ver Projeto
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
