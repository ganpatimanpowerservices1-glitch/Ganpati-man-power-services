import { UserCheck } from "lucide-react";

export default function CoinBadge3D({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`float-slow ${className}`}
      style={{ width: 60, height: 60, perspective: 500 }}
    >
      <div
        className="flip-3d flex items-center justify-center rounded-full box-border"
        style={{
          width: 60,
          height: 60,
          border: "4px solid #b9851a",
          background:
            "radial-gradient(circle at 35% 30%, #f6d98b, #e0a526 60%, #b9851a)",
          animationDuration: "4.5s",
        }}
      >
        <UserCheck size={26} color="#0f3d3e" strokeWidth={2.2} />
      </div>
    </div>
  );
}