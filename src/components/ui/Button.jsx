import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    href,
    to,
    target,
    rel,
    className = "",
    iconLeft: IconLeft,
    iconRight: IconRight,
    shimmer = false,
    ...props
  },
  ref
) {
  const baseClasses =
    "inline-flex items-center justify-center font-heading font-extrabold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-yellow-400 hover:bg-yellow-300 text-black shadow-md hover:shadow-xl shadow-yellow-500/20 focus:ring-yellow-400",
    yellow:
      "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black shadow-md hover:shadow-xl shadow-yellow-500/25 focus:ring-yellow-400",
    gold:
      "bg-yellow-400 hover:bg-yellow-300 text-black shadow-md hover:shadow-xl shadow-yellow-500/25 focus:ring-yellow-400",
    whatsapp:
      "bg-wa-green text-black font-black hover:brightness-105 focus:ring-wa-green shadow-md hover:shadow-xl shadow-wa-green/30",
    outline:
      "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring-yellow-400",
    outlineWhite:
      "border-2 border-white/80 text-white hover:bg-white hover:text-black focus:ring-white",
    ghost:
      "text-zinc-200 hover:bg-zinc-800/80 hover:text-yellow-400 focus:ring-yellow-400",
    glass:
      "bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-white hover:border-yellow-400 hover:text-yellow-400 shadow-sm focus:ring-yellow-400",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.primary
  } ${shimmer ? "relative overflow-hidden group" : ""} ${className}`;

  const content = (
    <>
      {IconLeft && <IconLeft size={size === "sm" ? 16 : size === "lg" ? 22 : 18} aria-hidden="true" />}
      <span>{children}</span>
      {IconRight && <IconRight size={size === "sm" ? 16 : size === "lg" ? 22 : 18} aria-hidden="true" />}
      {shimmer && (
        <span
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={combinedClasses} {...props}>
      {content}
    </button>
  );
});

export default Button;
