import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { waLink } from "../../utils/whatsapp";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 bg-black/95 backdrop-blur-xl border-t border-yellow-500/20 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <a
        href={siteConfig.phoneLink}
        className="flex items-center justify-center gap-2 py-3.5 font-heading font-bold text-zinc-100 active:bg-zinc-900 transition-colors text-sm"
      >
        <Phone size={18} className="text-yellow-400" aria-hidden="true" />
        <span>Call Coordinator</span>
      </a>
      <a
        href={waLink("mobile quick inquiry")}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 font-heading font-black bg-yellow-400 text-black active:bg-yellow-300 transition-all text-sm"
      >
        <MessageCircle size={18} className="fill-black" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}