"use client";
import Image from "next/image";


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HexButton } from "@/components/HexButton";
import { EventCard } from "@/components/EventCard";
import { SectionHeader } from "@/components/SectionHeader";
import { NavLink } from "@/components/NavLink";
import { Music, Palette, Mic, Camera, Trophy, Calendar, ArrowRight, Sparkles } from "lucide-react";
import heroDancer from "@/assets/hero-dancer.jpg";
import mandalaGold from "@/assets/mandala-gold.png";
import { AboutIgnitia } from "@/components/Aboutig";

const Index = () => {
  const featuredEvents = [
    {
      title: "Dance Battle",
      description: "Showcase your moves in this electrifying dance competition with fusion of traditional and contemporary styles.",
      prize: "₹50,000",
      date: "Feb 15",
      icon: <Music className="text-white" size={20} />,
      category: "Performance",
    },
    {
      title: "Art Exhibition",
      description: "Display your creativity through traditional and digital art forms in our cyberpunk gallery.",
      prize: "₹30,000",
      date: "Feb 16",
      icon: <Palette className="text-white" size={20} />,
      category: "Visual Arts",
    },
    {
      title: "Poetry Slam",
      description: "Express yourself through powerful verses combining classical and modern poetry.",
      prize: "₹20,000",
      date: "Feb 17",
      icon: <Mic className="text-white" size={20} />,
      category: "Literary",
    },
    {
      title: "Photography",
      description: "Capture the essence of cultural fusion through your lens in our themed photo contest.",
      prize: "₹25,000",
      date: "Feb 18",
      icon: <Camera className="text-white" size={20} />,
      category: "Visual Arts",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* hero */}

      <section className="relative mt-4 mx-1 md:mx-24 min-h-screen flex items-center justify-center overflow-hidden particle-bg pt-20">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(hsl(45 100% 70% / 0.1) 1px, transparent 1px),
          linear-gradient(90deg, hsl(45 100% 70% / 0.1) 1px, transparent 1px)
        `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* HERO MANDALA */}
        <div className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100vw] max-h-[100vw] w-full h-full opacity-10 animate-rotate-slow">
          <Image src={mandalaGold} alt="" className="w-full h-full object-contain" />
        </div>

        {/* HERO CONTENT */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left space-y-8">

              {/* DATE BADGE */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full backdrop-blur-sm">
                <Calendar className="text-gold" size={20} />
                <span className="text-gold font-heading">November 2X-2X, 2026</span>
              </div>

              {/* TITLE */}
              <div>
                <h1 className="text-6xl md:text-8xl font-gabriola font-black text-gold-gradient mb-4 leading-tight">
                  IGNITIA
                  <span className="block text-5xl md:text-7xl text-neon-cyan">2K26</span>
                </h1>

                {/* SUBTITLE LINE + TEXT */}
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent"></div>
                  <p className="text-xl md:text-2xl font-elegant text-foreground/80">
                    PSIT's annual techno-cultural extravaganza
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-l from-gold to-transparent"></div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Join us for “Abhivriddhi,” a celebration of growth, progress, and innovation.
                Ignitia is where technology, culture, and creativity converge to shape the
                future. Get ready for two days of electrifying events and inspiring experiences.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <NavLink to="/register">
                  <img
                    src="/qw.png"
                    alt="Register"
                    className="cursor-pointer max-w-48 w-auto transition-transform hover:scale-105 hover:glow-gold"
                  />
                </NavLink>

                <NavLink to="/events">
                  <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-heading font-semibold rounded-lg hover:bg-gold/10 hover:glow-gold transition-all flex items-center gap-2">
                    Explore Events
                    <Sparkles size={20} />
                  </button>
                </NavLink>
              </div>
            </div>

            {/* RIGHT HERO IMAGE */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden gold-border glow-gold">
                <Image
                  src={heroDancer}
                  alt="Cyberpunk Dancer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent"></div>
              </div>

              {/* FLOATERS */}
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 hexagon bg-gradient-to-br from-neon-cyan to-neon-magenta animate-float glow-cyan"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 hexagon bg-gradient-to-br from-gold to-gold-light animate-float glow-gold" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}

      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28 particle-bg">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
        linear-gradient(hsl(45 100% 70% / 0.1) 1px, transparent 1px),
        linear-gradient(90deg, hsl(45 100% 70% / 0.1) 1px, transparent 1px)
      `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* ABOUT MANDALA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-10 animate-rotate-slow-a">
          <Image src={mandalaGold} alt="Mandala" className="object-contain" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-4">
          <AboutIgnitia />
        </div>
      </section>







      {/* Featured Events Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Events"
            subtitle="Dive into a world of cultural competitions blending tradition with innovation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event, index) => (
              <EventCard
                key={index}
                {...event}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` } as any}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/events">
              <button className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-background-secondary font-heading font-semibold rounded-lg hover:glow-gold hover:scale-105 transition-all">
                View All Events
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Ignitia Section */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Ignitia?"
            subtitle="More than just a cultural fest - it's an experience"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Trophy className="text-neon-cyan" size={32} />,
                title: "Massive Prizes",
                description: "Over ₹5 lakhs in total prize money across all competitions"
              },
              {
                icon: <Sparkles className="text-neon-magenta" size={32} />,
                title: "Unique Theme",
                description: "First-of-its-kind fusion of Indian culture and cyberpunk aesthetics"
              },
              {
                icon: <Music className="text-gold" size={32} />,
                title: "50+ Events",
                description: "From traditional performances to digital art and tech competitions"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl gold-border bg-card/50 backdrop-blur-sm hover-lift text-center group"
              >
                <div className="w-20 h-20 hexagon bg-gradient-to-br from-background-secondary to-background-tertiary flex items-center justify-center mx-auto mb-6 group-hover:glow-cyan transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gold-gradient mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;