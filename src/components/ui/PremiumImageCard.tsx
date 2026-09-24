"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface PremiumImageCardProps {
  src: string;
  alt: string;
  aspect?: string;
  badge?: string;
  client?: string;
  title?: string;
  subtitle?: string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
  hoverZoom?: boolean;
}

export default function PremiumImageCard({
  src,
  alt,
  aspect = "aspect-[16/10]",
  badge,
  client,
  title,
  subtitle,
  priority = false,
  className = "",
  onClick,
  hoverZoom = true,
}: PremiumImageCardProps) {
  const hasBottomContent = Boolean(title || subtitle);

  return (
    <div
      onClick={onClick}
      className={cn(
        "group overflow-hidden rounded-2xl bg-white border border-brand-black/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-accent/40 flex flex-col justify-between",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* 100% Clean Image Container - No blocking text overlays */}
      <div className={cn("relative w-full overflow-hidden bg-neutral-100", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover object-center transition-transform duration-500 ease-out",
            hoverZoom && "group-hover:scale-105"
          )}
        />
        
        {/* Subtle top subtle badge only if badge exists, minimal and unobtrusive */}
        {(badge || client) && (
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-black text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                {badge}
              </span>
            )}
            {client && (
              <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono tracking-wider ml-auto">
                {client}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Clean content BELOW the image - never covers the photo */}
      {hasBottomContent && (
        <div className="p-5 sm:p-6 space-y-2 bg-white">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              {title && (
                <h4 className="font-display font-bold text-brand-black text-lg sm:text-xl leading-snug group-hover:text-brand-accent transition-colors">
                  {title}
                </h4>
              )}
              {subtitle && (
                <p className="text-brand-black/70 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-200 mt-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
