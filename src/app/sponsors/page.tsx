"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsors",
      description: "Our premium partners powering Ignitia 2k25",
      sponsors: [
        { name: "TechCorp", logo: "TC", color: "from-neon-cyan to-neon-magenta" },
        { name: "FutureBrand", logo: "FB", color: "from-gold to-gold-light" },
      ],
      size: "large",
    },
    {
      tier: "Gold Sponsors",
      description: "Supporting excellence in cultural events",
      sponsors: [
        { name: "InnovateLabs", logo: "IL", color: "from-gold to-gold-light" },
        { name: "CyberSoft", logo: "CS", color: "from-gold to-gold-light" },
        { name: "NextGen Media", logo: "NG", color: "from-gold to-gold-light" },
      ],
      size: "medium",
    },
    {
      tier: "Silver Sponsors",
      description: "Partners in our cultural journey",
      sponsors: [
        { name: "DesignHub", logo: "DH", color: "from-foreground/40 to-foreground/60" },
        { name: "CodeBase", logo: "CB", color: "from-foreground/40 to-foreground/60" },
        { name: "ArtSpace", logo: "AS", color: "from-foreground/40 to-foreground/60" },
        { name: "MusicBox", logo: "MB", color: "from-foreground/40 to-foreground/60" },
      ],
      size: "small",
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "w-48 h-48";
      case "medium":
        return "w-36 h-36";
      case "small":
        return "w-28 h-28";
      default:
        return "w-32 h-32";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Sponsors"
            subtitle="Partnering with visionaries to create the ultimate cultural experience"
          />
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex}>
              <div className="text-center mb-12">
                <h3 className="text-4xl font-heading font-bold text-gold-gradient mb-2">
                  {tier.tier}
                </h3>
                <p className="text-foreground/70">{tier.description}</p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <Card
                    key={index}
                    className={`${getSizeClasses(tier.size)} gold-border bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover-lift group cursor-pointer`}
                  >
                    <div className={`${tier.size === 'large' ? 'w-20 h-20' : tier.size === 'medium' ? 'w-16 h-16' : 'w-12 h-12'} hexagon bg-gradient-to-br ${sponsor.color} flex items-center justify-center group-hover:glow-gold transition-all`}>
                      <span className={`font-heading font-bold ${tier.size === 'large' ? 'text-2xl' : 'text-lg'} ${sponsor.color.includes('gold') ? 'text-background-secondary' : 'text-white'}`}>
                        {sponsor.logo}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className={`font-heading font-semibold ${tier.size === 'large' ? 'text-xl' : 'text-base'} text-foreground group-hover:text-gold transition-colors`}>
                        {sponsor.name}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-5xl font-heading font-bold text-gold-gradient">
              Become a Sponsor
            </h3>
            <p className="text-xl text-foreground/70">
              Join hands with Ignitia 2k25 to reach thousands of talented students and showcase your brand at the most innovative cultural fest of the year.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="mailto:sponsors@ignitia2k25.com">
                <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white font-heading font-semibold rounded-lg glow-cyan hover:scale-105 transition-transform">
                  Contact Sponsorship Team
                </button>
              </a>
              <a href="#" download>
                <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-heading font-semibold rounded-lg hover:bg-gold/10 hover:glow-gold transition-all">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;
