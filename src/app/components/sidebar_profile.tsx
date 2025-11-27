"use client";

import React from "react";
import { ThemeToggle } from "./theme/theme_toggle";
import Image from "next/image";
import { motion } from "framer-motion";

interface SocialLink {
  icon: "github" | "linkedin" | "instagram";
  href: string;
  label: string;
}

interface ProfileInfo {
  residence: string;
  city: string;
  age: string;
}

interface SidebarProfileProps {
  name: string;
  title: string;
  imageSrc?: string;
  subtitle: string;
  profileInfo: ProfileInfo;
  socialLinks: SocialLink[];
}

const SocialIcon = ({ icon }: { icon: SocialLink["icon"] }) => {
  const iconClass = "w-5 h-5";

  switch (icon) {
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "github":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SidebarProfile({
  name,
  title,
  subtitle,
  imageSrc,
  profileInfo,
  socialLinks,
}: SidebarProfileProps) {
  return (
    <aside className="w-full lg:sticky lg:top-8 h-fit">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-card border border-border rounded-2xl p-6 shadow-lg relative"
      >
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        <motion.div
          variants={itemVariants}
          className="relative w-32 h-32 mx-auto mb-6 mt-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-500 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-primary flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AW</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h2 className="text-xl font-bold text-foreground mb-1">{name}</h2>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </motion.div>

        {/* Profile Info */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-6 py-6 border-y border-border "
        >
          {/* Education */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-0.5">Education</p>
              <p className="text-sm font-medium text-foreground leading-tight">
                Universitas Pembangunan Nasioanl "Veteran" Jawa Timur
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-sm font-medium text-foreground leading-tight">
                Surabaya City - Indonesia
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 justify-items-center mb-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon icon={link.icon} />
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.a
          href="/CV.pdf"
          download="CV_Alvino_Wijaya.pdf"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border flex items-center justify-center gap-2"
        >
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
        </motion.a>
      </motion.div>
    </aside>
  );
}
