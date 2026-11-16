import { useState } from "react";
import { Send, Phone, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { services } from "../../data/services";
import { areas } from "../../data/areas";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-zinc-700 bg-black/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all shadow-sm";

export default function EnquiryCard({ className = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0]?.title || "Housekeeping Services",
    area: areas[0] || "HITEC City",
  });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const text =
      `Hello ${siteConfig.name}, I would like to request staff.\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `💼 *Service:* ${form.service}\n` +
      `📍 *Location:* ${form.area}, Hyderabad\n\n` +
      `Please let me know the available staff and quotation.`;

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`rounded-3xl bg-zinc-900/95 backdrop-blur-xl border border-yellow-500/30 p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
          <Sparkles size={13} className="text-yellow-400" /> Quick Staff Request
        </span>
        <span className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping inline-block" />
          Online Now
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
        Hire Verified Staff
      </h3>
      <p className="mt-1 text-sm text-zinc-400 mb-6">
        Share your requirement and get candidate options on WhatsApp within 15 minutes.
      </p>

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div>
          <label className="text-xs font-heading font-bold text-yellow-400 uppercase tracking-wider">
            Your Full Name
          </label>
          <input
            className={inputClass}
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="e.g. Ramesh Kumar"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="text-xs font-heading font-bold text-yellow-400 uppercase tracking-wider">
            10-Digit Mobile Number
          </label>
          <input
            className={inputClass}
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="e.g. 9876543210"
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-heading font-bold text-yellow-400 uppercase tracking-wider">
              Service Role
            </label>
            <select
              className={inputClass}
              name="service"
              value={form.service}
              onChange={onChange}
            >
              {services.map((s) => (
                <option key={s.id} value={s.title} className="bg-black text-white">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-heading font-bold text-yellow-400 uppercase tracking-wider">
              Hyderabad Area
            </label>
            <select
              className={inputClass}
              name="area"
              value={form.area}
              onChange={onChange}
            >
              {areas.map((a) => (
                <option key={a} value={a} className="bg-black text-white">
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <p role="alert" className="text-xs font-medium text-red-400 bg-red-950/60 p-2.5 rounded-lg border border-red-800">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-base py-3.5 rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-xl transition-all cursor-pointer"
        >
          <MessageCircle size={18} className="fill-black" />
          <span>Connect on WhatsApp</span>
        </button>

        <div className="pt-2 text-center">
          <p className="text-xs text-zinc-400">
            Or call our coordinator directly:{" "}
            <a
              href={siteConfig.phoneLink}
              className="font-bold text-yellow-400 hover:text-yellow-300 underline"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </form>

      <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1 text-zinc-300">
          <ShieldCheck size={13} className="text-yellow-400" /> 100% Police Verified
        </span>
        <span>•</span>
        <span>Zero Advance</span>
        <span>•</span>
        <span>Same Day Reply</span>
      </div>
    </div>
  );
}