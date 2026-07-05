import { useMemo } from 'react';

const CX = 1235;
const CY = 450;

/** Deterministic pseudo-random for stable streak layout. */
function makeRand(seedInit: number) {
  let seed = seedInit;
  return () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

interface HandProps {
  length: number;
  width: number;
  color: string;
  opacity: number;
  tail?: number;
  periodSec: number;
  offsetSec: number;
  animate: boolean;
}

/** A clock hand rotating about the clock center via SMIL (local pivot). */
function Hand({ length, width, color, opacity, tail = 0, periodSec, offsetSec, animate }: HandProps) {
  const staticAngle = (offsetSec / periodSec) * 360;
  return (
    <g transform={animate ? undefined : `rotate(${staticAngle})`}>
      {animate && (
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur={`${periodSec}s`}
          begin={`${-offsetSec}s`}
          repeatCount="indefinite"
        />
      )}
      <line
        x1="0"
        y1={tail}
        x2="0"
        y2={-length}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        opacity={opacity}
      />
    </g>
  );
}

/**
 * Animated backdrop for #skills (own artwork): a live clock — hands set
 * to the real time and sweeping — plus horizontal motion-streak lines.
 * Feathered to white by .skills-backdrop::after.
 */
export default function SkillsBackdrop() {
  const { streaks, ticks, offsets, animate } = useMemo(() => {
    const rand = makeRand(7);
    // Tight, dense streak band running into the clock (reference look)
    const streakEls = Array.from({ length: 72 }, (_, i) => {
      const y = 400 + rand() * 170;
      const x1 = rand() * 90;
      const x2 = 900 + rand() * 480;
      const op = 0.05 + rand() * 0.2;
      return (
        <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke="#000" strokeWidth={rand() < 0.15 ? 1.4 : 0.8} opacity={op.toFixed(3)} />
      );
    });
    const tickEls = Array.from({ length: 60 }, (_, i) => {
      const a = (i * 6 * Math.PI) / 180;
      const long = i % 5 === 0;
      const r1 = long ? 350 : 366;
      const r2 = 388;
      return (
        <line
          key={i}
          x1={CX + r1 * Math.sin(a)}
          y1={CY - r1 * Math.cos(a)}
          x2={CX + r2 * Math.sin(a)}
          y2={CY - r2 * Math.cos(a)}
          stroke="#9a9a9a"
          strokeWidth={long ? 1.8 : 0.8}
          opacity="0.45"
        />
      );
    });
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes() * 60 + sec;
    const hr = (now.getHours() % 12) * 3600 + min;
    return {
      streaks: streakEls,
      ticks: tickEls,
      offsets: { sec, min, hr },
      animate: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    };
  }, []);

  return (
    <div className="skills-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet">
        {streaks}
        {ticks}
        <g transform={`translate(${CX} ${CY})`}>
          <Hand length={175} width={3.5} color="#222" opacity={0.8} periodSec={43200} offsetSec={offsets.hr} animate={animate} />
          <Hand length={258} width={2.2} color="#222" opacity={0.8} periodSec={3600} offsetSec={offsets.min} animate={animate} />
          <Hand length={300} width={1.1} color="#333" opacity={0.85} tail={62} periodSec={60} offsetSec={offsets.sec} animate={animate} />
          <circle cx="0" cy="0" r="4.5" fill="#222" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
