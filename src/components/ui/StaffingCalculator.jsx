import { useState, useMemo } from "react";
import { Calculator, MessageCircle, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { areas } from "../../data/areas";

const staffingRates = {
  housekeeping: { name: "Housekeeping Staff", base: 12500, multiplier12: 1.35, multiplier24: 1.7 },
  security: { name: "Security Guard", base: 14000, multiplier12: 1.3, multiplier24: 1.65 },
  driver: { name: "Personal / Commercial Driver", base: 16000, multiplier12: 1.25, multiplier24: 1.6 },
  office: { name: "Office Boy / Support", base: 13500, multiplier12: 1.3, multiplier24: 1.6 },
  ward: { name: "Hospital Ward Staff", base: 14500, multiplier12: 1.35, multiplier24: 1.7 },
  cleaning: { name: "Deep Cleaning Crew", base: 2500, multiplier12: 1.0, multiplier24: 1.0, isSession: true },
  events: { name: "Event & Function Staff", base: 1000, multiplier12: 1.5, multiplier24: 2.0, isPerDay: true },
};

export default function StaffingCalculator() {
  const [role, setRole] = useState("housekeeping");
  const [shift, setShift] = useState("8h");
  const [count, setCount] = useState(1);
  const [selectedArea, setSelectedArea] = useState(areas[0] || "HITEC City");

  const calculation = useMemo(() => {
    const config = staffingRates[role] || staffingRates.housekeeping;
    let unitRate = config.base;

    if (shift === "12h") unitRate = Math.round(config.base * config.multiplier12);
    if (shift === "24h") unitRate = Math.round(config.base * config.multiplier24);

    const totalEstimate = unitRate * count;
    return {
      config,
      unitRate,
      totalEstimate,
      isSession: config.isSession,
      isPerDay: config.isPerDay,
    };
  }, [role, shift, count]);

  const handleWhatsAppQuote = () => {
    const shiftLabel = shift === "8h" ? "8-Hour Day Shift" : shift === "12h" ? "12-Hour Shift" : "24-Hour Live-in";
    const text =
      `Hello ${siteConfig.name}, I used your Staffing Cost Calculator.\n\n` +
      `📋 *Requirement Summary:*\n` +
      `• *Role:* ${calculation.config.name}\n` +
      `• *Quantity:* ${count} staff member(s)\n` +
      `• *Shift Model:* ${shiftLabel}\n` +
      `• *Location:* ${selectedArea}, Hyderabad\n` +
      `• *Estimated Budget:* ₹${calculation.totalEstimate.toLocaleString("en-IN")}${
        calculation.isSession ? " / session" : calculation.isPerDay ? " / day" : " / month"
      }\n\n` +
      `Please confirm candidate availability and share final commercial quotation.`;

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculator" className="relative mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-24">
      <div className="rounded-[32px] bg-gradient-to-br from-black via-zinc-950 to-black text-white p-6 sm:p-10 md:p-14 border border-yellow-500/30 shadow-[0_0_50px_rgba(250,204,21,0.12)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Controls Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-4">
              <Calculator size={14} className="text-yellow-400" />
              <span>Instant Staffing Cost Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-4">
              Calculate your staffing budget in seconds
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
              No guesswork. Configure your staff requirements in Greater Hyderabad and receive an instant transparent estimate with verified candidates.
            </p>

            <div className="space-y-6">
              {/* Select Role */}
              <div>
                <label className="block text-xs font-heading font-extrabold text-yellow-400 uppercase tracking-wider mb-2">
                  1. Select Staff Role
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(staffingRates).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setRole(key)}
                      className={`text-left p-3 rounded-xl border text-xs font-heading transition-all cursor-pointer ${
                        role === key
                          ? "bg-yellow-400 text-black border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] font-black"
                          : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-yellow-400/50 hover:bg-zinc-800"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Shift */}
              {!calculation.isSession && (
                <div>
                  <label className="block text-xs font-heading font-extrabold text-yellow-400 uppercase tracking-wider mb-2">
                    2. Shift Duration
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "8h", label: "8-Hour Shift", hint: "Standard Day" },
                      { id: "12h", label: "12-Hour Shift", hint: "Extended Coverage" },
                      { id: "24h", label: "24-Hour Live-in", hint: "Full Facility Care" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setShift(item.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          shift === item.id
                            ? "bg-yellow-400/20 border-yellow-400 text-yellow-300 font-bold"
                            : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-yellow-400/40"
                        }`}
                      >
                        <p className="text-xs sm:text-sm font-heading font-bold">{item.label}</p>
                        <p className="text-[10px] text-zinc-500">{item.hint}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Headcount & Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-extrabold text-yellow-400 uppercase tracking-wider mb-2">
                    3. Required Headcount: <span className="text-white font-black text-sm">{count}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 5, 10, 20].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCount(num)}
                        className={`flex-1 py-2 rounded-lg text-xs font-heading font-bold border transition cursor-pointer ${
                          count === num
                            ? "bg-yellow-400 text-black border-yellow-300 font-black shadow-sm"
                            : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-yellow-400/40"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-extrabold text-yellow-400 uppercase tracking-wider mb-2">
                    4. Hyderabad Location
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    {areas.map((a) => (
                      <option key={a} value={a} className="bg-black text-white">
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="relative">
            <div className="rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-yellow-500/30 p-6 sm:p-8 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-yellow-400">
                  Estimated Commercial Budget
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/30">
                  <Sparkles size={11} /> Transparent Pricing
                </span>
              </div>

              <div className="py-6">
                <div className="text-xs text-zinc-400 font-medium mb-1">Total Estimated Cost</div>
                <div className="text-4xl sm:text-5xl font-heading font-black text-yellow-400 tracking-tight flex items-baseline gap-2">
                  <span>₹{calculation.totalEstimate.toLocaleString("en-IN")}</span>
                  <span className="text-sm font-medium text-zinc-400">
                    {calculation.isSession ? "/ session" : calculation.isPerDay ? "/ day" : "/ month"}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  (Approx. ₹{calculation.unitRate.toLocaleString("en-IN")} per staff member)
                </p>
              </div>

              {/* Guarantees Checklist */}
              <div className="space-y-2.5 py-4 border-t border-b border-zinc-800 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-yellow-400 flex-shrink-0" />
                  <span>100% Police verification & Aadhaar ID check included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-yellow-400 flex-shrink-0" />
                  <span>Rapid deployment to {selectedArea} within 24–48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 flex-shrink-0" />
                  <span>Free candidate replacement guarantee on all monthly contracts</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="mt-6 w-full flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-base py-4 px-6 rounded-xl shadow-lg shadow-yellow-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle size={20} className="fill-black" />
                <span>Get Exact Quotation on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-zinc-500 mt-3">
                Zero advance commitment. Speak with our Hyderabad operations manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
