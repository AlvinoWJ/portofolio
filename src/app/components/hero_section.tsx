"use client";

import React from "react";
import Typewriter from "typewriter-effect";
// import Image from "next/image"; // Uncomment jika ingin menggunakan Image dari Next.js

export function HeroSection() {
  return (
    <section id="home" className="w-full">
      {/* Wrapper Card */}
      <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg relative group">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid gap-12 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="space-y-2">
              <h1 className="text-xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Welcome, To My Portfolio!
              </h1>
            </div>

            <div className="text-muted-foreground font-mono text-sm lg:text-base font-medium text-center lg:text-left leading-relaxed">
              <span className="text-primary font-bold mr-2">&lt;code&gt;</span>

              <span className="italic">
                I build{" "}
                {/* Wrapper inline-block memastikan animasi ketik tetap mengalir dengan teks sebelumnya */}
                <span className="text-primary font-semibold inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "high performance website.",
                        "seamless user experience.",
                        "scalable web apps.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </span>

              <span className="text-primary font-bold ml-2">&lt;/code&gt;</span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Specialized in Next.js, React, and modern web technologies.
              Let&apos;s turn your ideas into reality.
            </p>

            {/* Grid Button Layout */}
            <div className="grid md:grid-cols-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                  Lihat Proyek
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <button className="px-8 py-3 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold  transition-colors duration-300 border border-border flex items-center justify-center">
                  Hubungi Saya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
