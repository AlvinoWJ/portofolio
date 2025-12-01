"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-4 md:p-12 relative group"
      >
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col gap-6 z-10 items-center w-full mt-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="md:text-sm text-[10px] font-medium text-muted-foreground">
                Web Developer Intern at PT Midi Utama Indonesia Tbk
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Welcome to my Portofolio!
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground font-mono text-[12px] md:text-base font-medium text-center leading-relaxed"
            >
              <span className="text-primary font-bold mr-2">&lt;code&gt;</span>

              <span className="">
                I build{" "}
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
                      delay: 100,
                      deleteSpeed: 30,
                    }}
                  />
                </span>
              </span>

              <span className="text-primary font-bold ml-2">&lt;/code&gt;</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center w-full sm:w-auto"
            >
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
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
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
