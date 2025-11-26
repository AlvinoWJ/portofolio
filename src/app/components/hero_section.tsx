"use client";

import React from "react";

import { HeroContent } from "./hero_content";

export function HeroSection() {
  const profileData = {
    name: "Alvino Dwi Nengku Wijaya",
    title: "Full-Stack Website Developer",
    description: "A passionate Full-Stack Website Developer from Indonesia.",
    fullDescription:
      "Specialized in React, TypeScript, and modern web technologies. I love creating beautiful and functional web experiences that solve real-world problems.",
    location: "Located in Surabaya City, Indonesia",
    education:
      "Student at Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    availability: "Available for freelance projects",
  };

  const socialLinks = [
    {
      icon: "github" as const,
      href: "https://github.com/AlvinoWJ",
      label: "GitHub",
    },
    {
      icon: "linkedin" as const,
      href: "https://www.linkedin.com/in/alvinowj",
      label: "LinkedIn",
    },
    { icon: "email" as const, href: "alvinowj@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <HeroContent
            name={profileData.name}
            description={profileData.description}
            fullDescription={profileData.fullDescription}
            location={profileData.location}
            education={profileData.education}
            availability={profileData.availability}
          />
        </div>
      </div>
    </section>
  );
}
