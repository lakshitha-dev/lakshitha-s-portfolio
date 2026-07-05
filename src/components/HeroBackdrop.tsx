import './hero.css';
import { useEffect, useRef } from 'react';

/**
 * Neural-constellation hero backdrop: drifting monochrome nodes joined by
 * hairline links when near each other, with links forming toward the
 * cursor. Node count scales with viewport; static under reduced motion.
 * The .background-video ::after gradient feathers the bottom to white.
 */
export default function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let raf = 0;
    let width = 0;
    let height = 0;

    const LINK_DIST = 135;
    const CURSOR_DIST = 190;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }

    let nodes: Node[] = [];
    const cursor = { x: -9999, y: -9999 };

    const rand = (() => {
      let seed = 97;
      return () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
    })();

    const seed = () => {
      const count = Math.max(40, Math.min(110, Math.round((width * height) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: rand() * width,
        y: rand() * height,
        vx: (rand() - 0.5) * 0.35,
        vy: (rand() - 0.5) * 0.35,
        r: 1 + rand() * 1.3,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Links between near nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.16;
            ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Slightly stronger links toward the cursor
        if (finePointer) {
          const dx = a.x - cursor.x;
          const dy = a.y - cursor.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CURSOR_DIST * CURSOR_DIST) {
            const alpha = (1 - Math.sqrt(d2) / CURSOR_DIST) * 0.28;
            ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(cursor.x, cursor.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }
    };

    const frame = () => {
      step();
      draw();
      raf = requestAnimationFrame(frame);
    };

    resize();
    seed();
    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: PointerEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    const onLeave = () => {
      cursor.x = -9999;
      cursor.y = -9999;
    };
    const onResize = () => {
      resize();
      seed();
      if (reduced) draw();
    };
    window.addEventListener('resize', onResize);
    if (finePointer && !reduced) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="background-video" aria-hidden="true">
      <canvas ref={canvasRef} className="bg-video space-canvas" />
    </div>
  );
}
