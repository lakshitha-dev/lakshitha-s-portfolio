import './velocity.css';
import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import { VELOCITY } from '../data';

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityRow({ text, baseVelocity }: { text: string; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const directionRef = useRef(baseVelocity < 0 ? -1 : 1);
  const reduced = useReducedMotion();

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((_t, delta) => {
    if (reduced) return;
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    // Scrolling flips/accelerates the drift direction.
    if (vf < 0) directionRef.current = -1;
    else if (vf > 0) directionRef.current = 1;
    moveBy += directionRef.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: 6 }, (_, i) => (
          <span className="custom-scroll-text" key={i}>
            {text}&nbsp;&nbsp;&nbsp;{' '}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Scroll-velocity marquee: two rows drifting in opposite directions. */
export default function VelocityBanner() {
  return (
    <div className="scroll-velocity-banner" aria-hidden="true">
      <div>
        <VelocityRow text={VELOCITY.row1} baseVelocity={-5} />
        <VelocityRow text={VELOCITY.row2} baseVelocity={5} />
      </div>
    </div>
  );
}
