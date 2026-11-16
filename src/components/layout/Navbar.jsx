import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import { siteConfig } from "../../data/siteConfig";
import { waLink } from "../../utils/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-heading font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg ${
      isActive
        ? "text-black bg-yellow-400 font-extrabold shadow-sm"
        : "text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800/60"
    }`;

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-12 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label={`${siteConfig.name} Home`}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black font-heading text-[13px] font-black tracking-wider text-yellow-400 border border-yellow-400/40 shadow-[0_0_15px_rgba(250,204,21,0.2)] group-hover:scale-105 transition-transform">
            GMPS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl leading-tight text-white tracking-tight group-hover:text-yellow-400 transition-colors">
              Ganpati
            </span>
            <span className="text-[10px] sm:text-[11px] font-heading font-extrabold text-yellow-400 uppercase tracking-widest -mt-0.5">
              Man Power Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main Navigation">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <a
            href="/#calculator"
            className="text-sm font-heading font-semibold text-zinc-300 hover:text-yellow-400 py-1.5 px-3 rounded-lg hover:bg-zinc-800/60 transition-colors"
          >
            Cost Estimator
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneLink}
            className="flex items-center gap-1.5 text-xs font-heading font-bold text-zinc-200 hover:text-yellow-400 px-3 py-2 rounded-xl transition-colors"
          >
            <Phone size={15} className="text-yellow-400" />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={waLink("hiring staff")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-xs px-4 py-2.5 rounded-xl shadow-md hover:shadow-yellow-400/25 hover:shadow-lg transition-all"
          >
            <MessageCircle size={15} className="fill-black" />
            <span>Hire Staff</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-yellow-400 rounded-xl hover:bg-zinc-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-xl px-4 py-6 flex flex-col gap-3 shadow-2xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base font-heading font-bold py-2.5 px-4 rounded-xl transition ${
                    isActive
                      ? "bg-yellow-400 text-black font-extrabold"
                      : "text-zinc-200 hover:bg-zinc-900 hover:text-yellow-400"
                  }`
                }
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="/#calculator"
              onClick={() => setOpen(false)}
              className="text-base font-heading font-bold py-2.5 px-4 rounded-xl text-zinc-200 hover:bg-zinc-900 hover:text-yellow-400"
            >
              Cost Estimator
            </a>
          </nav>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={waLink("hiring staff on mobile")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black py-3.5 px-4 rounded-xl shadow-md"
            >
              <MessageCircle size={18} className="fill-black" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={siteConfig.phoneLink}
              className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 font-heading font-bold py-3 px-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <Phone size={18} />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}