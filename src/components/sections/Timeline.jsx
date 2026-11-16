import { ClipboardCheck, ShieldCheck, UserCheck, Sparkles } from "lucide-react";
import { processSteps } from "../../data/processSteps";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const iconMap = {
  ClipboardCheck,
  ShieldCheck,
  UserCheck,
  Sparkles,
};

export default function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-24">
      <SectionHeading
        eyebrow="Simple & Transparent"
        title="How We Deliver Staff To Your Doorstep"
        subtitle="A streamlined 4-step onboarding pipeline designed for speed, safety, and zero hassle."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-4 relative">
        {processSteps.map((step, idx) => {
          const Icon = iconMap[step.icon] || Sparkles;
          return (
            <Reveal key={step.title} delay={idx * 0.1}>
              <div className="h-full rounded-3xl bg-zinc-900/90 p-7 border border-zinc-800 shadow-sm hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300 flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-black text-yellow-400">
                      {step.step}
                    </span>
                    <div className="h-11 w-11 rounded-2xl bg-black text-yellow-400 flex items-center justify-center border border-yellow-400/40 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                      <Icon size={20} strokeWidth={2.4} />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-heading font-extrabold text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/30 mb-2">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-heading font-black text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}