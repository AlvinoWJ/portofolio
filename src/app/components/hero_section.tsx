"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section id="home" className="w-full">
      {/* Wrapper Card */}
      <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg relative group">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        {/* Ubah grid menjadi flex untuk kontrol tengah yang lebih mudah */}
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col gap-6 z-10 items-center w-full">
            {/* Title - Pastikan text-center */}
            <div className="space-y-2 text-center">
              <h1 className="text-xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Welcome, To My Portfolio!
              </h1>
            </div>

            {/* Code Block Style Text - Hapus lg:text-left, gunakan text-center */}
            <div className="text-muted-foreground font-mono text-sm lg:text-base font-medium text-center leading-relaxed">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full sm:w-auto">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
