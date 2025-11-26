"use client";

import React from "react";

interface InfoItemProps {
  icon: string;
  text: string;
}

interface HeroContentProps {
  name: string;
  description: string;
  fullDescription: string;
  location: string;
  education: string;
  availability: string;
}

function InfoItem({ icon, text }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3 text-foreground">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export function HeroContent({
  name,
  description,
  fullDescription,
  location,
  education,
  availability,
}: HeroContentProps) {
  return (
    <div className="flex-1">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
        Hi <span className="inline-block animate-wave">👋</span> I&apos;m{" "}
        <span className="gradient-text">{name}</span>
      </h1>

      <p className="text-xl text-muted-foreground mb-6">{description}</p>

      <p className="text-foreground mb-8 leading-relaxed">{fullDescription}</p>

      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center gap-2">
          Lihat Proyek
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors duration-300 border border-border">
          Hubungi Saya
        </button>
        <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors duration-300 border border-border flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download CV
        </button>
      </div>

      <div className="space-y-4">
        <InfoItem icon="📍" text={location} />
        <InfoItem icon="🎓" text={education} />
        <InfoItem icon="💼" text={availability} />
      </div>
    </div>
  );
}
