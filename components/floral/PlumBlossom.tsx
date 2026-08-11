import { BrushBranch, FilledPetal, PetalRing, Stamens } from "./shared";

const petal =
  "M0,0 C -7,-5 -9,-14 -6,-20 L 0,-17 L 6,-20 C 9,-14 7,-5 0,0 Z";

const stamenPoints: Array<[number, number]> = [
  [4, -11],
  [9, -6],
  [11, 3],
  [7, 9],
  [-1, 12],
  [-9, 8],
  [-11, -1],
  [-7, -9],
];

function Blossom({ transform, size = 1 }: { transform: string; size?: number }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${size})`}>
        <PetalRing petalPath={petal} count={5} fillOpacity={0.55} />
        <Stamens points={stamenPoints} />
        <circle r="2.6" fill="currentColor" stroke="none" />
      </g>
    </g>
  );
}

function Bud({ transform, size = 1 }: { transform: string; size?: number }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${size})`}>
        <path
          d="M0,0 C -5,-3 -6,-11 0,-17 C 6,-11 5,-3 0,0 Z"
          fill="currentColor"
          fillOpacity={0.55}
          strokeWidth={1}
        />
        <path d="M-2,0 C -5,3 -6,6 -8,7" strokeWidth={0.9} />
        <path d="M2,0 C 5,3 6,6 8,7" strokeWidth={0.9} />
      </g>
    </g>
  );
}

/** Plum blossom (梅花) — bare gnarled branch, ink-brush style. */
export function PlumBlossom({ className }: { className?: string }) {
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
      <BrushBranch
        d={[
          "M62 198 L58 178 L64 160 L54 142",
          "M54 142 L60 122 L50 104",
          "M50 104 L56 86 L48 68",
          "M48 68 L52 50 L50 34",
        ]}
        widths={[3.2, 2.4, 1.6, 1]}
      />
      <BrushBranch d={["M54 142 L70 124 L82 110"]} widths={[1.4]} />
      <BrushBranch d={["M60 122 L44 108 L34 100"]} widths={[1.3]} />
      <BrushBranch d={["M58 178 L76 168"]} widths={[1.2]} />

      <Blossom transform="translate(50 30)" size={1.15} />
      <Blossom transform="translate(82 106) rotate(18)" size={0.85} />
      <Bud transform="translate(34 96) rotate(-10)" size={0.95} />
      <Bud transform="translate(76 164) rotate(25)" size={0.7} />
      <FilledPetal
        d={petal}
        transform="translate(24 62) rotate(50) scale(0.55)"
        fillOpacity={0.45}
      />
      <FilledPetal
        d={petal}
        transform="translate(96 150) rotate(-35) scale(0.45)"
        fillOpacity={0.45}
      />
    </svg>
  );
}
