import { Users, Building2, ShieldCheck, Clock, Star } from "lucide-react";
import { statistics } from "../../data/statistics";

const iconMap = {
  Users,
  Building2,
  ShieldCheck,
  Clock,
  Star,
};

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mx-auto max-w-7xl px-4 md:px-12">
      <div className="rounded-3xl bg-zinc-900/95 backdrop-blur-xl border border-yellow-500/25 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 md:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
        {statistics.map((stat, idx) => {
          const Icon = iconMap[stat.icon] || ShieldCheck;
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-2 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="h-10 w-10 rounded-xl bg-yellow-400/15 text-yellow-400 flex items-center justify-center mb-2.5 border border-yellow-400/30">
                <Icon size={20} strokeWidth={2.4} />
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-yellow-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-heading font-bold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-400 mt-0.5">{stat.subtext}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
