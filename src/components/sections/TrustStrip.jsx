import { ShieldCheck, Zap, Users, RefreshCw } from "lucide-react";
import { trustPoints } from "../../data/trustPoints";

const icons = {
  ShieldCheck,
  Zap,
  Users,
  RefreshCw,
};

export default function TrustStrip() {
  return (
    <section className="bg-black text-white border-y border-yellow-500/20 py-8 relative z-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((item) => {
          const Icon = icons[item.icon] || ShieldCheck;
          return (
            <div key={item.title} className="flex items-start gap-3.5">
              <div className="h-10 w-10 flex-none rounded-xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center border border-yellow-400/30 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                <Icon size={20} strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}