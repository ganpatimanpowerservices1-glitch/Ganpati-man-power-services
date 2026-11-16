export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl flex flex-col items-center" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider mb-3.5 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-[1.15] text-white">
        {title}
      </h2>

      <div
        className={`mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
