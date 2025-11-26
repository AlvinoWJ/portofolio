"use client";

import React from "react";
import { ThemeToggle } from "./theme/theme_toggle";

interface SocialLink {
  icon: "github" | "linkedin" | "instagram" | "facebook" | "twitter";
  href: string;
  label: string;
}

interface ProfileInfo {
  residence: string;
  city: string;
  age: string;
}

interface Language {
  name: string;
  percentage: number;
}

interface Skill {
  name: string;
  percentage: number;
}

interface SidebarProfileProps {
  name: string;
  title: string;
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
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          href="https://github.com/AlvinoWJ"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
  }
};

export function SidebarProfile({
  name,
  title,
  subtitle,
  profileInfo,
  socialLinks,
}: SidebarProfileProps) {
  return (
    <aside className="fixed left-8 top-8 w-80 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-500 rounded-full blur-xl opacity-50"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
            <div className="w-full h-full bg-gradient-to-br from-teal-400 to-primary flex items-center justify-center">
              <svg
                className="w-20 h-20 text-background"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-foreground mb-1">{name}</h2>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mb-6">
          <ThemeToggle />
        </div>

        {/* Profile Info */}
        <div className="space-y-3 mb-6 pb-6 border-b border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Residence:</span>
            <span className="text-foreground font-medium">
              {profileInfo.residence}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">City:</span>
            <span className="text-foreground font-medium">
              {profileInfo.city}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Age:</span>
            <span className="text-foreground font-medium">
              {profileInfo.age}
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
