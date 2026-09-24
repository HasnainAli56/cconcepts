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
  aspect = "h-44 sm:h-48",
  badge,
  client,
  title,
  subtitle,
  priority = false,
  className = "",
  onClick,
  hoverZoom = true,
}: PremiumImageCardProps) {
  const hasBottomContent = Boolean(title || subtitle || badge || client);

  return (
    <div
      onClick={onClick}
      className={cn(
        "group overflow-hidden rounded-2xl bg-white border border-brand-black/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-accent/40 flex flex-col justify-between",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* 100% Full Uncut Picture Container */}
      <div className={cn("relative w-full overflow-hidden bg-slate-50 border-b border-brand-black/5 flex items-center justify-center p-2", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-contain object-center p-1.5 transition-transform duration-500 ease-out",
            hoverZoom && "group-hover:scale-105"
          )}
        />
      </div>

      {/* Clean, beautifully adjusted text below the photo */}
      {hasBottomContent && (
        <div className="p-4 sm:p-5 space-y-2.5 bg-white">
          {/* Badge & Client Meta */}
          {(badge || client) && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              {badge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {badge}
                </span>
              )}
              {client && (
                <span className="text-xs text-brand-black/60 font-medium ml-auto">
                  {client}
                </span>
              )}
            </div>
          )}

          <div className="space-y-1 pt-0.5">
            {title && (
              <h4 className="font-display font-bold text-brand-black text-base sm:text-lg leading-snug group-hover:text-brand-accent transition-colors">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="text-brand-black/70 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
