import { PetalRing } from "./shared";

const petal = "M0,0 C -2.2,-9 -1.8,-20 0,-29 C 1.8,-20 2.2,-9 0,0 Z";

const serratedLeaf =
  "M0,0 L-3,-3 L-7,-5 L-5,-9 L-10,-11 L-7,-15 L-12,-17 L-8,-21 L-11,-24 L-5,-26 L0,-28 L5,-26 L11,-24 L8,-21 L12,-17 L7,-15 L10,-11 L5,-9 L7,-5 L3,-3 Z";

function Bloom({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <PetalRing petalPath={petal} count={16} size={1.15} fillOpacity={0.4} />
      <PetalRing petalPath={petal} count={16} size={0.85} rotateOffset={11.25} fillOpacity={0.48} />
      <PetalRing petalPath={petal} count={12} size={0.5} rotateOffset={7} fillOpacity={0.58} />
      {[
        [0, 0],
        [1.2, -1],
        [-1, 1.2],
        [1.4, 1],
        [-1.3, -0.8],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.6} fill="currentColor" stroke="none" />
      ))}
    </g>
  );
}

function Bud({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <PetalRing petalPath={petal} count={12} size={0.32} fillOpacity={0.45} />
    </g>
  );
}

/** Chrysanthemum (菊花) — dense starburst bloom, serrated leaves. */
export function Chrysanthemum({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M58 198 C 56 168, 60 138, 54 104 C 52 86, 56 70, 52 52" strokeWidth={1.3} />
      <path d="M56 140 L44 148" strokeWidth={1} />
      <path d="M54 100 L64 106" strokeWidth={1} />
      <path d="M52 96 L34 92" strokeWidth={1} />

      <path
        d={serratedLeaf}
        transform="translate(44 148) rotate(-110)"
        fill="currentColor"
        fillOpacity={0.35}
        strokeWidth={0.9}
      />
      <path
        d={serratedLeaf}
        transform="translate(64 106) rotate(75) scale(0.8)"
        fill="currentColor"
        fillOpacity={0.35}
        strokeWidth={0.9}
      />

      <Bloom transform="translate(52 46)" />
      <Bud transform="translate(30 90)" />
    </svg>
  );
}
