"use client";
import Image from "next/image";


import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { User, Mail, Phone, School, Calendar } from "lucide-react";
import mandalaGold from "@/assets/mandala-gold.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    event: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We'll contact you soon.", {
      description: "Check your email for confirmation details.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      event: "",
      teamSize: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 particle-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Register Now"
            subtitle="Join us at the most electrifying cultural fest of 2025"
          />
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative gold-border rounded-2xl bg-card/80 backdrop-blur-sm p-8 md:p-12">
              {/* Mandala Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none">
                <Image src={mandalaGold} alt="" className="w-full h-full object-contain animate-rotate-slow"  />
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gold font-heading flex items-center gap-2">
                    <User size={18} />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gold font-heading flex items-center gap-2">
                    <Mail size={18} />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gold font-heading flex items-center gap-2">
                    <Phone size={18} />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    placeholder="+91 1234567890"
                  />
                </div>

                {/* College */}
                <div className="space-y-2">
                  <Label htmlFor="college" className="text-gold font-heading flex items-center gap-2">
                    <School size={18} />
                    College/Institution *
                  </Label>
                  <Input
                    id="college"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    required
                    className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20"
                    placeholder="Your college name"
                  />
                </div>

                {/* Event Selection */}
                <div className="space-y-2">
                  <Label htmlFor="event" className="text-gold font-heading flex items-center gap-2">
                    <Calendar size={18} />
                    Interested Event *
                  </Label>
                  <Select
                    value={formData.event}
                    onValueChange={(value) => setFormData({ ...formData, event: value })}
                  >
                    <SelectTrigger className="bg-background-secondary border-gold/30 text-foreground focus:border-gold">
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-secondary border-gold/30">
                      <SelectItem value="dance">Dance Battle</SelectItem>
                      <SelectItem value="band">Battle of Bands</SelectItem>
                      <SelectItem value="art">Digital Art Contest</SelectItem>
                      <SelectItem value="poetry">Slam Poetry</SelectItem>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="gaming">Gaming Tournament</SelectItem>
                      <SelectItem value="photo">Photography Contest</SelectItem>
                      <SelectItem value="film">Short Film</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Team Size */}
                <div className="space-y-2">
                  <Label htmlFor="teamSize" className="text-gold font-heading">
                    Team Size
                  </Label>
                  <Select
                    value={formData.teamSize}
                    onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                  >
                    <SelectTrigger className="bg-background-secondary border-gold/30 text-foreground focus:border-gold">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-secondary border-gold/30">
                      <SelectItem value="solo">Solo</SelectItem>
                      <SelectItem value="2-3">2-3 Members</SelectItem>
                      <SelectItem value="4-5">4-5 Members</SelectItem>
                      <SelectItem value="6+">6+ Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gold font-heading">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background-secondary border-gold/30 text-foreground focus:border-gold focus:ring-gold/20 min-h-32"
                    placeholder="Any special requirements or questions?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white font-heading font-semibold rounded-lg glow-cyan hover:scale-105 transition-transform"
                >
                  Complete Registration
                </button>

                <p className="text-sm text-foreground/60 text-center">
                  By registering, you agree to our terms and conditions. You'll receive a confirmation email shortly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;