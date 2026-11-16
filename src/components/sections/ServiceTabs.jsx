import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { categories } from "../../data/categories";
import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

export default function ServiceTabs() {
  const [active, setActive] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return services.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          (s.suitableFor && s.suitableFor.toLowerCase().includes(q))
      );
    }
    return services.filter((s) => s.category === active);
  }, [active, searchQuery]);

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Our Service Catalog"
          title="Verified Staffing For Every Requirement"
          subtitle="Explore 13+ specialized manpower solutions tailored for homes, apartments, corporate offices, and hospitals across Hyderabad."
          className="!mb-0"
        />

        {/* Live Search Input */}
        <div className="w-full md:w-72 relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search role (e.g. driver, guard)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills (only if not searching) */}
      {!searchQuery && (
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-zinc-800"
        >
          {categories.map((c) => {
            const on = c.id === active;
            const count = services.filter((s) => s.category === c.id).length;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all cursor-pointer ${
                  on
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.25)] font-black"
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-yellow-400/50 hover:text-yellow-400 hover:bg-zinc-850"
                }`}
              >
                <span>{c.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    on ? "bg-black text-yellow-400 font-extrabold" : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Service Cards */}
      {filteredServices.length > 0 ? (
        <div
          role="tabpanel"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
          <p className="text-lg font-heading font-bold text-white">No matching services found</p>
          <p className="text-sm text-zinc-400 mt-1">Try another search term or explore all service categories.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 px-5 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-black cursor-pointer hover:bg-yellow-300 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Bottom CTA to full services */}
      <div className="mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-heading font-extrabold text-base transition-colors"
        >
          <span>View all 13 services with full details & specifications</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}