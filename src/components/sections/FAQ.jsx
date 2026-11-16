import { useState } from "react";
import { MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";
import { waLink } from "../../utils/whatsapp";
import SectionHeading from "../ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(faqs.map((f) => f.category).filter(Boolean))];

  const filteredFaqs =
    activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="mx-auto max-w-4xl px-4 md:px-12 py-16 md:py-24">
      <SectionHeading
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Clear answers on verification standards, onboarding timelines, replacements, and billing terms."
        align="center"
      />

      {/* Category Filter Pills */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-heading font-extrabold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.25)]"
                  : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/50 hover:text-yellow-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={f.q}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-zinc-900 border-yellow-400/60 shadow-[0_0_25px_rgba(250,204,21,0.12)]"
                  : "bg-zinc-900/70 border-zinc-800 hover:border-yellow-400/40"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-white text-base sm:text-lg cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className={isOpen ? "text-yellow-400" : "text-white"}>{f.q}</span>
                <span
                  className={`h-8 w-8 flex-none rounded-full flex items-center justify-center transition-transform duration-200 ${
                    isOpen ? "bg-yellow-400 text-black rotate-180" : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-3">
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prompt */}
      <div className="mt-12 text-center bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="font-heading font-black text-white text-sm">Have a unique requirement?</p>
          <p className="text-xs text-zinc-400">Our senior staffing coordinators are available 7 days a week.</p>
        </div>
        <a
          href={waLink("a question regarding manpower hiring")}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-xs px-5 py-3 rounded-xl transition shadow-md"
        >
          <MessageCircle size={16} className="fill-black" />
          <span>Ask On WhatsApp</span>
        </a>
      </div>
    </section>
  );
}