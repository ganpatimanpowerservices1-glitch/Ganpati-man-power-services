import { Star, CheckCircle2 } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-16 md:py-24 border-y border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by homeowners & leading businesses in Hyderabad"
          subtitle="Real reviews from residential welfare associations, IT facility managers, and healthcare operators."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-zinc-900/90 p-7 border border-zinc-800 shadow-sm hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-heading font-extrabold bg-black text-yellow-400 px-2.5 py-0.5 rounded-full border border-yellow-400/30">
                    {t.tag}
                  </span>
                </div>

                <p className="text-sm md:text-base text-zinc-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border-2 border-yellow-400"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-black text-sm text-white">{t.name}</span>
                    <CheckCircle2 size={13} className="text-yellow-400" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-tight">
                    {t.role} • <span className="text-yellow-400 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
