import { FilledPetal, PetalRing } from "./shared";

const petal = "M0,0 C -6,-9 -5,-22 0,-33 C 5,-22 6,-9 0,0 Z";

function Bloom({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <PetalRing petalPath={petal} count={8} size={1.1} fillOpacity={0.45} />
      <PetalRing petalPath={petal} count={6} size={0.65} rotateOffset={15} fillOpacity={0.55} />
      <path
        d="M-7,2 C -7,-6 -4,-10 0,-10 C 4,-10 7,-6 7,2 C 7,8 4,10 0,10 C -4,10 -7,8 -7,2 Z"
        fill="currentColor"
        fillOpacity={0.6}
        strokeWidth={0.9}
      />
      {[
        [0, 2],
        [3, -1],
        [3, 5],
        [-3, -1],
        [-3, 5],
        [0, -3],
        [0, 6],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={0.9} fill="currentColor" stroke="none" />
      ))}
    </g>
  );
}

function LilyPad({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <path
        d="M0,0 C 14,-6 22,-20 16,-34 C 10,-46 -10,-46 -16,-34 C -22,-20 -14,-6 0,0 Z"
        fill="currentColor"
        fillOpacity={0.3}
        strokeWidth={1}
      />
      <path d="M0,-2 L0,-40" strokeWidth={0.6} />
      <path d="M0,-10 L-13,-30" strokeWidth={0.6} />
      <path d="M0,-10 L13,-30" strokeWidth={0.6} />
    </g>
  );
}

/** Lotus (莲花) — pointed petals, textured seed pod, tall bare stalks. */
export function Lotus({ className }: { className?: string }) {
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
      <path d="M56 198 C 54 160, 58 120, 52 80 C 50 60, 54 44, 50 30" strokeWidth={1.4} />
      <path d="M60 196 C 74 182, 86 158, 90 132" strokeWidth={1.1} />
      <path d="M56 190 C 40 186, 26 180, 14 176" strokeWidth={1} />

      <LilyPad transform="translate(14 176) rotate(15) scale(0.8)" />

      <Bloom transform="translate(50 26)" />

      <g transform="translate(90 128) rotate(10)">
        <FilledPetal
          d="M0,0 C -5,-8 -4,-22 0,-32 C 4,-22 5,-8 0,0 Z"
          fillOpacity={0.5}
        />
        <path d="M-2,-2 C -5,2 -7,4 -10,5" strokeWidth={0.8} />
        <path d="M2,-2 C 5,2 7,4 10,5" strokeWidth={0.8} />
      </g>
    </svg>
  );
}
