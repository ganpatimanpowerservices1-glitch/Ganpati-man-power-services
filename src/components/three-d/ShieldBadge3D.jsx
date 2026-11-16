import { Check } from "lucide-react";

const shield = "polygon(50% 0, 100% 14%, 100% 55%, 50% 100%, 0 55%, 0 14%)";

export default function ShieldBadge3D({ className = "" }) {
  const layer = { position: "absolute", inset: 0, clipPath: shield };

  return (
    <div
      aria-hidden="true"
      className={`float-slower ${className}`}
      style={{ width: 66, height: 76, perspective: 600 }}
    >
      <div className="flip-3d relative" style={{ width: 66, height: 76 }}>
        <div style={{ ...layer, background: "#0f3d3e", transform: "translateZ(-7px)" }} />
        <div style={{ ...layer, background: "#b9851a" }} />
        <div
          className="flex items-center justify-center"
          style={{ ...layer, background: "#e0a526", transform: "translateZ(7px)" }}
        >
          <Check size={30} color="#0f3d3e" strokeWidth={2.6} />
        </div>
      </div>
    </div>
  );
}