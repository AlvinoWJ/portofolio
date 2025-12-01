"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { getProjectById } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import Preloader from "@/app/components/preloader";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  X,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Mengatur jeda 0.1 detik antar kemunculan anak (gambar)
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // String literal ini sekarang aman karena tipe Variants
    },
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const projectId = params.id as string;
  const project = getProjectById(projectId);

  // --- Logic Navigasi Gambar ---
  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex !== null && project?.galleryImages) {
        setSelectedIndex((prev) => (prev! + 1) % project.galleryImages!.length);
      }
    },
    [selectedIndex, project]
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex !== null && project?.galleryImages) {
        setSelectedIndex(
          (prev) =>
            (prev! - 1 + project.galleryImages!.length) %
            project.galleryImages!.length
        );
      }
    },
    [selectedIndex, project]
  );

  // Keyboard Event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="text-primary hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-6 md:px-12 lg:px-24">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            key="project-preloader"
            onComplete={() => setIsLoading(false)}
            text={project.title} // Teks Loading = Nama Proyek
          />
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <AnimatePresence>
            {selectedIndex !== null && project.galleryImages && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelectedIndex(null);
                }}
              >
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                >
                  <X className="w-10 h-10" />
                </button>

                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-50 hidden md:block"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full max-w-6xl aspect-[1849/893] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.galleryImages[selectedIndex]}
                      alt={`Preview ${selectedIndex}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest bg-black/50 px-4 py-1 rounded-full">
                    {selectedIndex + 1} / {project.galleryImages.length}
                  </div>
                </motion.div>

                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-50 hidden md:block"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tombol Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Judul Halaman */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {project.title}
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>

          {/* Bagian Atas: Gambar Utama & Deskripsi */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {project.MainImage ? (
                <div className="relative w-full aspect-[1849/893] rounded-xl overflow-hidden shadow-2xl border border-border/50 group">
                  <Image
                    src={project.MainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ) : (
                <div
                  className={`w-full aspect-[1849/893] rounded-2xl ${project.imageClass} flex items-center justify-center shadow-2xl relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <h2 className="text-4xl md:text-6xl font-bold text-white/30 select-none">
                    {project.title}
                  </h2>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8 h-fit"
            >
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] bg-secondary text-secondary-foreground border border-border py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Repository
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bagian Tengah: Tech Stack & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Tech <span className="text-primary">Stack</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="bg-card border border-border rounded-2xl p-8 h-full"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key <span className="text-primary">Features</span>
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
          {project.galleryImages && project.galleryImages.length > 0 && (
            <section className="w-full pt-10 border-t border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Project <span className="text-primary">Result</span>
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full" />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {project.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative aspect-[1849/893] overflow-hidden border border-border shadow-md cursor-pointer bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`Project Result ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 transform">
                        <div className="bg-background/90 p-3 rounded-full text-foreground shadow-lg backdrop-blur-sm hover:scale-110 transition-transform">
                          <Maximize className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
