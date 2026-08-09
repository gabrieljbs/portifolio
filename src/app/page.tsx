import {
  getProfileData,
  getProjects,
  getSocialLinks,
  getTechnologies,
} from "@/actions/portfolio";
import IntroSection    from "@/components/IntroSection";
import AboutSection    from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection    from "@/components/StackSection";
import ContactSection  from "@/components/ContactSection";

export const revalidate = 60;

export default async function HomePage() {
  const [profile, technologies, projects, socialLinks] = await Promise.all([
    getProfileData(),
    getTechnologies(),
    getProjects(),
    getSocialLinks(),
  ]);

  return (
    <>
      
      <IntroSection profile={profile} />

      <AboutSection profile={profile} />

      <ProjectsSection projects={projects} />

      <StackSection technologies={technologies} />

      <ContactSection socialLinks={socialLinks} />
    </>
  );
}
