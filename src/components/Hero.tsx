import './hero.css';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, BookOpen } from 'lucide-react';
import { HERO, SITE } from '../data';
import { UpworkIcon } from './UpworkIcon';
import monogram from '../assets/logo.svg';

const SOCIALS = [
  { id: 'github-btn', label: 'GitHub', href: SITE.github, Icon: Github },
  { id: 'linkedin-btn', label: 'LinkedIn', href: SITE.linkedin, Icon: Linkedin },
  { id: 'medium-btn', label: 'Medium', href: SITE.medium, Icon: BookOpen },
] as const;

const AFFILIATIONS = [HERO.employer, HERO.university];

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

/**
 * Hero: name, role and CTAs beside a frosted-glass ID badge (portrait)
 * hanging from a lanyard. The badge drops in once the preloader lifts
 * (html.is-loaded) and tilts toward the pointer on fine-pointer devices.
 * Below 1024px everything stacks, centred, with the badge on top.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const badge = badgeRef.current;
    if (!section || !stage || !badge) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let px = 0;
    let py = 0;

    // Measure the untransformed stage, not the tilted badge, so the
    // tilt never feeds back into its own input.
    const apply = () => {
      raf = 0;
      const r = stage.getBoundingClientRect();
      const nx = clamp((px - (r.left + r.width / 2)) / (r.width * 1.4));
      const ny = clamp((py - (r.top + r.height / 2)) / (r.height * 1.1));
      badge.style.setProperty('--tilt-x', `${(-ny * 9).toFixed(2)}deg`);
      badge.style.setProperty('--tilt-y', `${(nx * 13).toFixed(2)}deg`);
      badge.style.setProperty('--sheen-x', `${(50 + nx * 45).toFixed(1)}%`);
      badge.style.setProperty('--sheen-y', `${(40 + ny * 40).toFixed(1)}%`);
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      for (const prop of ['--tilt-x', '--tilt-y', '--sheen-x', '--sheen-y']) {
        badge.style.removeProperty(prop);
      }
    };

    section.addEventListener('pointermove', onMove, { passive: true });
    section.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const [firstName, ...rest] = HERO.name.split(' ');

  return (
    <section id="profile" ref={sectionRef} aria-label="Introduction">
      <div className="hero-copy">
        <ul className="hero-affiliations hero-rise">
          {AFFILIATIONS.map((aff) => (
            <li key={aff.name}>
              <img src={aff.logo} alt="" />
              <span>{aff.name}</span>
            </li>
          ))}
        </ul>

        <div className="hero-rise hero-rise--name">
          <h1 className="hero-name">
            <span>{firstName}</span> <span>{rest.join(' ')}</span>
          </h1>
        </div>

        <p className="hero-role hero-rise hero-rise--role">
          {HERO.roleLead} <strong>{HERO.roleFocus}</strong>
        </p>

        <div className="hero-actions hero-rise hero-rise--actions">
          <div className="hero-ctas">
            <a className="btn hero-btn-primary" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-color-1" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </div>

          <div className="hero-socials">
            {SOCIALS.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                id={id}
                className="social-btn-1"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <span className="svgContainer1">
                  <Icon size={22} aria-hidden="true" />
                </span>
              </a>
            ))}
            <a
              id="upwork-btn"
              className="social-btn-1"
              href={SITE.upwork}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
            >
              <span className="svgContainer1">
                <UpworkIcon size={22} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stage" ref={stageRef}>
        <div className="hero-lanyard">
          <span className="hero-strap" aria-hidden="true" />
          <span className="hero-clip" aria-hidden="true" />
          <div className="hero-badge" ref={badgeRef}>
            <span className="hero-badge-slot" aria-hidden="true" />
            <figure className="hero-badge-photo">
              <img
                src={HERO.photo}
                alt={HERO.photoAlt}
                width={1000}
                height={1074}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
            {/* Repeats the name, role and affiliations shown beside it. */}
            <div className="hero-badge-meta" aria-hidden="true">
              <div className="hero-badge-id">
                <img className="hero-badge-mark" src={monogram} alt="" />
                <div className="hero-badge-text">
                  <span className="hero-badge-name">{HERO.name}</span>
                  <span className="hero-badge-role">{HERO.role}</span>
                </div>
              </div>
              <div className="hero-badge-foot">
                <img className="hero-badge-logo" src={HERO.employer.logo} alt="" />
                <span className="hero-badge-tagline">{HERO.badgeTagline}</span>
                <img className="hero-badge-logo hero-badge-logo--uni" src={HERO.university.logo} alt="" />
              </div>
            </div>
            <span className="hero-badge-sheen" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
