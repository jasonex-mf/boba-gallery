import { BrushBranch, FilledPetal, PetalRing, Stamens } from "./shared";

const petal =
  "M0,0 C -8,-6 -10,-16 -6,-21 C -3,-23 -1,-22 0,-19 C 1,-22 3,-23 6,-21 C 10,-16 8,-6 0,0 Z";

const stamenPoints: Array<[number, number]> = [
  [5, -14],
  [10, -9],
  [13, 1],
  [8, 11],
  [-2, 15],
  [-10, 10],
  [-14, -1],
  [-9, -10],
];

function Blossom({ transform, size = 1 }: { transform: string; size?: number }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${size})`}>
        <PetalRing petalPath={petal} count={5} fillOpacity={0.5} />
        <Stamens points={stamenPoints} dotRadius={0.7} />
        <circle r="2.2" fill="currentColor" stroke="none" />
      </g>
    </g>
  );
}

function Bud({ transform, size = 1 }: { transform: string; size?: number }) {
  return (
    <g transform={transform}>
      <g transform={`scale(${size})`}>
        <path
          d="M0,0 C -4,-3 -5,-9 0,-14 C 5,-9 4,-3 0,0 Z"
          fill="currentColor"
          fillOpacity={0.5}
          strokeWidth={0.9}
        />
      </g>
    </g>
  );
}

function Leaf({ transform }: { transform: string }) {
  return (
    <path
      d="M0,0 C -3,-8 -2,-18 0,-24 C 2,-18 3,-8 0,0 Z M0,-6 L0,-20"
      transform={transform}
      fill="currentColor"
      fillOpacity={0.4}
      strokeWidth={0.8}
    />
  );
}

/** Cherry blossom (桜) — slender branch, notched petals, long stamens. */
export function CherryBlossom({ className }: { className?: string }) {
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
          "M62 198 C 58 172, 66 150, 58 122",
          "M58 122 C 52 100, 60 80, 54 54",
        ]}
        widths={[2.6, 1.6]}
      />
      <BrushBranch d={["M58 122 L40 108"]} widths={[1.1]} />
      <BrushBranch d={["M54 54 L38 42"]} widths={[1]} />
      <BrushBranch d={["M54 54 L68 36"]} widths={[1]} />

      <Leaf transform="translate(46 112) rotate(-25)" />

      <Blossom transform="translate(40 104)" size={1} />
      <Blossom transform="translate(38 38) rotate(-8)" size={0.85} />
      <Blossom transform="translate(70 32) rotate(10)" size={1.1} />
      <Bud transform="translate(50 70) rotate(15)" size={0.9} />

      <FilledPetal
        d={petal}
        transform="translate(20 150) rotate(30) scale(0.5)"
        fillOpacity={0.4}
      />
      <FilledPetal
        d={petal}
        transform="translate(85 170) rotate(-40) scale(0.4)"
        fillOpacity={0.4}
      />
    </svg>
  );
}
