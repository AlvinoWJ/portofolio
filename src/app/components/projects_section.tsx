"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageClass: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-xl overflow-hidden h-64 border border-border/50 shadow-sm"
    >
      <div
        className={`absolute inset-0 w-full h-full ${project.imageClass} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
      >
        {project.logo ? (
          <div className="relative w-80 h-80">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        ) : (
          <h3 className="text-3xl font-bold text-white/20 select-none px-4 text-center">
            {project.title}
          </h3>
        )}
      </div>

      <div className="absolute inset-0 bg-card/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center p-6 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.Description}
        </p>

        {/* Update Link Disini */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center justify-center text-xs font-bold tracking-widest text-primary hover:text-accent uppercase transition-colors gap-1"
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="flex items-center gap-1"
          >
            Read More
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-8 mt-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.1,
        }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
