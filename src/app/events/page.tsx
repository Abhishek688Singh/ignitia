"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Music, Palette, Mic, Camera, Code, Gamepad2, Film, BookOpen } from "lucide-react";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Performance", "Visual Arts", "Literary", "Technical", "Gaming"];

  const events = [
    {
      title: "Classical Dance",
      description: "Showcase traditional Indian dance forms with a modern twist in our neon-lit stage.",
      prize: "₹40,000",
      date: "Feb 15",
      icon: <Music className="text-white" size={20} />,
      category: "Performance",
    },
    {
      title: "Battle of Bands",
      description: "Rock the stage with your band in this high-energy musical showdown.",
      prize: "₹75,000",
      date: "Feb 15",
      icon: <Music className="text-white" size={20} />,
      category: "Performance",
    },
    {
      title: "Digital Art Contest",
      description: "Create stunning digital artwork blending Indian motifs with cyberpunk aesthetics.",
      prize: "₹35,000",
      date: "Feb 16",
      icon: <Palette className="text-white" size={20} />,
      category: "Visual Arts",
    },
    {
      title: "Street Art",
      description: "Transform blank walls into masterpieces with graffiti and street art.",
      prize: "₹30,000",
      date: "Feb 16",
      icon: <Palette className="text-white" size={20} />,
      category: "Visual Arts",
    },
    {
      title: "Slam Poetry",
      description: "Express raw emotions through powerful spoken word performances.",
      prize: "₹25,000",
      date: "Feb 17",
      icon: <Mic className="text-white" size={20} />,
      category: "Literary",
    },
    {
      title: "Creative Writing",
      description: "Craft compelling stories that bridge tradition and future.",
      prize: "₹20,000",
      date: "Feb 17",
      icon: <BookOpen className="text-white" size={20} />,
      category: "Literary",
    },
    {
      title: "Photography Contest",
      description: "Capture moments that tell stories of cultural fusion.",
      prize: "₹30,000",
      date: "Feb 18",
      icon: <Camera className="text-white" size={20} />,
      category: "Visual Arts",
    },
    {
      title: "Short Film",
      description: "Create cinematic narratives exploring the theme of cultural evolution.",
      prize: "₹50,000",
      date: "Feb 18",
      icon: <Film className="text-white" size={20} />,
      category: "Visual Arts",
    },
    {
      title: "Hackathon",
      description: "Build innovative tech solutions in this 24-hour coding marathon.",
      prize: "₹1,00,000",
      date: "Feb 15-16",
      icon: <Code className="text-white" size={20} />,
      category: "Technical",
    },
    {
      title: "UI/UX Design",
      description: "Design user interfaces that blend traditional and futuristic elements.",
      prize: "₹40,000",
      date: "Feb 16",
      icon: <Code className="text-white" size={20} />,
      category: "Technical",
    },
    {
      title: "Gaming Tournament",
      description: "Compete in popular esports titles for glory and prizes.",
      prize: "₹60,000",
      date: "Feb 17-18",
      icon: <Gamepad2 className="text-white" size={20} />,
      category: "Gaming",
    },
    {
      title: "VR Experience",
      description: "Immerse yourself in virtual reality cultural experiences.",
      prize: "₹35,000",
      date: "Feb 18",
      icon: <Gamepad2 className="text-white" size={20} />,
      category: "Gaming",
    },
  ];

  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="All Events"
            subtitle="Explore our diverse range of competitions and activities"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background-secondary sticky top-20 z-30 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-heading font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-neon-cyan to-neon-magenta text-white glow-cyan"
                    : "bg-card border border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={index}
                {...event}
                className="animate-fade-in"
                style={{ animationDelay: `${(index % 6) * 0.1}s` } as any}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/60">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
