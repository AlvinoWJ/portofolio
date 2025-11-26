"use client";

import React from "react";

interface Achievement {
  text: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: Achievement[];
}

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30 ml-[11px] mt-16"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-8 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>

      {/* Content card */}
      <div className="ml-16 mb-12">
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
          {/* Header with icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-primary font-semibold mb-2">
                {experience.company}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div>
            <h4 className="text-primary font-semibold mb-3">
              Key Achievements:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground text-sm leading-relaxed">
                    {achievement.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Tech Startup Inc.",
      period: "Jan 2023 - Present",
      description:
        "Leading frontend development team untuk berbagai web applications dengan fokus pada user experience dan performance optimization.",
      achievements: [
        {
          text: "Meningkatkan website performance hingga 40% dengan code splitting dan lazy loading",
        },
        {
          text: "Mentoring 3 junior developers dalam best practices React development",
        },
        {
          text: "Implementasi design system yang meningkatkan development speed 30%",
        },
        {
          text: "Successfully launched 5 major features with zero critical bugs",
        },
      ],
    },
    {
      id: "2",
      title: "Full-Stack Developer",
      company: "Digital Agency Co.",
      period: "Mar 2021 - Dec 2022",
      description:
        "Mengembangkan dan maintain berbagai client projects menggunakan modern web technologies. Bertanggung jawab untuk frontend dan backend development.",
      achievements: [
        {
          text: "Membangun 10+ responsive websites untuk berbagai industri clients",
        },
        {
          text: "Implementasi RESTful API dan GraphQL untuk efficient data fetching",
        },
        {
          text: "Meningkatkan client satisfaction rate hingga 95% dengan delivery on-time",
        },
        {
          text: "Kolaborasi dengan UI/UX team untuk implementasi pixel-perfect designs",
        },
      ],
    },
    {
      id: "3",
      title: "Junior Web Developer",
      company: "Software House Ltd.",
      period: "Jun 2020 - Feb 2021",
      description:
        "Memulai karir sebagai web developer dengan fokus pada frontend development. Belajar best practices dan modern web development workflow.",
      achievements: [
        {
          text: "Berkontribusi pada 5+ projects dengan codebase yang clean dan maintainable",
        },
        {
          text: "Belajar dan menguasai React, TypeScript, dan modern CSS frameworks",
        },
        {
          text: "Implementasi responsive designs dan cross-browser compatibility",
        },
        {
          text: "Aktif dalam code review dan knowledge sharing sessions",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pengalaman <span className="gradient-text">Kerja</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journey profesional saya dalam dunia web development dan teknologi
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
