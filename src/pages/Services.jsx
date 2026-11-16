import { useState, useMemo } from "react";
import { Search, Sparkles, ShieldCheck } from "lucide-react";
import { categories } from "../data/categories";
import { services } from "../data/services";
import { siteConfig } from "../data/siteConfig";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeading from "../components/ui/SectionHeading";
import Timeline from "../components/sections/Timeline";
import CTABanner from "../components/sections/CTABanner";
import StaffingCalculator from "../components/ui/StaffingCalculator";
import { useSeo } from "../utils/seo";

export default function Services() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [query, setQuery] = useState("");

  useSeo({
    title: `Our Specialized Staffing Services | ${siteConfig.name}`,
    description: `Housekeeping, security guards, personal drivers, delivery executives, hospital ward attendants and office staff from ${siteConfig.name} in ${siteConfig.city}. 100% verified.`,
  });

  const filtered = useMemo(() => {
    let list = services;
    if (selectedCat !== "all") {
      list = list.filter((s) => s.category === selectedCat);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          (s.suitableFor && s.suitableFor.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedCat, query]);

  return (
    <main>
      {/* Services Hero Header */}
      <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 md:py-24 relative overflow-hidden border-b border-yellow-500/15">
        <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-4">
            <ShieldCheck size={14} className="text-yellow-400" />
            <span>Complete Staffing Solutions</span>
          </div>

          <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-4">
            Specialized Manpower Services
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Pre-screened, document-verified personnel available for homes, luxury apartments, healthcare facilities, and corporate offices across {siteConfig.city}.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role, duty, or keyword (e.g. driver, night guard, cleaner)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="mx-auto max-w-7xl px-4 md:px-12 pt-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-6 border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setSelectedCat("all")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
              selectedCat === "all"
                ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.25)] font-black"
                : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/50 hover:text-yellow-400"
            }`}
          >
            All Services ({services.length})
          </button>

          {categories.map((c) => {
            const on = selectedCat === c.id;
            const count = services.filter((s) => s.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCat(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                  on
                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.25)] font-black"
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/50 hover:text-yellow-400"
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    on ? "bg-black text-yellow-400 font-black" : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-12 py-12 md:py-16">
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900 rounded-3xl border border-zinc-800 p-8 max-w-md mx-auto">
            <p className="text-lg font-heading font-bold text-white">No matching services found</p>
            <p className="text-sm text-zinc-400 mt-1">Try another search keyword or reset filters.</p>
            <button
              onClick={() => {
                setQuery("");
                setSelectedCat("all");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <StaffingCalculator />
      <Timeline />
      <CTABanner />
    </main>
  );
}