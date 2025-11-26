import { HeroSection } from "./components/hero_section";
import { ExperienceSection } from "./components/experience_section";
import { SidebarProfile } from "./components/sidebar_profile";

export default function Home() {
  const profileData = {
    name: "Alvino Dwi Nengku Wijaya",
    title: "Fullstack Developer",
    subtitle: "Creating Seamless Web Experiences",
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
      <div className="container mx-auto px-4 py-8 pt-8 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr] lg:gap-12">
          <div className="relative">
            <SidebarProfile {...profileData} />
          </div>
          <div className="flex flex-col gap-16">
            <HeroSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </main>
  );
}
