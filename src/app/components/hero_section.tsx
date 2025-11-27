"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="w-full">
      {/* Wrapper Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8 md:p-12 relative group"
      >
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col gap-6 z-10 items-center w-full mt-10">
            {/* Title */}
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
              className="text-muted-foreground font-mono text-sm lg:text-base font-medium text-center leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
