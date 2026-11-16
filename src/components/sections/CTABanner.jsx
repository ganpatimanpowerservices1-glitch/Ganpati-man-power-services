import { Phone, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { waLink } from "../../utils/whatsapp";
import Reveal from "../ui/Reveal";

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12 pb-20">
      <Reveal>
        <div className="relative rounded-[36px] bg-gradient-to-r from-black via-zinc-950 to-black text-white overflow-hidden px-6 py-14 sm:px-12 sm:py-20 text-center border border-yellow-500/30 shadow-[0_0_60px_rgba(250,204,21,0.15)]">
          {/* Ambient yellow glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-5">
              <Clock size={14} className="text-yellow-400" />
              <span>Same-Week Onboarding Guarantee</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-4">
              Need reliable, verified staff deployed this week?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Tell us your required roles, preferred shift timings, and location in Hyderabad. We will provide candidate profiles and transparent commercial terms within hours.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href={waLink("urgent staff requirement")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-base px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle size={20} className="fill-black" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 border-2 border-yellow-400/50 hover:bg-yellow-400 hover:text-black text-yellow-400 font-heading font-bold text-base px-8 py-4 rounded-xl backdrop-blur-md transition-all"
              >
                <Phone size={18} />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200">
                <ShieldCheck size={15} className="text-yellow-400" />
                Police Verification Done
              </span>
              <span>•</span>
              <span>Zero Advance Payment</span>
              <span>•</span>
              <span>Hyderabad Wide Coverage</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}