"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, X, ZoomIn } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectId = params.id as string;
  const project = getProjectById(projectId);

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
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            {/* Tombol Close */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Mencegah close saat klik gambar
            >
              <Image
                src={selectedImage}
                alt="Full preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
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

      {/* Judul Project */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          {project.MainImage ? (
            <div className="relative w-full aspect-[1849/893] rounded overflow-hidden shadow-2xl border border-border/50 group">
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

        {/* Kolom Kanan: Deskripsi & Tombol */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8 h-fit" // h-fit agar tidak melar paksa
        >
          {/* Deskripsi */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.Description}
            </p>
          </div>

          {/* Tombol Demo & Repo */}
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

      {/* --- BAGIAN BAWAH: Tech Stack & Features --- */}
      {/* Grid ini akan muncul dengan animasi saat di-scroll karena ada jarak dari atas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Mulai sedikit lebih bawah
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // once: false = animasi berulang setiap masuk layar
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }} // Animasi spring agar lebih hidup
          className="bg-card border border-border rounded-2xl p-8"
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

        {/* Features List */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              bounce: 0.4,
            }}
            className="bg-card border border-border rounded-2xl p-8"
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

        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Project <span className="text-primary">Result</span>
              </h3>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-border shadow-md cursor-zoom-in"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <Image
                    src={image}
                    alt={`Project Result ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Hover Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transform">
                      <div className="bg-background/90 p-3 rounded-full text-foreground shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
