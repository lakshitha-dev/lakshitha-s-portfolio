import './featured.css';
import { useState } from 'react';
import { FEATURED, FEATURED_META, QUOTE_BLOCK } from '../data';
import { Reveal } from './Reveal';

function StatLabel({ label }: { label: string }) {
  const parts = label.split('<br/>');
  return (
    <span className="nsf-stat-label">
      {parts.map((part, i) => (
        <span key={part}>
          {i > 0 && <br />}
          {part}
        </span>
      ))}
    </span>
  );
}

/** Render **bold** segments as <strong> metric emphasis. */
function CardText({ text }: { text: string }) {
  const parts = text.split('**');
  return (
    <p className="nsf-card-text">
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={`${part}-${i}`}>{part}</strong> : part,
      )}
    </p>
  );
}

/** Featured project: overview grid, stat chips, and achievements marquee. */
export default function FeaturedProject() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <section id="featured" aria-labelledby="nsf-heading">
        <Reveal variant="blur">
          <p className="nsf-eyebrow">{FEATURED_META.eyebrow}</p>
        </Reveal>
        <Reveal variant="blur" delay={0.08}>
          <h2 id="nsf-heading" className="nsf-title">
            {FEATURED_META.title}
          </h2>
        </Reveal>

        <div className="nsf-overview">
          <div className="nsf-overview-text">
            <Reveal variant="left">
              <h3 className="nsf-project-name">{FEATURED.name}</h3>
            </Reveal>
            <Reveal variant="left" delay={0.1}>
              <p className="nsf-desc">{FEATURED.description}</p>
            </Reveal>
            <div className="nsf-stats">
              {FEATURED.stats.map((stat, i) => (
                <Reveal key={stat.label} variant="scale" delay={0.15 + i * 0.1}>
                  <div className="nsf-stat">
                    <span className="nsf-stat-value">{stat.value}</span>
                    <StatLabel label={stat.label} />
                  </div>
                </Reveal>
              ))}
              <Reveal variant="fade" delay={0.45}>
                <div className="team-members">
                  {FEATURED.team.map((member) => (
                    <img
                      key={member.alt}
                      src={member.src}
                      alt={member.alt}
                      className="icon achv-member"
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal variant="right" delay={0.12} className="nsf-image-wrap">
            <div className="nsf-image-wrap-inner">
              <img src={FEATURED.image} alt={FEATURED.imageAlt} />
            </div>
          </Reveal>
        </div>

        <div className="nsf-achievements">
          <Reveal variant="left">
            <h3 className="nsf-achievements-title">{FEATURED.achievementsHeading}</h3>
          </Reveal>
          <Reveal variant="fade" delay={0.12}>
            <div
              className={`nsf-marquee${paused ? ' nsf-paused' : ''}`}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
              <div className="nsf-track">
                {[false, true].map((duplicate) =>
                  FEATURED.achievements.map((item) => (
                    <article
                      key={`${item.title}${duplicate ? '-dup' : ''}`}
                      className="nsf-card"
                      aria-hidden={duplicate}
                    >
                      <h4 className="nsf-card-title">{item.title}</h4>
                      <CardText text={item.text} />
                    </article>
                  )),
                )}
              </div>
            </div>
          </Reveal>
          <p className="nsf-hint">Hover or hold a card to pause and read</p>
        </div>
      </section>

      <div className="movie-quote" aria-hidden="true">
        <div className="quote-mark">“</div>
        <div className="quote-part1">{QUOTE_BLOCK.part1}</div>
        <div className="quote-part2">{QUOTE_BLOCK.part2}</div>
        <div className="quote-part3">{QUOTE_BLOCK.part3}</div>
        <div className="quote-author">{QUOTE_BLOCK.author}</div>
      </div>
    </>
  );
}
