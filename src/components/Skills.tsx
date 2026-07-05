import './skills.css';
import { useEffect, useRef, useState } from 'react';
import { Database, Cloud, Brain, Bot, Sparkles, Braces, Plug } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { LucideSkillIcon, SkillItem } from '../data';
import { SKILLS_META, SKILL_CATEGORIES } from '../data';
import { TechIcon, techHex } from './TechIcon';
import SkillsBackdrop from './SkillsBackdrop';

const LUCIDE_MAP: Record<LucideSkillIcon, LucideIcon> = {
  database: Database,
  cloud: Cloud,
  brain: Brain,
  bot: Bot,
  sparkles: Sparkles,
  braces: Braces,
  plug: Plug,
};

/* Brand-ish colors for skills without a simple-icons glyph */
const LUCIDE_COLORS: Record<LucideSkillIcon, string> = {
  database: '#336791',
  cloud: '#0078d4',
  brain: '#8e44ad',
  bot: '#16a085',
  sparkles: '#f5a623',
  braces: '#512bd4',
  plug: '#7c3aed',
};

const TILES_PER_ROW = 6;

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

/** Black glyph on light brand tiles (e.g. JavaScript yellow), white otherwise. */
function glyphColorFor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 176 ? '#111' : '#fff';
}

function Tile({ item }: { item: SkillItem }) {
  const Fallback = item.lucide ? LUCIDE_MAP[item.lucide] : null;
  const tileColor = item.slug ? techHex(item.slug) : LUCIDE_COLORS[item.lucide ?? 'database'];
  const glyphColor = glyphColorFor(tileColor);
  return (
    <div className="tech-icon">
      <div className="tech-box" style={{ background: tileColor, color: glyphColor }}>
        {item.slug ? (
          <TechIcon slug={item.slug} title={item.name} className="tech-icon-glyph" colored={false} />
        ) : (
          Fallback && (
            <Fallback className="tech-icon-glyph" strokeWidth={1.8} aria-label={item.name} />
          )
        )}
      </div>
      <span>{item.name}</span>
      <div className="experience-level">{item.level}</div>
    </div>
  );
}

/** Skills: glass category pills + staggered tile rows with hover levels. */
export default function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].category);
  const [shownRows, setShownRows] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);

  const current = SKILL_CATEGORIES.find((c) => c.category === active) ?? SKILL_CATEGORIES[0];
  const rows = chunk(current.items, TILES_PER_ROW);

  // Reveal only once the section scrolls into view (reference behavior).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger .show onto rows (150ms apart) when visible / category changes.
  useEffect(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setShownRows(0);
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = chunk(
      (SKILL_CATEGORIES.find((c) => c.category === active) ?? SKILL_CATEGORIES[0]).items,
      TILES_PER_ROW,
    ).length;
    if (reduced) {
      setShownRows(count);
      return;
    }
    for (let i = 0; i < count; i++) {
      timers.current.push(window.setTimeout(() => setShownRows(i + 1), 80 + i * 150));
    }
    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, [active, inView]);

  return (
    <section id="skills" ref={sectionRef}>
      <SkillsBackdrop />
      <p className="section-text-p1">{SKILLS_META.eyebrow}</p>
      <h1 className="title">{SKILLS_META.title}</h1>

      <div className="category-buttons">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.category}
            type="button"
            className={`category-btn${cat.category === active ? ' active' : ''}`}
            aria-pressed={cat.category === active}
            onClick={() => setActive(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="skills-container" id="skillsContainer">
        {rows.map((row, i) => (
          <div key={`${current.category}-${i}`} className={`skills-row${i < shownRows ? ' show' : ''}`}>
            {row.map((item) => (
              <Tile key={item.name} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
