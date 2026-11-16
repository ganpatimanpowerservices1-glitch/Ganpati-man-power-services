import { Link } from "react-router-dom";
import {
  Home, Sparkles, Wrench, Building2, ShieldCheck, Eye, Stethoscope,
  Car, Package, Droplets, Calculator, GraduationCap, CalendarDays,
  ArrowRight, CheckCircle2, MessageCircle
} from "lucide-react";
import TiltCard from "./TiltCard";
import { waLink } from "../../utils/whatsapp";

const icons = {
  Home, Sparkles, Wrench, Building2, ShieldCheck, Eye, Stethoscope,
  Car, Package, Droplets, Calculator, GraduationCap, CalendarDays,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Home;

  return (
    <TiltCard className="h-full" max={6}>
      <article className="group h-full bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(250,204,21,0.18)] hover:border-yellow-400/60 transition-all duration-300">
        {/* Photographic Card Header */}
        <div className="relative h-48 w-full overflow-hidden bg-black">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/40 to-transparent" />

          {/* Badge */}
          {service.badge && (
            <div className="absolute top-3.5 left-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold bg-black/90 backdrop-blur-md text-yellow-400 shadow-sm border border-yellow-400/40">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                {service.badge}
              </span>
            </div>
          )}

          {/* Icon Pill */}
          <div className="absolute -bottom-5 right-5 h-12 w-12 rounded-2xl bg-yellow-400 shadow-lg shadow-yellow-500/30 flex items-center justify-center text-black font-bold transition-transform duration-300 group-hover:scale-110">
            <Icon size={24} strokeWidth={2.4} aria-hidden="true" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 pt-7 flex flex-col flex-1">
          <h3 className="text-xl font-heading font-black text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
            <Link to={`/services/${service.id}`} className="focus:outline-none">
              {service.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {service.description}
          </p>

          {/* Key bullets */}
          {service.features && service.features.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-zinc-800 pt-3.5">
              {service.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle2 size={14} className="text-yellow-400 flex-shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Starting rate */}
          {service.startingFrom && (
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">Estimated Rate</span>
              <span className="font-heading font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-lg">
                {service.startingFrom}
              </span>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-5 pt-3 flex items-center gap-2">
            <a
              href={waLink(service.title)}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-heading font-black py-2.5 px-3 rounded-xl transition-all shadow-md"
            >
              <MessageCircle size={15} className="fill-black" />
              <span>Book on WhatsApp</span>
            </a>

            <Link
              to={`/services/${service.id}`}
              className="p-2.5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors"
              aria-label={`View details for ${service.title}`}
            >
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}