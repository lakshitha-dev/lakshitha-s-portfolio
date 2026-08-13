import './milestones.css';
import { MILESTONES, MILESTONES_META } from '../data';
import { Reveal } from './Reveal';

/**
 * Milestones: vertical timeline; each item's date renders through the
 * CSS `content: attr(date-is)` glass pill.
 */
export default function Milestones() {
  return (
    <section id="milestones">
      <p className="section-text-p1">{MILESTONES_META.eyebrow}</p>
      <h1 className="title">{MILESTONES_META.title}</h1>
      <div className="container-timeline">
        {MILESTONES.map((m, i) => (
          <div key={m.id} className="timeline-item" {...{ 'date-is': m.date }}>
            <div className="timeline-upper">
              {m.image && i % 2 === 1 && (
                <Reveal variant="left" className="milestone-photo-wrap">
                  <img
                    src={m.image.src}
                    alt={m.image.alt}
                    className={
                      m.image.logo
                        ? 'milestone-logo'
                        : `milestone-photo tilt-${m.image.tilt ?? 'left'}`
                    }
                    loading="lazy"
                  />
                </Reveal>
              )}
              <Reveal variant={i % 2 === 0 ? 'left' : 'right'}>
                <div className="milestone-details">
                  <h1>{m.title}</h1>
                  <p className="milestone-subtitle">{m.subtitle}</p>
                  <p>{m.description}</p>
                </div>
              </Reveal>
              {m.image && i % 2 === 0 && (
                <Reveal variant="right" className="milestone-photo-wrap">
                  <img
                    src={m.image.src}
                    alt={m.image.alt}
                    className={
                      m.image.logo
                        ? 'milestone-logo'
                        : `milestone-photo tilt-${m.image.tilt ?? 'right'}`
                    }
                    loading="lazy"
                  />
                </Reveal>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
