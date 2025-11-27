"use client";

import React from "react";
import { motion } from "framer-motion";

interface Achievement {
  text: string;
}

interface ExperienceItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: "work" | "education";
  achievements?: Achievement[];
}

const experiences: ExperienceItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Informatics",
    institution: "UPN Veteran Jawa Timur",
    period: "Aug 2023 - Recent",
    description:
      "Fokus pada analisis sistem, manajemen database, dan pengembangan software. Menggabungkan pengetahuan teoritis dengan keterampilan praktis dalam manajemen proyek IT.",
    achievements: [
      { text: "Expertise in System Analysis & Design" },
      { text: "Database Management Proficiency" },
      { text: "IT Project Management" },
    ],
  },
  {
    id: "work-1",
    type: "work",
    title: "Frontend Developer (Intern)",
    institution: "PT Midi Utama Indonesia tbk",
    period: "Aug 2025 - dec 2025",
    description:
      "Mengelola deployment aplikasi menggunakan Kubernetes dan Digital Ocean, serta membangun sistem backend yang robust dengan arsitektur Microservices.",
    achievements: [
      { text: "Orchestrated containerized app deployment using Kubernetes" },
      { text: "Implemented CI/CD pipelines for high availability" },
      { text: "Designed optimized database schemas & complex SQL queries" },
      { text: "Integrated Google Maps Geocoding & 3rd Party APIs" },
    ],
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const isWork = item.type === "work";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Main Card */}
      <div className="mt-4 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
        {/* Background Gradient Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 relative z-10">
          {/* Icon Box */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`p-3 rounded-xl ${
              isWork
                ? "bg-emerald-500/10 text-emerald-500"
                : "bg-amber-500/10 text-amber-500"
            }`}
          >
            {isWork ? (
              <svg
                className="w-6 h-6"
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
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            )}
          </motion.div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            <p
              className={`font-semibold text-lg ${
                isWork ? "text-emerald-500" : "text-amber-500"
              }`}
            >
              {item.institution}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
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
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-6">
          {item.description}
        </p>

        {item.achievements && (
          <div>
            <h4
              className={`font-semibold mb-3 ${
                isWork ? "text-emerald-500" : "text-amber-500"
              }`}
            >
              Key Competencies:
            </h4>
            <ul className="space-y-3">
              {item.achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`mt-1 p-0.5 rounded-full ${
                      isWork ? "bg-emerald-500/20" : "bg-amber-500/20"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 ${
                        isWork ? "text-emerald-500" : "text-amber-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground leading-snug">
                    {ach.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const educationData = experiences.filter((item) => item.type === "education");
  const workData = experiences.filter((item) => item.type === "work");

  return (
    <section id="experience" className="w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Resume <span className="text-primary">& Journey</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mx-auto"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="flex flex-col gap-8">
            {educationData.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-8">
            {workData.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
