"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechStack {
  name: string;
  icon: string; // URL atau path ke icon
  category: string;
}

const techStacks: TechStack[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    category: "Frontend",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Language",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    category: "Database",
  },
];

function TechStackItem({ tech }: { tech: TechStack }) {
  return (
    <div className="flex-shrink-0 mx-6 group">
      <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 min-w-[100px]">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-lg blur-md group-hover:bg-primary/20 transition-all duration-300"></div>
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

export function TechStackSection() {
  const duplicatedStacks = [...techStacks, ...techStacks];

  return (
    <section className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mx-auto"
        />
      </motion.div>

      <div className="relative w-full overflow-hidden px-6 min-h-full mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <motion.div
          className="absolute left-0 top-0 flex items-center gap-4"
          style={{ whiteSpace: "nowrap" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedStacks.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="inline-flex">
              <TechStackItem tech={tech} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
