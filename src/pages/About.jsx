import { Link } from "react-router-dom";
import { ShieldCheck, Users, HeartHandshake, Award, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { useSeo } from "../utils/seo";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTABanner from "../components/sections/CTABanner";
import StatsBar from "../components/sections/StatsBar";

export default function About() {
  useSeo({
    title: `About Us | ${siteConfig.name} Hyderabad`,
    description: `Discover how ${siteConfig.name} provides police-verified, dependable manpower and staffing solutions across Greater Hyderabad.`,
  });

  return (
    <main className="bg-[#0a0a0c] text-white">
      {/* About Hero */}
      <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 md:py-24 relative overflow-hidden border-b border-yellow-500/15">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-12 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-4">
            <Award size={14} className="text-yellow-400" />
            <span>Our Heritage & Purpose</span>
          </span>

          <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
            Building Trust in Manpower & Staffing Across <span className="text-yellow-400">{siteConfig.city}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Founded with a singular mission: to eliminate the uncertainty, safety concerns, and friction of finding reliable, verified workers for homes, clinics, and corporate enterprises.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Story & Vision Section */}
      <section className="mx-auto max-w-5xl px-4 md:px-12 py-16 md:py-24 space-y-16">
        {/* Story Paragraphs */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
            <h2 className="text-3xl font-heading font-black text-white">
              Why We Started <span className="text-yellow-400">Ganpati Man Power Services</span>
            </h2>
            <p>
              In a rapidly growing metropolis like Hyderabad, finding trustworthy domestic help, licensed chauffeurs, or vigilant security guards was traditionally handled by unorganized neighborhood brokers without background checks or accountability.
            </p>
            <p>
              {siteConfig.name} was established to institutionalize trust. We combined institutional HR vetting standards with deep local grassroots recruitment, ensuring that every person placed in your home or enterprise is thoroughly background-cleared, identity-checked, and trained for the role.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 h-80 bg-black">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration at Ganpati Man Power"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="pt-8 border-t border-zinc-800">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white text-center mb-10">
            Our Core Operating Principles
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safety & Police Verification First",
                desc: "We never compromise on safety. Aadhaar authentication, local residence checks, and police records are inspected before any candidate is deployed.",
              },
              {
                icon: HeartHandshake,
                title: "Dignity & Fair Employment",
                desc: "We believe satisfied staff perform superior work. We ensure fair compensation, punctual disbursements, and dignified working conditions for all personnel.",
              },
              {
                icon: Clock,
                title: "Speed with Accountability",
                desc: "When you have an urgent staffing shortage, our 24-48h deployment pipeline and replacement guarantee keep your operations running seamlessly.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl bg-zinc-900/90 p-7 border border-zinc-800 shadow-sm hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-4">
                  <pillar.icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="text-lg font-heading font-black text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}