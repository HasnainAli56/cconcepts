"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ParallaxImage({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll position of the element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle agency parallax: moves slightly (-15px to +15px) inside container
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="relative w-full h-[115%] -top-[7.5%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </motion.div>
    </div>
  );
}
