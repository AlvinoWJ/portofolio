import { HeroSection } from "./components/hero_section";
import { ExperienceSection } from "./components/experience_section";
import { SidebarProfile } from "./components/sidebar_profile";

export default function Home() {
  const profileData = {
    name: "Alvino Dwi Nengku Wijaya",
    title: "Fullstack Developer",
    subtitle: "Creating Seamless Web Experiences",
    profileInfo: {
      residence: "Indonesia",
      city: "Surabaya",
      age: "19",
    },

    socialLinks: [
      { icon: "linkedin" as const, href: "#", label: "LinkedIn" },
      { icon: "github" as const, href: "#", label: "GitHub" },
      { icon: "instagram" as const, href: "#", label: "Instagram" },
      { icon: "facebook" as const, href: "#", label: "Facebook" },
      { icon: "twitter" as const, href: "#", label: "Twitter" },
    ],
  };
  return (
    <main className="min-h-screen">
      <SidebarProfile {...profileData} />
      <div className="ml-[25rem]">
        <HeroSection />

        <ExperienceSection />
      </div>
    </main>
  );
}
