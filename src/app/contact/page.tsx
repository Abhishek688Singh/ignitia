"use client";

import Image from "next/image";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import mandalaGold from "@/assets/mandala-gold.png";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Us"
            subtitle="Have questions? We'd love to hear from you"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-gold-gradient mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground/70 text-lg">
                  Whether you're a participant, sponsor, or just curious about Ignitia 2k25, we're here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="text-neon-cyan" size={24} />,
                    title: "Email",
                    content: "info@ignitia2k25.com",
                    link: "mailto:info@ignitia2k25.com",
                  },
                  {
                    icon: <Phone className="text-neon-magenta" size={24} />,
                    title: "Phone",
                    content: "+91 123 456 7890",
                    link: "tel:+911234567890",
                  },
                  {
                    icon: <MapPin className="text-gold" size={24} />,
                    title: "Location",
                    content: "College Campus, City, State - 123456",
                    link: "#",
                  },
                  {
                    icon: <Clock className="text-neon-violet" size={24} />,
                    title: "Hours",
                    content: "Mon - Fri: 9:00 AM - 6:00 PM",
                    link: "#",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="gold-border bg-card/50 backdrop-blur-sm p-6 hover-lift group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 hexagon bg-gradient-to-br from-background-secondary to-background-tertiary flex items-center justify-center group-hover:glow-cyan transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">{item.title}</p>
                        <a
                          href={item.link}
                          className="text-foreground font-heading hover:text-gold transition-colors"
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="gold-border bg-card/50 backdrop-blur-sm p-4 h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="text-gold mx-auto mb-3" size={48} />
                  <p className="text-foreground/60">Interactive Map</p>
                  <p className="text-sm text-foreground/40">Campus Location</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="gold-border bg-card/50 backdrop-blur-sm p-8 relative">
              {/* Mandala Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none">
                <Image src={mandalaGold} alt="" className="w-full h-full object-contain animate-rotate-slow"  />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-gold-gradient mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gold font-heading">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        required
                        className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gold font-heading">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        required
                        className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gold font-heading">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gold font-heading">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      required
                      className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gold font-heading">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20 min-h-32"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white font-heading font-semibold rounded-lg glow-cyan hover:scale-105 transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;