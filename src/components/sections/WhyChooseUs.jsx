import { ShieldCheck, Clock, RefreshCw, Users, FileCheck, CheckCircle2, Award } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { siteConfig } from "../../data/siteConfig";

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-16 md:py-24 border-y border-zinc-800/80 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-12 relative z-10">
        <SectionHeading
          eyebrow="The Ganpati Advantage"
          title={`Why Leading Clients Choose ${siteConfig.name}`}
          subtitle="We eliminate the risks and headaches of hiring domestic and commercial staff through rigorous verification, training, and operational guarantees."
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Bento Card 1: Large Span 2 */}
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-3xl bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white p-8 md:p-10 border border-yellow-500/30 relative overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-yellow-400/15 text-yellow-400 border border-yellow-400/40 mb-4">
                  <ShieldCheck size={14} className="text-yellow-400" />
                  <span>Gold Standard Compliance</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight mb-3">
                  100% Police & Document Verification
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                  Unlike unregulated middlemen, every candidate placed by Ganpati Services undergoes three-tier verification before entering your premises: Government biometric ID validation, permanent native address verification, and police background clearance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-200 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                    <span>Aadhaar & Voter ID Biometric Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                    <span>Local Police Station Record Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                    <span>Previous Employer Reference Checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                    <span>Medical Fitness & Hygiene Clearance</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center gap-3 text-xs text-yellow-400/90 font-semibold border-t border-zinc-800">
                <Award size={18} className="text-yellow-400" />
                <span>Zero Compromise on Family & Workplace Safety</span>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 2: 24-48h Rapid Onboarding */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-zinc-900/90 p-8 border border-zinc-800 flex flex-col justify-between hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-5">
                  <Clock size={24} strokeWidth={2.4} />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2">
                  24–48h Rapid Deployment
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Need staff urgently? Our ready roster of pre-interviewed candidates across Hyderabad ensures swift onboarding for emergency gaps or sudden staff shortages.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-heading font-extrabold text-yellow-400">
                ⚡ Fastest turnaround in Cyberabad & Secunderabad
              </div>
            </div>
          </Reveal>

          {/* Bento Card 3: Free Replacement Guarantee */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl bg-zinc-900/90 p-8 border border-zinc-800 flex flex-col justify-between hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-5">
                  <RefreshCw size={24} strokeWidth={2.4} />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2">
                  Free Replacement Guarantee
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  If an employee takes unexpected leave or doesn't meet your performance expectations, we provide a qualified replacement within 24 hours at zero extra charge.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 text-xs font-heading font-extrabold text-yellow-400">
                🛡️ Zero Risk Contract Protection
              </div>
            </div>
          </Reveal>

          {/* Bento Card 4: Male & Female Diverse Roster */}
          <Reveal delay={0.3} className="md:col-span-2">
            <div className="h-full rounded-3xl bg-zinc-900/90 p-8 md:p-10 border border-zinc-800 flex flex-col justify-between hover:border-yellow-400/50 transition-all">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-5">
                  <Users size={24} strokeWidth={2.4} />
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-2">
                  Diverse, Multi-lingual Talent Pool
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-4">
                  Whether you need female housekeepers for private residences, bilingual ward attendants for hospitals, or English-speaking office boys for corporate headquarters, we match candidates fluent in Telugu, Hindi, and English.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                {["Female Housekeepers", "Male Security Guards", "Bilingual Chauffeurs", "Office Boys", "Elderly Care Aides"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-black text-xs font-heading font-bold text-yellow-400 border border-yellow-400/30 shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}