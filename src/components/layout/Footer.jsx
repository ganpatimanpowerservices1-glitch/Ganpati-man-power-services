import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { navLinks } from "../../data/navLinks";
import { services } from "../../data/services";
import { waLink } from "../../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300 border-t border-yellow-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* Col 1: Brand & Credo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 font-heading text-[13px] font-black text-yellow-400 border border-yellow-400/40 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              GMPS
            </div>
            <div>
              <p className="font-heading font-black text-xl text-white leading-tight">
                Ganpati
              </p>
              <p className="text-[10px] font-heading font-extrabold text-yellow-400 uppercase tracking-widest">
                Man Power Services
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Hyderabad's trusted staffing agency supplying thoroughly verified housekeeping, security, driving, and support personnel for homes and enterprises.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-yellow-400 font-heading font-bold">
            <ShieldCheck size={16} className="text-yellow-400" />
            <span>100% Police & Document Verification</span>
          </div>
        </div>

        {/* Col 2: Services Directory */}
        <div>
          <p className="font-heading font-bold text-yellow-400 text-base mb-4">
            Specialized Services
          </p>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services/${s.id}`}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1 group text-zinc-400"
                >
                  <span>{s.title}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-yellow-400 font-bold hover:underline">
                View All 13 Services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Hyderabad Locations */}
        <div>
          <p className="font-heading font-bold text-yellow-400 text-base mb-4">
            Key Hyderabad Hubs
          </p>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li>• HITEC City & Madhapur IT Corridor</li>
            <li>• Gachibowli & Financial District</li>
            <li>• Kukatpally, Miyapur & Kompally</li>
            <li>• Banjara Hills & Jubilee Hills</li>
            <li>• Secunderabad & Begumpet</li>
            <li>• Uppal & East Hyderabad Hub</li>
          </ul>
          <p className="text-xs text-yellow-400/90 font-semibold mt-4">
            ✓ On-demand mobilization across all zones
          </p>
        </div>

        {/* Col 4: Contact & WhatsApp */}
        <div className="space-y-4">
          <p className="font-heading font-bold text-yellow-400 text-base mb-4">
            Connect With Us
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-yellow-400 flex-shrink-0" />
              <a href={siteConfig.phoneLink} className="hover:text-yellow-400 font-bold text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={16} className="text-yellow-400 flex-shrink-0" />
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 text-zinc-300"
              >
                WhatsApp: {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-yellow-400 flex-shrink-0" />
              <span className="text-xs text-zinc-400 truncate">{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-400">Hyderabad, Telangana, India</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href={waLink("quick staffing inquiry")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-xs py-3 px-4 rounded-xl shadow-md transition"
            >
              <MessageCircle size={16} className="fill-black" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-[11px] text-zinc-600">
            Registered Manpower & Staffing Agency • Greater Hyderabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}