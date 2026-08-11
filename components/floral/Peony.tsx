import { PetalRing, Stamens } from "./shared";

const petal =
  "M0,0 C -11,-5 -15,-16 -10,-25 C -7,-29 -3,-29 0,-25 C 3,-29 7,-29 10,-25 C 15,-16 11,-5 0,0 Z";

const leaf =
  "M0,0 C -10,-4 -18,-2 -22,-10 C -16,-12 -10,-10 -6,-14 C -10,-18 -16,-20 -22,-26 C -12,-26 -4,-20 0,-14 C 4,-20 12,-26 22,-26 C 16,-20 10,-18 6,-14 C 10,-10 16,-12 22,-10 C 18,-2 10,-4 0,0 Z";

function Bloom({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <PetalRing petalPath={petal} count={9} size={1.3} fillOpacity={0.45} />
      <PetalRing petalPath={petal} count={8} size={0.85} rotateOffset={20} fillOpacity={0.5} />
      <PetalRing petalPath={petal} count={6} size={0.55} rotateOffset={10} fillOpacity={0.58} />
      <Stamens
        points={[
          [3, -5],
          [5, 1],
          [1, 5],
          [-4, 4],
          [-5, -2],
          [0, -6],
        ]}
        dotRadius={0.6}
      />
    </g>
  );
}

function Bud({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <path
        d="M0,0 C -8,-5 -9,-16 0,-24 C 9,-16 8,-5 0,0 Z"
        fill="currentColor"
        fillOpacity={0.5}
        strokeWidth={1}
      />
      <path d="M-3,-1 C -7,3 -9,7 -12,9" strokeWidth={0.9} />
      <path d="M0,1 C 0,6 0,10 -1,14" strokeWidth={0.9} />
      <path d="M3,-1 C 7,3 9,7 12,9" strokeWidth={0.9} />
    </g>
  );
}

/** Peony (牡丹) — full layered ruffled bloom, large lobed leaves. */
export function Peony({ className }: { className?: string }) {
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
      <path d="M60 198 C 58 170, 62 140, 58 108" strokeWidth={2} />
      <path d="M58 150 L44 158" strokeWidth={1.2} />
      <path d="M60 125 L76 132" strokeWidth={1.2} />

      <path
        d={leaf}
        transform="translate(38 160) rotate(-100)"
        fill="currentColor"
        fillOpacity={0.35}
        strokeWidth={0.9}
      />
      <path
        d={leaf}
        transform="translate(82 136) rotate(80) scale(0.85)"
        fill="currentColor"
        fillOpacity={0.35}
        strokeWidth={0.9}
      />

      <Bloom transform="translate(58 92)" />
      <Bud transform="translate(30 128) rotate(-15)" />
    </svg>
  );
}
