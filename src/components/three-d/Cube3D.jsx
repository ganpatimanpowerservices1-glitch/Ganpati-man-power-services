import { Home, ShieldCheck, Wrench, ClipboardList } from "lucide-react";

const sides = [
  { rot: "rotateY(0deg)", bg: "#1b7f79", color: "#ffffff", Icon: Home },
  { rot: "rotateY(90deg)", bg: "#e0a526", color: "#0f3d3e", Icon: ShieldCheck },
  { rot: "rotateY(180deg)", bg: "#0f3d3e", color: "#f6d98b", Icon: Wrench },
  { rot: "rotateY(270deg)", bg: "#f6d98b", color: "#0f3d3e", Icon: ClipboardList },
];

export default function Cube3D({ size = 76, className = "" }) {
  const half = size / 2;
  const face = "absolute inset-0 rounded-xl flex items-center justify-center";

  return (
    <div
      aria-hidden="true"
      className={`float-slow ${className}`}
      style={{ width: size, height: size, perspective: 700 }}
    >
      <div className="cube-3d relative" style={{ width: size, height: size }}>
        {sides.map(({ rot, bg, color, Icon }) => (
          <div
            key={rot}
            className={face}
            style={{ background: bg, transform: `${rot} translateZ(${half}px)` }}
          >
            <Icon size={size * 0.45} color={color} strokeWidth={1.8} />
          </div>
        ))}
        <div
          className={face}
          style={{ background: "#2b9c94", transform: `rotateX(90deg) translateZ(${half}px)` }}
        />
        <div
          className={face}
          style={{ background: "#0b2b2c", transform: `rotateX(-90deg) translateZ(${half}px)` }}
        />
      </div>
    </div>
  );
}