import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { waLink } from "../utils/whatsapp";
import { useSeo } from "../utils/seo";
import EnquiryCard from "../components/sections/EnquiryCard";
import AreasServed from "../components/sections/AreasServed";

export default function Contact() {
  useSeo({
    title: `Contact Us | ${siteConfig.name} Hyderabad`,
    description: `Connect with ${siteConfig.name} on ${siteConfig.phone} or WhatsApp to request verified manpower across Hyderabad.`,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Coordinator Line",
      value: siteConfig.phone,
      action: "Call Now",
      href: siteConfig.phoneLink,
      badge: "Fastest Response",
    },
    {
      icon: MessageCircle,
      title: "Official WhatsApp Desk",
      value: siteConfig.phone,
      action: "Chat on WhatsApp",
      href: waLink("contact page inquiry"),
      badge: "Instant Profiles",
      isWa: true,
    },
    {
      icon: Mail,
      title: "Official Email",
      value: siteConfig.email,
      action: "Send Email",
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: "Registered Location",
      value: "Greater Hyderabad, Telangana, India",
      subtext: "Covering IT Corridor, Secunderabad, North & East Hubs",
    },
  ];

  return (
    <main className="bg-[#0a0a0c] text-white">
      {/* Contact Header */}
      <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 md:py-24 relative overflow-hidden border-b border-yellow-500/15">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-12 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-4">
            <Sparkles size={14} className="text-yellow-400" />
            <span>Hyderabad Operations Desk</span>
          </span>

          <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-4">
            Get In Touch With <span className="text-yellow-400">Our Team</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Ready to hire verified staff? Speak directly with our Hyderabad staffing coordinator or submit your requirement below for a rapid response.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Left Column: Direct Communication Hub */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white mb-2">
            Direct Staffing Assistance
          </h2>
          <p className="text-sm text-zinc-400 mb-8">
            Our placement desk operates 7 days a week from 8:00 AM to 9:00 PM for candidate matching and client consultations.
          </p>

          <div className="space-y-4">
            {contactMethods.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-zinc-900/90 p-6 border border-zinc-800 shadow-sm hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.12)] transition-all flex items-start gap-4"
              >
                <div className="h-12 w-12 flex-none rounded-2xl bg-black border border-yellow-400/30 text-yellow-400 flex items-center justify-center">
                  <item.icon size={22} strokeWidth={2.4} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-heading font-extrabold text-yellow-400 uppercase tracking-wider">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-heading font-extrabold bg-black text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-400/40">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-base sm:text-lg font-heading font-black text-white hover:text-yellow-400 transition-colors block truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-heading font-black text-white">
                      {item.value}
                    </p>
                  )}

                  {item.subtext && (
                    <p className="text-xs text-zinc-400 mt-1">{item.subtext}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Operational Hours */}
          <div className="rounded-3xl bg-black text-white p-6 border border-yellow-500/30 flex items-center gap-4 shadow-xl">
            <div className="h-12 w-12 rounded-2xl bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 flex items-center justify-center flex-none">
              <Clock size={22} strokeWidth={2.4} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-yellow-400 font-heading font-extrabold">
                Operational Window
              </p>
              <p className="text-sm font-bold text-white">
                Monday to Sunday: 8:00 AM – 9:00 PM (IST)
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                24/7 on-call emergency security and patient attendant support
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Request Form */}
        <div>
          <EnquiryCard />
        </div>
      </div>

      <AreasServed />
    </main>
  );
}