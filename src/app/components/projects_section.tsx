"use client";

import React from "react";
// import Image from "next/image"; // Uncomment jika sudah menggunakan next/image yang valid

interface Project {
  id: string;
  title: string;
  description: string;
  imageClass: string; // Menggunakan class background color untuk placeholder sementara
}

const projects: Project[] = [
  {
    id: "1",
    title: "Eventify Platform",
    description:
      "Sebuah platform manajemen event komprehensif yang memudahkan penyelenggara dalam mengatur tiket, peserta, dan jadwal.",
    imageClass: "bg-indigo-600", // Warna placeholder mirip gambar 1
  },
  {
    id: "2",
    title: "CV Karya Cipta Magnet",
    description:
      "Website profil perusahaan untuk spesialis Magnet Trap, menampilkan katalog produk dan informasi layanan engineering.",
    imageClass: "bg-sky-600", // Warna placeholder mirip gambar 2
  },
  {
    id: "3",
    title: "AfelTrip",
    description:
      "Aplikasi travel booking yang menyediakan pengalaman pemesanan perjalanan yang mudah dan menyenangkan.",
    imageClass: "bg-blue-500", // Warna placeholder mirip gambar 3
  },
  {
    id: "4",
    title: "TechCircle",
    description:
      "Komunitas teknologi dan forum diskusi untuk berbagi pengetahuan seputar perkembangan dunia IT terkini.",
    imageClass: "bg-cyan-500", // Warna placeholder mirip gambar 4
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-xl overflow-hidden h-64 border border-border/50 shadow-sm">
      {/* Background Image / Placeholder */}
      <div
        className={`absolute inset-0 w-full h-full ${project.imageClass} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
      >
        {/* Placeholder Logo Text karena belum ada gambar asli */}
        <h3 className="text-3xl font-bold text-white/20 select-none">
          {project.title}
        </h3>

        {/* Jika menggunakan Image component nanti: */}
        {/* <Image src={project.imageSrc} alt={project.title} fill className="object-cover" /> */}
      </div>

      {/* Overlay Hover Effect - Muncul dari bawah */}
      <div className="absolute inset-0 bg-card/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center p-6 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <a
          href={`/projects/${project.id}`}
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
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
