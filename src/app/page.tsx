"use client";

import { useState } from "react";
import { HeroSection } from "./components/hero_section";
import { ExperienceSection } from "./components/experience_section";
import { SidebarProfile } from "./components/sidebar_profile";
import { ProjectsSection } from "./components/projects_section";
import { TechStackSection } from "./components/tech_stack_section";
import Preloader from "./components/preloader";
import { AnimatePresence } from "framer-motion";
import { useLoading } from "./context/loading_context";

export default function Home() {
  const { hasLoaded, setHasLoaded } = useLoading();
  const [isLoading, setIsLoading] = useState(!hasLoaded);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
  };

  const profileData = {
    name: "Alvino Dwi Nengku Wijaya",
    title: "Fullstack Developer | IT Enthusiast",
    imageSrc: "/alvino.png",
    profileInfo: {
      university: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
      location: "Surabaya City - Indonesia",
    },

    socialLinks: [
      {
        icon: "linkedin" as const,
        href: "https://www.linkedin.com/in/alvinowj",
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="container mx-auto px-4 py-8 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr] lg:gap-12">
            {/* Sidebar — Desktop tetap di kiri, Mobile pindah setelah Hero */}
            <div className="hidden lg:block lg:order-none order-2">
              <SidebarProfile {...profileData} />
            </div>

            {/* Content kanan */}
            <div className="flex flex-col gap-10">
              <div className="order-1">
                <HeroSection />
              </div>

              <div className="lg:hidden order-2">
                <SidebarProfile {...profileData} />
              </div>

              <div className="order-3">
                <TechStackSection />
                <ProjectsSection />
                <ExperienceSection />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
