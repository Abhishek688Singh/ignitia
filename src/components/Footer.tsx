import { NavLink } from "@/components/NavLink";
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-background-tertiary border-t border-gold/20 pt-16 pb-8 overflow-hidden">
      {/* Decorative Gold Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 hexagon bg-gradient-to-br from-gold to-gold-light flex items-center justify-center glow-gold">
                <span className="text-background-secondary font-heading font-bold">I</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gold-gradient">Ignitia 2k25</h3>
                <p className="text-xs text-gold/60">Cultural Fusion</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm">
              Experience the ultimate fusion of Indian culture and futuristic cyberpunk aesthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Events", "Gallery", "Sponsors", "Team"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Mail size={16} className="text-neon-cyan" />
                <a href="mailto:info@ignitia2k25.com" className="hover:text-gold transition-colors">
                  info@ignitia2k25.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Phone size={16} className="text-neon-cyan" />
                <a href="tel:+911234567890" className="hover:text-gold transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70 text-sm">
                <MapPin size={16} className="text-neon-cyan mt-1" />
                <span>College Campus, City, State - 123456</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gold font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 hexagon bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/30 flex items-center justify-center hover:glow-cyan hover:scale-110 transition-all group"
                >
                  <social.icon size={16} className="text-neon-cyan" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10 text-center">
          <p className="text-foreground/50 text-sm">
            © 2025 Ignitia 2k25. All rights reserved. Designed with{" "}
            <span className="text-neon-pink">💜</span> by the Ignitia Team
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </footer>
  );
};
