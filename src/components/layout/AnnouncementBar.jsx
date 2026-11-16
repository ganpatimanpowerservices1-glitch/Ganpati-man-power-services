import { Phone, Zap } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white text-xs border-b border-yellow-500/20 relative z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-12 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-yellow-400">
            <Zap size={13} className="text-yellow-400 fill-yellow-400 animate-pulse" />
            <span>Hyderabad's Verified Manpower Network</span>
          </span>
          <span className="hidden md:inline text-zinc-600">•</span>
          <span className="hidden md:inline text-zinc-400">
            Same-day replacement guarantee on all monthly staffing contracts
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-zinc-400 text-[11px]">
            Greater Hyderabad & ORR
          </span>
          <a
            href={siteConfig.phoneLink}
            className="flex items-center gap-1.5 font-heading font-black text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <Phone size={13} />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}