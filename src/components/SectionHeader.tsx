import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import mandalaGold from "@/assets/mandala-gold.png";
import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, className, children }: SectionHeaderProps) => {
  return (
    <div className={cn("relative text-center mb-16", className)}>
      {/* Background Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 animate-rotate-slow pointer-events-none">
        <Image src={mandalaGold} alt="" className="w-full h-full object-contain"  />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-gold-gradient mb-4 animate-fade-in">
          {title}
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold"></div>
          <div className="w-3 h-3 rotate-45 border-2 border-gold glow-gold"></div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold"></div>
        </div>

        {subtitle && (
          <p className="text-xl text-gold-light/80 font-elegant max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </div>
  );
};