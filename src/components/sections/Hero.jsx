import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Sparkles, CheckCircle2, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { waLink } from "../../utils/whatsapp";
import EnquiryCard from "./EnquiryCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-12 pb-24 md:pt-16 md:pb-28 border-b border-yellow-500/15">
      {/* Ambient background glows & micro-grid */}
      <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
        {/* Left Column: Vision & Authority */}
        <div>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 backdrop-blur-md border border-yellow-400/30 text-yellow-400 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span>#1 Trusted Manpower Partner in {siteConfig.city}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-heading font-black tracking-tight leading-[1.1] text-white mb-6">
            Reliable, <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">Police-Verified</span> Staff For Every Job.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-8">
            {siteConfig.name} supplies trained housekeeping, licensed security guards, professional chauffeurs, hospital ward attendants, and office support staff to homes, gated communities, and enterprises across {siteConfig.city}.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href={waLink("hiring staff for my requirement")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-base px-7 py-4 rounded-xl shadow-lg shadow-yellow-500/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <MessageCircle size={20} className="fill-black" />
              <span>Hire on WhatsApp</span>
            </a>

            <Link
              to="/services"
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 border border-yellow-400/40 font-heading font-bold text-base px-6 py-4 rounded-xl backdrop-blur-md transition-all hover:border-yellow-400"
            >
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 text-zinc-300 hover:text-yellow-400 font-heading font-bold text-sm px-4 py-2 transition-colors"
            >
              <Phone size={16} className="text-yellow-400" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800 max-w-xl text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-yellow-400 flex-shrink-0" />
              <span className="font-semibold text-white">100% Police Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-yellow-400 flex-shrink-0" />
              <span className="font-semibold text-white">24–48h Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-yellow-400 flex-shrink-0" />
              <span className="font-semibold text-white">Free Replacement</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Enquiry Card */}
        <div className="relative lg:pl-4">
          <EnquiryCard />
        </div>
      </div>
    </section>
  );
}