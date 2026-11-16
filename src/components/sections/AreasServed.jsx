import { MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { areaHubs, areas } from "../../data/areas";
import { siteConfig } from "../../data/siteConfig";
import { waLink } from "../../utils/whatsapp";
import SectionHeading from "../ui/SectionHeading";

export default function AreasServed() {
  return (
    <section className="bg-black py-16 md:py-24 border-y border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <SectionHeading
          eyebrow="Local Presence"
          title={`Active Across Every Zone of ${siteConfig.city}`}
          subtitle="Our decentralized supervisor network ensures rapid deployment and on-site oversight across major commercial and residential hubs."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {areaHubs.map((hub) => (
            <div
              key={hub.hub}
              className="rounded-3xl bg-zinc-900/90 p-7 border border-zinc-800 shadow-sm hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-black text-yellow-400 border border-yellow-400/30 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-heading font-extrabold bg-yellow-400/10 text-yellow-400 px-2.5 py-0.5 rounded-full border border-yellow-400/30">
                    <Clock size={11} /> {hub.leadTime}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-white mb-2">
                  {hub.hub}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {hub.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {hub.locations.map((loc) => (
                    <span
                      key={loc}
                      className="px-2.5 py-1 rounded-lg bg-black text-xs font-heading font-semibold text-zinc-300 border border-zinc-800"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800">
                <a
                  href={waLink(`staff requirement in ${hub.hub}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-xs font-heading font-black text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <span>Request in this zone</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Unlisted zone note */}
        <div className="rounded-2xl bg-zinc-900 p-6 border border-yellow-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-heading font-black text-white text-sm">
              Do not see your locality or gated community listed?
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              We deploy personnel across all municipalities and suburbs within Greater Hyderabad and Outer Ring Road (ORR).
            </p>
          </div>
          <a
            href={waLink("checking staff availability for my locality")}
            target="_blank"
            rel="noreferrer"
            className="flex-none flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-heading font-black px-5 py-3 rounded-xl transition-colors shadow-md"
          >
            <MessageCircle size={15} className="fill-black" />
            <span>Check My Location</span>
          </a>
        </div>
      </div>
    </section>
  );
}