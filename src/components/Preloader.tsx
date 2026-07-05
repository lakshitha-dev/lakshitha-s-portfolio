import './preloader.css';
import { useEffect, useState } from 'react';
import { LOADING } from '../data';

/**
 * White full-viewport loading overlay with a solar-system spinner and a
 * 0→100 percentage ramp. Hides via the .hidden class (0.8s fade), then
 * unmounts.
 */
export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 1600;
    let raf = 0;
    let hideTimer = 0;
    let unmountTimer = 0;

    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / DURATION) * 100));
      setPercent(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setHidden(true);
        unmountTimer = window.setTimeout(() => setGone(true), 850);
      }
    };
    raf = requestAnimationFrame(tick);

    // Safety: never trap the page if rAF is throttled.
    hideTimer = window.setTimeout(() => {
      setPercent(100);
      setHidden(true);
      unmountTimer = window.setTimeout(() => setGone(true), 850);
    }, DURATION + 1200);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loading-container${hidden ? ' hidden' : ''}`} aria-hidden="true">
      <div className="loading-content">
        <h2 className="loading-title">{LOADING.title}</h2>
        <p className="loading-subtitle">{LOADING.subtitle}</p>
        <div className="solar-system">
          <div className="sun" />
          <div className="orbit orbit-1">
            <div className="planet planet-1" />
          </div>
          <div className="orbit orbit-2">
            <div className="planet planet-2" />
          </div>
          <div className="orbit orbit-3">
            <div className="planet planet-3" />
          </div>
        </div>
        <div className="loading-percentage">{percent}%</div>
      </div>
    </div>
  );
}
