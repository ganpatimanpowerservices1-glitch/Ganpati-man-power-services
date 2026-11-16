import { useRef } from "react";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const canTilt = () =>
    !reduced && window.matchMedia("(hover: hover)").matches;

  const onMove = (e) => {
    if (!canTilt() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-8px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}