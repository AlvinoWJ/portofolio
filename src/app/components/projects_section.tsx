"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div className="group relative rounded-xl overflow-hidden h-64 border border-border/50 shadow-sm">
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
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });

  const titleControls = useAnimation();
  const card1Controls = useAnimation();
  const card2Controls = useAnimation();
  const card3Controls = useAnimation();
  const card4Controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isInView) {
      const isScrollingDown = scrollDirection === "down";

      // Animasi Title/Header
      titleControls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      });

      // Animasi Cards
      if (isScrollingDown) {
        // Dari atas ke bawah: cards muncul dari bawah
        card1Controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1 },
        });
        card2Controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.2 },
        });
        card3Controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        });
        card4Controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        });
      } else {
        // Dari bawah ke atas: cards muncul dari samping
        // Card kiri (1,3) dari kiri
        card1Controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
        });
        card3Controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
        });

        // Card kanan (2,4) dari kanan
        card2Controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
        });
        card4Controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
        });
      }
    } else {
      // Reset animasi ketika keluar viewport
      const isScrollingDown = scrollDirection === "down";

      titleControls.start({
        opacity: 0,
        x: isScrollingDown ? 0 : -50,
      });

      if (isScrollingDown) {
        // Keluar ke bawah: hilang ke bawah
        card1Controls.start({ opacity: 0, y: 30 });
        card2Controls.start({ opacity: 0, y: 30 });
        card3Controls.start({ opacity: 0, y: 30 });
        card4Controls.start({ opacity: 0, y: 30 });
      } else {
        // Keluar ke atas: hilang ke samping
        card1Controls.start({ opacity: 0, x: -50 });
        card2Controls.start({ opacity: 0, x: 50 });
        card3Controls.start({ opacity: 0, x: -50 });
        card4Controls.start({ opacity: 0, x: 50 });
      }
    }
  }, [
    isInView,
    scrollDirection,
    titleControls,
    card1Controls,
    card2Controls,
    card3Controls,
    card4Controls,
  ]);

  return (
    <section id="projects" className="w-full py-8" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={titleControls}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "5rem" } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Kiri Atas */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={card1Controls}>
          <ProjectCard project={projects[0]} index={0} />
        </motion.div>

        {/* Card 2 - Kanan Atas */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={card2Controls}>
          <ProjectCard project={projects[1]} index={1} />
        </motion.div>

        {/* Card 3 - Kiri Bawah */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={card3Controls}>
          <ProjectCard project={projects[2]} index={2} />
        </motion.div>

        {/* Card 4 - Kanan Bawah */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={card4Controls}>
          <ProjectCard project={projects[3]} index={3} />
        </motion.div>
      </div>
    </section>
  );
}
