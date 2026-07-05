import './contact.css';
import { useEffect, useRef, useState } from 'react';

const RING_CIRCUMFERENCE = 164;

/** Fixed scroll-to-top button with a scroll-progress ring. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 400);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      barRef.current?.style.setProperty(
        'stroke-dashoffset',
        String(RING_CIRCUMFERENCE - progress * RING_CIRCUMFERENCE),
      );
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scrollToTop"
      type="button"
      className={`scroll-to-top${visible ? ' visible' : ''}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg className="progress-ring" width="60" height="60" aria-hidden="true">
        <circle className="progress-ring-circle" strokeWidth="3" fill="transparent" r="26" cx="30" cy="30" />
        <circle
          ref={barRef}
          className="progress-ring-bar"
          strokeWidth="3"
          fill="transparent"
          r="26"
          cx="30"
          cy="30"
        />
      </svg>
      <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 4l-8 8h6v8h4v-8h6z" />
      </svg>
    </button>
  );
}
