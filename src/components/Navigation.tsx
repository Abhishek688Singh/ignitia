import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { HexButton } from "./HexButton";
import { Home, Calendar, Users, DollarSign, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: DollarSign, label: "Sponsors", path: "/sponsors" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/20">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
             {/* <div className="w-12 h-12 hexagon bg-gradient-to-br from-gold to-gold-light flex items-center justify-center glow-gold">
              <span className="text-background-secondary font-heading font-bold text-sm">I</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-gold-gradient">Ignitia</h1>
              <p className="text-xs text-gold/60">2k25</p>
            </div>  */}
            <div className="pt-1 h-16 max-w-40">
              <img  src="ignitia.webp" alt="" />
            </div>
          </NavLink> 
         

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-foreground/70 hover:text-gold transition-colors font-heading"
                activeClassName="text-gold"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <NavLink
            to="/register"
            className="hidden md:flex items-center justify-center"
          >
            <img
              src="/qw.png"
              alt="Register"
              className="h-16 w-auto max-w-[180px] object-contain select-none"
            />
          </NavLink>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gold"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background-secondary border-t border-gold/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-2 text-foreground/70 hover:text-gold transition-colors"
                  activeClassName="text-gold"
                >
                  <item.icon size={20} />
                  <span className="font-heading">{item.label}</span>
                </NavLink>
              ))}
              <NavLink to="/register" onClick={() => setMobileOpen(false)}>
                
                  <img
                    src="/qw.png"
                    alt="Register"
                    className="register-img"
                  />
                
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Left Hex Menu - Desktop Only */}
      {/* <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "w-14 h-14 hexagon bg-card border border-gold/30 flex items-center justify-center",
              "hover:bg-gold/20 hover:glow-gold transition-all group"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon className="text-gold group-hover:scale-110 transition-transform" size={20} />
          </NavLink>
        ))}
      </div>*/}

      {/* Right Social Bar - Desktop Only */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {["YT", "IG", "FB", "LI", "X"].map((social, index) => (
          <a
            key={social}
            href="#"
            className={cn(
              "w-14 h-14 hexagon bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20",
              "border border-neon-cyan/30 flex items-center justify-center",
              "hover:glow-cyan hover:scale-110 transition-all group"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-neon-cyan text-xs font-bold">{social}</span>
          </a>
        ))}
      </div>
    </>
  );
};
