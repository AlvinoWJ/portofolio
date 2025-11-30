"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
  text?: string; // Tambahkan prop opsional untuk teks custom
}

export default function Preloader({
  onComplete,
  text = "Alvino Dwi Nengku Wijaya",
}: PreloaderProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayPercent(Math.round(latest));
      },
      onComplete: () => {
        setTimeout(() => {
          onComplete();
        }, 500);
      },
    });

    return controls.stop;
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4 w-64">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground font-bold text-lg tracking-wide text-center"
        >
          {text} {/* Gunakan prop text di sini */}
        </motion.h1>

        <div className="relative w-full h-[2px] bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_var(--primary)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <motion.p className="text-muted-foreground text-xs font-medium tracking-widest">
          {displayPercent} %
        </motion.p>
      </div>
    </motion.div>
  );
}
