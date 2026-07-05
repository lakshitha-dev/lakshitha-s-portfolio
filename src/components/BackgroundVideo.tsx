import './hero.css';
import { useEffect, useRef } from 'react';

/**
 * Original full-bleed hero backdrop (own artwork, canvas): a bright dome
 * rising center-left beneath a dark smoky arch, with turbulent grayscale
 * filaments streaming horizontally across the viewport and drifting dust.
 * Slow flowing motion; static frame under reduced motion. The bottom is
 * feathered to white by the .background-video ::after gradient.
 */
export default function BackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let width = 0;
    let height = 0;

    const rand = (() => {
      let seed = 20260705;
      return () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
    })();

    interface Filament {
      rx: number; // ellipse radii as fractions of scene scale
      ry: number;
      a0: number; // start angle
      span: number;
      alpha: number;
      w: number;
      drift: number; // phase speed
      yJitter: number;
    }
    interface Dust {
      x: number;
      y: number;
      len: number;
      alpha: number;
      speed: number;
    }

    let filaments: Filament[] = [];
    let archBands: Filament[] = [];
    let dust: Dust[] = [];

    const seed = () => {
      // Flat wisps hugging the disk plane (thin lens-shaped arcs left/right)
      filaments = Array.from({ length: 90 }, () => {
        const side = rand() < 0.5 ? 0 : Math.PI;
        return {
          rx: 0.7 + rand() * 2.2,
          ry: 0.05 + rand() * 0.16,
          a0: side - 0.3 + rand() * 0.6,
          span: 0.35 + rand() * 0.9,
          alpha: 0.02 + rand() * 0.1,
          w: 0.5 + rand() * 3.5,
          drift: 0.006 + rand() * 0.02,
          yJitter: (rand() - 0.5) * 0.2,
        };
      });
      // Turbulent arch over the dome — upper-left quadrant only, so the
      // top-right of the viewport stays clean white behind the name.
      archBands = Array.from({ length: 34 }, () => {
        const heavyLeft = rand() < 0.4;
        return {
          rx: 1.02 + rand() * 0.58,
          ry: 0.95 + rand() * 0.4,
          a0: Math.PI * (0.92 + rand() * (heavyLeft ? 0.12 : 0.3)),
          span: Math.PI * (heavyLeft ? 0.2 + rand() * 0.3 : 0.35 + rand() * 0.55),
          alpha: 0.04 + rand() * 0.2,
          w: 8 + rand() * 30,
          drift: 0.002 + rand() * 0.006,
          yJitter: 0,
        };
      });
      dust = Array.from({ length: 150 }, () => ({
        x: rand(),
        y: rand(),
        len: rand() < 0.3 ? 3 + rand() * 9 : 0,
        alpha: 0.04 + rand() * 0.24,
        speed: 0.002 + rand() * 0.01,
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

    const draw = (t: number) => {
      const ts = reduced ? 0 : t * 0.001;

      // Opaque white base — the scene owns the hero viewport
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);

      const cx = width * 0.24;
      const cy = height * 0.62;
      const R = Math.min(width * 0.34, height * 0.5);

      // ── Flat wisps hugging the disk plane ──
      for (const f of filaments) {
        const phase = f.a0 + Math.sin(ts * f.drift * 8) * 0.1;
        ctx.strokeStyle = `rgba(0,0,0,${f.alpha})`;
        ctx.lineWidth = f.w;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy + R * f.yJitter,
          R * f.rx,
          R * f.ry,
          0,
          phase,
          phase + f.span,
        );
        ctx.stroke();
      }

      // ── Dark turbulent arch over the dome (upper-left mass) ──
      for (const b of archBands) {
        const phase = b.a0 + Math.sin(ts * b.drift * 10) * 0.04;
        ctx.strokeStyle = `rgba(0,0,0,${b.alpha})`;
        ctx.lineWidth = b.w;
        ctx.beginPath();
        ctx.ellipse(cx, cy, R * b.rx, R * b.ry, 0, phase, phase + b.span);
        ctx.stroke();
      }

      // ── Bright dome (event-horizon glow) ──
      const dome = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R);
      dome.addColorStop(0, 'rgba(255,255,255,1)');
      dome.addColorStop(0.82, 'rgba(255,255,255,0.96)');
      dome.addColorStop(1, 'rgba(240,240,240,0.75)');
      ctx.fillStyle = dome;
      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // thin smoky rim
      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.99, Math.PI * 1.02, -Math.PI * 0.02);
      ctx.stroke();

      // ── Disk-plane spill: dense streaks flowing right from the dome base ──
      for (let i = 0; i < 40; i++) {
        const yy = cy + (i / 40 - 0.15) * R * 0.5;
        const alpha = 0.03 + 0.12 * Math.abs(Math.sin(i * 1.7));
        const reach = width * (0.35 + 0.65 * ((i * 37) % 100) / 100);
        const sway = reduced ? 0 : Math.sin(ts * 0.35 + i) * 14;
        ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
        ctx.lineWidth = 0.6 + (i % 4) * 0.7;
        ctx.beginPath();
        ctx.moveTo(cx - R * 1.1, yy);
        ctx.bezierCurveTo(
          cx + reach * 0.35,
          yy + sway,
          cx + reach * 0.7,
          yy - sway,
          cx + reach,
          yy + sway * 0.4,
        );
        ctx.stroke();
      }

      // ── Drifting dust and debris specks ──
      ctx.fillStyle = '#000';
      for (const d of dust) {
        const dx = ((d.x + (reduced ? 0 : ts * d.speed)) % 1) * width;
        const dy = d.y * height;
        ctx.globalAlpha = d.alpha;
        if (d.len > 0) {
          ctx.fillRect(dx, dy, d.len, 1);
        } else {
          ctx.beginPath();
          ctx.arc(dx, dy, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // ── Soften the right side so the name stays readable ──
      const fade = ctx.createLinearGradient(width * 0.55, 0, width, 0);
      fade.addColorStop(0, 'rgba(255,255,255,0)');
      fade.addColorStop(1, 'rgba(255,255,255,0.62)');
      ctx.fillStyle = fade;
      ctx.fillRect(width * 0.55, 0, width * 0.45, height);
    };

    const frame = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(frame);
    };

    resize();
    seed();
    if (reduced) {
      draw(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      resize();
      seed();
      if (reduced) draw(0);
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="background-video" aria-hidden="true">
      <canvas ref={canvasRef} className="bg-video space-canvas" />
    </div>
  );
}
