"use client";
import Image from "next/image";


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import mandalaGold from "@/assets/mandala-gold.png";

const Team = () => {
  const teams = [
    {
      category: "Core Team",
      members: [
        {
          name: "Arjun Sharma",
          role: "Festival Director",
          bio: "Visionary leader orchestrating the fusion",
          email: "arjun@ignitia.com",
          social: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Priya Patel",
          role: "Creative Head",
          bio: "Crafting the cyberpunk aesthetic",
          email: "priya@ignitia.com",
          social: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Rahul Desai",
          role: "Technical Director",
          bio: "Building the digital experience",
          email: "rahul@ignitia.com",
          social: { linkedin: "#", github: "#" },
        },
        {
          name: "Ananya Singh",
          role: "Events Coordinator",
          bio: "Managing 50+ spectacular events",
          email: "ananya@ignitia.com",
          social: { linkedin: "#", instagram: "#" },
        },
      ],
    },
    {
      category: "Department Heads",
      members: [
        {
          name: "Vikram Kumar",
          role: "Sponsorship Lead",
          bio: "Building partnerships",
          email: "vikram@ignitia.com",
          social: { linkedin: "#" },
        },
        {
          name: "Sneha Reddy",
          role: "Marketing Head",
          bio: "Spreading the word",
          email: "sneha@ignitia.com",
          social: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Aditya Verma",
          role: "Design Lead",
          bio: "Creating visual magic",
          email: "aditya@ignitia.com",
          social: { instagram: "#", linkedin: "#" },
        },
        {
          name: "Kavya Nair",
          role: "Content Head",
          bio: "Crafting the narrative",
          email: "kavya@ignitia.com",
          social: { linkedin: "#", instagram: "#" },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the masterminds behind the cultural fusion"
          />
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {teams.map((team, teamIndex) => (
            <div key={teamIndex}>
              <h3 className="text-4xl font-heading font-bold text-gold-gradient text-center mb-12">
                {team.category}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.members.map((member, index) => (
                  <Card
                    key={index}
                    className="relative gold-border bg-card/50 backdrop-blur-sm p-6 hover-lift group"
                  >
                    {/* Mandala Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none overflow-hidden">
                      <Image src={mandalaGold} alt="" className="w-full h-full object-contain animate-rotate-slow"  />
                    </div>

                    <div className="relative z-10">
                      {/* Avatar */}
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-magenta to-gold opacity-75 blur-md animate-pulse-glow"></div>
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-4xl font-heading font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center space-y-2">
                        <h4 className="text-xl font-heading font-bold text-gold-gradient">
                          {member.name}
                        </h4>
                        <p className="text-neon-cyan text-sm font-semibold">
                          {member.role}
                        </p>
                        <p className="text-foreground/70 text-sm">
                          {member.bio}
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 mt-6">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 hexagon bg-gold/20 border border-gold/50 flex items-center justify-center hover:bg-gold/30 hover:glow-gold transition-all"
                        >
                          <Mail size={14} className="text-gold" />
                        </a>
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-8 h-8 hexagon bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center hover:bg-neon-cyan/30 hover:glow-cyan transition-all"
                          >
                            <Linkedin size={14} className="text-neon-cyan" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            className="w-8 h-8 hexagon bg-neon-magenta/20 border border-neon-magenta/50 flex items-center justify-center hover:bg-neon-magenta/30 hover:glow-pink transition-all"
                          >
                            <Instagram size={14} className="text-neon-magenta" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="w-8 h-8 hexagon bg-foreground/20 border border-foreground/50 flex items-center justify-center hover:bg-foreground/30 transition-all"
                          >
                            <Github size={14} className="text-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;