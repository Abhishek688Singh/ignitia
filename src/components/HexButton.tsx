import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface HexButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "neon" | "outline";
  size?: "sm" | "md" | "lg";
}

const HexButton = forwardRef<HTMLButtonElement, HexButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    const variants = {
      gold: "bg-gradient-to-br from-gold to-gold-light text-background-secondary hover:glow-gold",
      neon: "bg-gradient-to-br from-neon-cyan to-neon-magenta text-white hover:glow-cyan",
      outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold/10 hover:glow-gold",
    };

    const sizes = {
      sm: "w-20 h-20 text-xs",
      md: "w-24 h-24 text-sm",
      lg: "w-32 h-32 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "hex-button font-heading font-semibold flex items-center justify-center",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

HexButton.displayName = "HexButton";

export { HexButton };
