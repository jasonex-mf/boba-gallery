export function PetalRing({
  petalPath,
  count,
  rotateOffset = 0,
  size = 1,
  fillOpacity = 0.5,
}: {
  petalPath: string;
  count: number;
  rotateOffset?: number;
  size?: number;
  fillOpacity?: number;
}) {
  const step = 360 / count;
  return (
    <g transform={`scale(${size})`}>
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={petalPath}
          transform={`rotate(${rotateOffset + i * step})`}
          fill="currentColor"
          fillOpacity={fillOpacity}
          strokeWidth={1.1}
        />
      ))}
    </g>
  );
}

export function Stamens({
  points,
  dotRadius = 0.9,
}: {
  points: Array<[number, number]>;
  dotRadius?: number;
}) {
  return (
    <>
      <g strokeWidth={0.7}>
        {points.map(([x, y], i) => (
          <path key={i} d={`M0,0 L${x},${y}`} />
        ))}
      </g>
      {points.map(([x, y], i) => (
        <circle
          key={`dot-${i}`}
          cx={x}
          cy={y}
          r={dotRadius}
          fill="currentColor"
          stroke="none"
        />
      ))}
    </>
  );
}

/** A brush stroke made of tapering segments, thickest at the base. */
export function BrushBranch({ d, widths }: { d: string[]; widths: number[] }) {
  return (
    <>
      {d.map((segment, i) => (
        <path
          key={i}
          d={segment}
          strokeWidth={widths[i] ?? 1}
          fill="none"
        />
      ))}
    </>
  );
}

export function FilledPetal({
  d,
  transform,
  fillOpacity = 0.5,
}: {
  d: string;
  transform?: string;
  fillOpacity?: number;
}) {
  return (
    <path
      d={d}
      transform={transform}
      fill="currentColor"
      fillOpacity={fillOpacity}
      strokeWidth={1}
    />
  );
}
