import { HeroSection } from "./components/hero_section";
import { ExperienceSection } from "./components/experience_section";
import { SidebarProfile } from "./components/sidebar_profile";
import { ProjectsSection } from "./components/projects_section";
import { TechStackSection } from "./components/tech_stack_section";

export default function Home() {
  const profileData = {
    name: "Alvino Dwi Nengku Wijaya",
    title: "Fullstack Developer",
    subtitle: "",
    imageSrc: "/alvino.png",
    profileInfo: {
      residence: "Indonesia",
      city: "Surabaya",
      age: "19",
    },

    socialLinks: [
      {
        icon: "linkedin" as const,
        href: "www.linkedin.com/in/alvinowj",
        label: "LinkedIn",
      },
      {
        icon: "github" as const,
        href: "https://github.com/AlvinoWJ",
        label: "GitHub",
      },
      {
        icon: "instagram" as const,
        href: "https://www.instagram.com/ino_alv/",
        label: "Instagram",
      },
    ],
  };
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr] lg:gap-12">
          <div className="relative">
            <SidebarProfile {...profileData} />
          </div>
          <div className="flex flex-col gap-10">
            <HeroSection />
            <TechStackSection />
            <ProjectsSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </main>
  );
}
