"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight, Shield, Clock, Heart, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            Bright<span className="text-cyan-500">Smile</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Our Team</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Patients</Link>
          </div>
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-6 transition-all hover:scale-105">
            Book Appointment
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-sm font-medium mb-6">
              Welcoming New Patients
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Gentle, Professional <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Dental Care
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We provide state-of-the-art dentistry in a comfortable environment. Your smile is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20">
                <Phone className="mr-2 h-5 w-5" /> (555) SMILE-NOW
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES/STATS */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { icon: Shield, label: "Insurance Accepted" },
                { icon: Clock, label: "Emergency Care" },
                { icon: Star, label: "5-Star Rated" },
                { icon: Heart, label: "Family Friendly" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-3 text-center">
                    <div className="p-3 rounded-full bg-slate-800 text-cyan-400">
                        <item.icon size={24} />
                    </div>
                    <span className="font-semibold text-slate-200">{item.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Patient Services</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive care for the whole family.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { 
                        title: "General Dentistry", 
                        desc: "Routine checkups, cleanings, and digital x-rays to maintain optimal oral health.",
                        icon: Star
                    },
                    { 
                        title: "Cosmetic Dentistry", 
                        desc: "Teeth whitening, veneers, and bonding to help you achieve your dream smile.",
                        icon: Sparkles
                    },
                    { 
                        title: "Restorative Care", 
                        desc: "Crowns, bridges, and implants to restore function and confidence to your smile.",
                        icon: CheckCircle2
                    },
                ].map((service, i) => (
                    <Card key={i} className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-950/50 transition-colors">
                                <service.icon size={24} />
                            </div>
                            <CardTitle className="text-xl text-slate-100">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-400 mb-6">
                                {service.desc}
                            </CardDescription>
                            <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:translate-x-1 transition-transform cursor-pointer">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-600/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Your Visit Today</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                New patients welcome. Call us or schedule online.
            </p>
            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-cyan-600 hover:bg-slate-100 font-bold">
                Schedule Appointment
            </Button>
        </div>
      </section>

    </div>
  );
}
