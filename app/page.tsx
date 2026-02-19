import { Button } from "@/components/ui/button";
import { Smile, Calendar, Phone, Activity, Star, Clock, User, Heart } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* NAV - Glassmorphic top bar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Smile size={24} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                    Lumina<span className="text-blue-600">Dental</span>
                </span>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
                <Link href="#" className="hover:text-blue-600 transition-colors">Our Team</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Patients</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Technology</Link>
            </div>

            <Button className="bg-slate-900 text-white hover:bg-blue-600 rounded-full px-6 transition-all shadow-lg shadow-blue-900/10">
                <Calendar className="w-4 h-4 mr-2" /> Book Online
            </Button>
        </div>
      </nav>

      {/* HERO - Split with gradient mesh */}
      <section className="pt-32 pb-20 lg:pt-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cyan-100 to-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase border border-blue-100">
                    Accepting New Patients
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    Dentistry <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Reimagined.</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    Experience the perfect blend of modern technology and compassionate care. We design smiles that change lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-600/20 transition-transform active:scale-95">
                        Schedule Appointment
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">
                        <Phone className="w-4 h-4 mr-2" /> (555) 123-4567
                    </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-8 border-t border-slate-100">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                            </div>
                        ))}
                    </div>
                    <div className="text-sm">
                        <div className="flex text-yellow-500 mb-1">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                        </div>
                        <span className="font-semibold text-slate-900">4.9/5</span> <span className="text-slate-500">from 200+ reviews</span>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/3] group">
                    <img 
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2574&auto=format&fit=crop" 
                        alt="Modern Dental Office" 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                    
                    {/* Floating Cards */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                       <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-[200px]">
                           <Activity className="text-blue-500 mb-2" />
                           <p className="font-bold text-slate-900">Advanced Tech</p>
                           <p className="text-xs text-slate-500">3D Imaging & Laser Dentistry</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SERVICES - Card Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 block">Our Expertise</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Care for the Whole Family</h2>
                <p className="text-slate-500 text-lg">From routine checkups to complex cosmetic makeovers, we do it all under one roof.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "General Dentistry", icon: Heart, desc: "Preventative care, cleanings, and oral health screenings." },
                    { title: "Cosmetic", icon: Star, desc: "Teeth whitening, veneers, and smile makeovers." },
                    { title: "Restorative", icon: User, desc: "Implants, crowns, and bridges to restore function." }
                ].map((s, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <s.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{s.title}</h3>
                        <p className="text-slate-500 group-hover:text-blue-100 transition-colors leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Emergency? We're here.</h2>
                <p className="text-slate-300 max-w-lg">Same-day appointments available for urgent dental care. Don't suffer in silence.</p>
            </div>
            <div className="flex gap-4">
                <Button variant="secondary" className="bg-white text-blue-900 hover:bg-blue-50 h-14 px-8 rounded-xl font-bold">
                    Call Now (24/7)
                </Button>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200 text-sm text-slate-500">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div>
                <span className="font-bold text-slate-900 text-lg block mb-4">Lumina</span>
                <p>123 Dental Ave, Suite 100<br/>New York, NY 10012</p>
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Hours</h4>
                <p className="flex justify-between mb-2"><span>Mon-Fri</span> <span>8am - 6pm</span></p>
                <p className="flex justify-between"><span>Sat</span> <span>9am - 2pm</span></p>
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2">
                    <Link href="#" className="hover:text-blue-600 transition-colors">Patient Portal</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Insurance</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Financing</Link>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
                <p className="mb-4">Tips for a healthy smile delivered to your inbox.</p>
                <div className="flex gap-2">
                    <input className="bg-white border-slate-200 rounded-lg px-4 py-2 w-full" placeholder="Email" />
                    <Button className="bg-blue-600 text-white rounded-lg px-4">→</Button>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}
