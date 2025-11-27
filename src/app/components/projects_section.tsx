"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageClass: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Eventify Platform",
    description:
      "Sebuah platform manajemen event komprehensif yang memudahkan penyelenggara dalam mengatur tiket, peserta, dan jadwal.",
    imageClass: "bg-indigo-600",
  },
  {
    id: "2",
    title: "CV Karya Cipta Magnet",
    description:
      "Website profil perusahaan untuk spesialis Magnet Trap, menampilkan katalog produk dan informasi layanan engineering.",
    imageClass: "bg-sky-600",
  },
  {
    id: "3",
    title: "AfelTrip",
    description:
      "Aplikasi travel booking yang menyediakan pengalaman pemesanan perjalanan yang mudah dan menyenangkan.",
    imageClass: "bg-blue-500",
  },
  {
    id: "4",
    title: "TechCircle",
    description:
      "Komunitas teknologi dan forum diskusi untuk berbagi pengetahuan seputar perkembangan dunia IT terkini.",
    imageClass: "bg-cyan-500",
  },
];

// 1. Definisikan animasi untuk container (pembungkus)
// Ini akan mengatur agar anak-anaknya (cards) muncul berurutan (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda 0.2 detik antar card
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

function ProjectCard({ project }: { project: Project }) {
  return (
    // Kita hapus initial/animate manual di sini, karena akan diwariskan dari parent
    <motion.div
      variants={cardVariants}
      className="group relative rounded-xl overflow-hidden h-64 border border-border/50 shadow-sm"
    >
      {/* Background Image / Placeholder */}
      <div
        className={`absolute inset-0 w-full h-full ${project.imageClass} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
      >
        <h3 className="text-3xl font-bold text-white/20 select-none">
          {project.title}
        </h3>
      </div>

      {/* Overlay Hover Effect */}
      <div className="absolute inset-0 bg-card/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center p-6 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <motion.a
          href={`/projects/${project.id}`}
          whileHover={{ x: 5 }}
          className="inline-flex items-center justify-center text-xs font-bold tracking-widest text-amber-500 hover:text-amber-400 uppercase transition-colors gap-1"
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
        </motion.a>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }} // Menggunakan margin yg lebih kecil agar lebih responsif
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

      {/* Container Grid dengan animasi Stagger.
        'initial' dan 'whileInView' di sini akan secara otomatis 
        mengontrol state 'hidden' dan 'visible' pada children (ProjectCard)
        yang memiliki variants dengan nama yang sama.
      */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false, // Animasi akan berulang jika scroll naik/turun (sesuai request)
          amount: 0.1, // Animasi mulai ketika 10% elemen terlihat (lebih cepat responnya)
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
