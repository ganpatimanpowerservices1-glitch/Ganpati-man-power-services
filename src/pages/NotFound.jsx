import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useSeo } from "../utils/seo";

export default function NotFound() {
  useSeo({ title: "Page Not Found" });

  return (
    <main className="bg-[#0a0a0c] text-white min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 sm:py-32 text-center">
      <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 mb-4">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-base text-zinc-400 max-w-md mx-auto mb-8">
        The page you are looking for may have moved or is temporarily unavailable. Let's get you back on track.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-heading font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-500/25 transition-all"
        >
          <Home size={16} />
          <span>Go to Home Page</span>
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-heading font-bold text-sm px-6 py-3 rounded-xl transition-all"
        >
          <span>Explore Services</span>
        </Link>
      </div>
    </main>
  );
}