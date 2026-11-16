import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft, MessageCircle, Phone, ShieldCheck, CheckCircle2,
  Clock, MapPin, Sparkles, Building, Award, Calendar
} from "lucide-react";
import { services } from "../data/services";
import { categories } from "../data/categories";
import { siteConfig } from "../data/siteConfig";
import { waLink } from "../utils/whatsapp";
import { useSeo } from "../utils/seo";
import ServiceCard from "../components/ui/ServiceCard";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  useSeo({
    title: service ? `${service.title} | ${siteConfig.name}` : "Service Not Found",
    description: service
      ? `${service.description} Verified personnel available across ${siteConfig.city}. 24-48h deployment.`
      : undefined,
  });

  if (!service) return <NotFound />;

  const category = categories.find((c) => c.id === service.category);
  const related = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const bookingText =
    `Hello ${siteConfig.name}, I am interested in hiring *${service.title}* for my requirement in Hyderabad. Please share available candidate profiles and pricing.`;

  return (
    <main className="pb-20 bg-[#0a0a0c] text-white">
      {/* Detail Hero Header */}
      <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-10 pb-16 relative overflow-hidden border-b border-yellow-500/15">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
          {/* Breadcrumb */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-heading font-extrabold transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              <Sparkles size={12} className="text-yellow-400" />
              {category?.label || "Specialized Service"}
            </span>

            {service.badge && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-black text-yellow-400 border border-yellow-400/40">
                <Award size={12} />
                {service.badge}
              </span>
            )}
          </div>

          <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 max-w-4xl">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            {service.tagline || service.description}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 md:px-12 py-12 md:py-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">
        {/* Left Column: Deep Dive */}
        <div className="space-y-10">
          {/* Photographic Feature Cover */}
          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl relative h-72 sm:h-96 w-full bg-black">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-yellow-400 font-heading font-extrabold">
                  Target Locations
                </p>
                <p className="text-sm font-semibold">{service.suitableFor || "Greater Hyderabad"}</p>
              </div>

              {service.startingFrom && (
                <div className="bg-yellow-400 text-black px-3.5 py-1.5 rounded-xl font-heading font-black text-sm shadow-md">
                  {service.startingFrom}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              Role Overview & Capabilities
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          {service.features && (
            <div className="rounded-3xl bg-zinc-900/90 p-8 border border-zinc-800 shadow-sm">
              <h3 className="text-xl font-heading font-black text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" />
                <span>What Is Included</span>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shift models */}
          {service.shifts && (
            <div className="rounded-3xl bg-zinc-900/70 p-8 border border-zinc-800">
              <h3 className="text-xl font-heading font-black text-white mb-4 flex items-center gap-2">
                <Clock className="text-yellow-400" />
                <span>Available Shift Configurations</span>
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {service.shifts.map((sh, idx) => (
                  <div key={idx} className="bg-black p-4 rounded-2xl border border-zinc-800 text-center">
                    <p className="text-sm font-heading font-bold text-yellow-400">{sh}</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Flexible Roster</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification Standards */}
          <div className="rounded-3xl bg-black text-white p-8 border border-yellow-500/30 relative overflow-hidden shadow-xl">
            <h3 className="text-xl font-heading font-black text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="text-yellow-400" />
              <span>Mandatory Candidate Compliance</span>
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Before deployment, every candidate assigned to your facility is verified through Government Aadhaar biometric databases, residential address inspection, and local police station record verification.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-yellow-400">
              <span className="bg-zinc-900 px-3 py-1 rounded-full border border-yellow-400/30">✓ 100% Identity Validated</span>
              <span className="bg-zinc-900 px-3 py-1 rounded-full border border-yellow-400/30">✓ Verified Past Employment</span>
              <span className="bg-zinc-900 px-3 py-1 rounded-full border border-yellow-400/30">✓ Free Replacement Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Instant Booking Card */}
        <aside className="sticky top-24 space-y-6">
          <div className="rounded-3xl bg-zinc-900 p-7 sm:p-8 border border-yellow-500/30 shadow-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30 mb-4">
              <Sparkles size={12} className="text-yellow-400" /> Ready For Deployment
            </span>

            <h3 className="text-2xl font-heading font-black text-white mb-2">
              Hire for {service.title}
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Connect with our Hyderabad coordinator on WhatsApp to receive shortlisted candidate profiles within hours.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(bookingText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-sm py-4 px-6 rounded-xl shadow-lg shadow-yellow-500/25 transition-all cursor-pointer"
              >
                <MessageCircle size={18} className="fill-black" />
                <span>Request Profiles on WhatsApp</span>
              </a>

              <a
                href={siteConfig.phoneLink}
                className="w-full flex items-center justify-center gap-2 border-2 border-yellow-400/50 hover:bg-yellow-400 hover:text-black text-yellow-400 font-heading font-bold text-sm py-3.5 px-6 rounded-xl transition-all"
              >
                <Phone size={17} />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center justify-between">
                <span>Deployment Time:</span>
                <span className="font-bold text-yellow-400">24 – 48 Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Replacement:</span>
                <span className="font-bold text-yellow-400">Free within 24h</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Coverage:</span>
                <span className="font-bold text-yellow-400">All Hyderabad Hubs</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-black py-16 border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white mb-8">
              Related Services in <span className="text-yellow-400">{category?.label}</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}