"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Music, Palette, Mic, Camera, Code, Gamepad2, Film, BookOpen } from "lucide-react";
import EventCard from "@/components/NewEventCard";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Performance", "Visual Arts", "Literary", "Technical", "Gaming"];
  const DATE_FILTERS = ["All", "25th March", "28th March", "29th March"];
  const [activeDate, setActiveDate] = useState<string>("All");

  type EventItem = {
    id: number;
    title: string;
    category: string;
    dateLabel: string;
    dateKey?: string;
    venue: string;
    time: string;
    coordinator: string;
    price: number;
    imageUrl: string;
  };


  const events: EventItem[] = [
    {
      id: 1,
      title: "Classical Dance",
      category: "Performance",
      dateLabel: "15 Feb",
      venue: "Main Stage Arena",
      time: "6:00 PM – 9:00 PM",
      coordinator: "Cultural Team",
      price: 0,
      imageUrl: "/events/classical-dance.jpg"
    },
    {
      id: 2,
      title: "Battle of Bands",
      category: "Performance",
      dateLabel: "15 Feb",
      venue: "Thunder Dome Stage",
      time: "7:00 PM – 10:00 PM",
      coordinator: "Music Society",
      price: 0,
      imageUrl: "/events/battle-of-bands.jpg"
    },
    {
      id: 3,
      title: "Digital Art Contest",
      category: "Visual Arts",
      dateLabel: "16 Feb",
      venue: "Art Hall A1",
      time: "11:00 AM – 1:00 PM",
      coordinator: "Art & Design Club",
      price: 0,
      imageUrl: "/events/digital-art.jpg"
    },
    {
      id: 4,
      title: "Street Art",
      category: "Visual Arts",
      dateLabel: "16 Feb",
      venue: "Open Wall Arena",
      time: "2:00 PM – 5:00 PM",
      coordinator: "Fine Arts Team",
      price: 0,
      imageUrl: "/events/street-art.jpg"
    },
    {
      id: 5,
      title: "Slam Poetry",
      category: "Literary",
      dateLabel: "17 Feb",
      venue: "Literature Hall L2",
      time: "3:00 PM – 5:00 PM",
      coordinator: "Literary Society",
      price: 0,
      imageUrl: "/events/slam-poetry.jpg"
    },
    {
      id: 6,
      title: "Creative Writing",
      category: "Literary",
      dateLabel: "17 Feb",
      venue: "Writers’ Lounge W1",
      time: "10:00 AM – 12:00 PM",
      coordinator: "Writers Club",
      price: 0,
      imageUrl: "/events/creative-writing.jpg"
    },
    {
      id: 7,
      title: "Photography Contest",
      category: "Visual Arts",
      dateLabel: "18 Feb",
      venue: "Photography Lab P3",
      time: "9:00 AM – 11:30 AM",
      coordinator: "Lens Masters",
      price: 0,
      imageUrl: "/events/photography.jpg"
    },
    {
      id: 8,
      title: "Short Film",
      category: "Visual Arts",
      dateLabel: "18 Feb",
      venue: "Auditorium A5",
      time: "1:00 PM – 4:00 PM",
      coordinator: "Film Society",
      price: 0,
      imageUrl: "/events/short-film.jpg"
    },
    {
      id: 9,
      title: "Hackathon",
      category: "Technical",
      dateLabel: "15-16 Feb",
      venue: "Innovation Lab I1",
      time: "24-Hour Sprint",
      coordinator: "Tech Club",
      price: 0,
      imageUrl: "/events/hackathon.jpg"
    },
    {
      id: 10,
      title: "UI/UX Design",
      category: "Technical",
      dateLabel: "16 Feb",
      venue: "Design Studio D7",
      time: "10:00 AM – 1:00 PM",
      coordinator: "Design Committee",
      price: 0,
      imageUrl: "/events/ui-ux.jpg"
    },
    {
      id: 11,
      title: "Gaming Tournament",
      category: "Gaming",
      dateLabel: "17-18 Feb",
      venue: "E-Sports Arena",
      time: "Full Day",
      coordinator: "Gaming Guild",
      price: 0,
      imageUrl: "/events/gaming-tournament.jpg"
    },
    {
      id: 12,
      title: "VR Experience",
      category: "Gaming",
      dateLabel: "18 Feb",
      venue: "VR Dome",
      time: "11:00 AM – 4:00 PM",
      coordinator: "AR/VR Club",
      price: 0,
      imageUrl: "/events/vr-experience.jpg"
    }
  ];


  const categoryFiltered =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // DATE FILTER
  const finalEvents =
    activeDate === "All"
      ? categoryFiltered
      : categoryFiltered.filter((event) => event.dateLabel === activeDate);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Explore Events"
            subtitle="Explore and register for our exciting lineup of technical and cultural events"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background-secondary md:sticky md:top-20 z-30 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-heading font-semibold transition-all ${selectedCategory === category
                  ? "bg-gradient-to-r from-neon-cyan to-neon-magenta text-white glow-cyan"
                  : "bg-card border border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {DATE_FILTERS.map((label) => {
            const isActive = activeDate === label;
            return (
              <button
                key={label}
                onClick={() => setActiveDate(label)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  "border shadow-[0_0_18px_rgba(0,0,0,0.6)]",
                  isActive
                    ? "border-[#f4c76b] bg-[#f4c76b]/10 text-[#ffdf91] shadow-[0_0_25px_rgba(255,215,0,0.65)]"
                    : "border-[#6b5db8]/50 bg-[#100826]/80 text-[#d2c8ff]/80 hover:border-[#f4c76b]/70 hover:text-[#ffdf91]",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>






      {/* Events Grid */}
      <div className="flex flex-col gap-16">
        {finalEvents.length === 0 ? (
          <div className="text-center py-16 text-xl text-foreground/60">
            No events found.
          </div>
        ) : (
          finalEvents.map((event, index) => (
            <div
              key={index}
              className="w-full flex justify-center px-4"
            >
              <div className="w-full max-w-5xl">
                <EventCard event={event} index={index} />
              </div>
            </div>
          ))
        )}
      </div>




      <Footer />
    </div>
  );
};

export default Events;
