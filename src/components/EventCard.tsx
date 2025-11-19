import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mandalaGold from "@/assets/mandala-gold.png";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  prize?: string;
  date?: string;
  icon?: ReactNode;
  category?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const EventCard = ({
  title,
  description,
  prize,
  date,
  icon,
  category,
  className,
  style,
}: EventCardProps) => {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden gold-border bg-card/80 backdrop-blur-sm hover-lift group cursor-pointer",
        className
      )}
      style={style}
    >
      {/* Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
        <Image src={mandalaGold} alt="" className="w-full h-full object-contain animate-rotate-slow"  />
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          {icon && (
            <div className="w-12 h-12 hexagon bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center glow-cyan">
              {icon}
            </div>
          )}
          {category && (
            <Badge className="bg-gold/20 text-gold border-gold/50 hover:bg-gold/30">
              {category}
            </Badge>
          )}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-heading font-bold text-gold-gradient mb-3">
          {title}
        </h3>
        <p className="text-foreground/80 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-sm">
          {prize && (
            <div className="flex items-center gap-2">
              <span className="text-neon-cyan">💰</span>
              <span className="text-gold font-semibold">{prize}</span>
            </div>
          )}
          {date && (
            <div className="text-foreground/60">
              📅 {date}
            </div>
          )}
        </div>
      </div>

      {/* Neon Edge Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10"></div>
      </div>
    </Card>
  );
};