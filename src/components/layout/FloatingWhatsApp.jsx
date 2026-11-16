import { MessageCircle } from "lucide-react";
import { waLink } from "../../utils/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 group">
      {/* Tooltip prompt */}
      <div className="bg-white/95 backdrop-blur-md text-teal-950 text-xs font-heading font-bold px-3.5 py-2 rounded-xl border border-line shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
        <span>Staffing Desk Online • 5m reply</span>
      </div>

      <a
        href={waLink("I need immediate staff assistance")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-wa-green text-teal-950 shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-108 transition-transform cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>
        <MessageCircle size={28} className="fill-teal-950 text-teal-950" />
      </a>
    </div>
  );
}