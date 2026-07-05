import './writing.css';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Globe, BookOpen } from 'lucide-react';
import type { MediumArticle } from '../data';
import { SITE, WRITING_META } from '../data';

interface WritingProps {
  articles: MediumArticle[];
  loading: boolean;
}

function formatDate(pubDate: string): string {
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime())
    ? pubDate
    : d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/** Writing: Medium articles in a publications-style horizontal slider. */
export default function Writing({ articles, loading }: WritingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const container = scrollRef.current;
    if (!container) return 0;
    const card = container.querySelector<HTMLElement>('.publication-card');
    return card ? card.offsetWidth + 8 : 558;
  };

  // Keep the active bubble in sync with real scroll position (swipes too).
  const onScroll = () => {
    const container = scrollRef.current;
    const step = cardStep();
    if (!container || step === 0) return;
    const index = Math.round(container.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), Math.max(articles.length - 1, 0)));
  };

  const slide = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const jumpTo = (index: number) => {
    scrollRef.current?.scrollTo({ left: index * cardStep(), behavior: 'smooth' });
  };

  return (
    <section id="writing">
      <p className="section-text-p1">{WRITING_META.eyebrow}</p>
      <h1 className="title">{WRITING_META.title}</h1>

      <div className="publications-wrapper">
        <div style={{ position: 'relative' }}>
          <button
            id="publicationSlideLeft"
            className="btn2 btn-color-1 leftbtn publications-nav-btn left"
            type="button"
            aria-label="Previous article"
            disabled={active === 0}
            onClick={() => slide(-1)}
          >
            <ArrowLeft className="icon" aria-hidden="true" />
          </button>

          <div
            id="publicationsContainer"
            className="publications-scroll-container"
            ref={scrollRef}
            onScroll={onScroll}
          >
            <div className="publications-container">
              {loading &&
                Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="publication-card skeleton" aria-hidden="true" />
                ))}

              {!loading &&
                articles.map((article) => (
                  <div key={article.link} className="publication-card">
                    <div className="publication-main">
                      {article.thumbnail && (
                        <a
                          className="paper-preview"
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <img src={article.thumbnail} alt="" loading="lazy" />
                        </a>
                      )}
                      <div className="publication-info">
                        <div className="publication-header">
                          <h3 className="publication-title">{article.title}</h3>
                          <div className="venue-wrapper">
                            <p className="publication-venue">Published on Medium</p>
                          </div>
                          <div className="publication-metadata">
                            <div className="publication-date">
                              <Calendar aria-hidden="true" />
                              <span>{formatDate(article.pubDate)}</span>
                            </div>
                            <div className="publication-venue-info">
                              <Globe aria-hidden="true" />
                              <span>medium.com/@{'lakshithaa'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="publication-abstract">
                          <h4>Summary</h4>
                          <div className="abstract-text">{article.description}</div>
                        </div>
                      </div>
                    </div>

                    {article.categories.length > 0 && (
                      <div className="coauthors-section">
                        <h4>Topics</h4>
                        <div className="coauthors-grid">
                          {article.categories.map((cat) => (
                            <div key={cat} className="coauthor-item">
                              <div className="coauthor-name">{cat}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="publication-actions">
                      <a
                        href={article.link}
                        className="paper-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen aria-hidden="true" />
                        <span>Read Article</span>
                      </a>
                    </div>
                  </div>
                ))}

              {!loading && articles.length === 0 && (
                <div className="publication-card">
                  <div className="publication-main">
                    <div className="publication-info">
                      <div className="publication-header">
                        <h3 className="publication-title">Articles live on Medium</h3>
                      </div>
                      <div className="publication-abstract">
                        <h4>Summary</h4>
                        <div className="abstract-text">
                          Short technical pieces on engineering, AI agents, and automation.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="publication-actions">
                    <a
                      href={SITE.medium}
                      className="paper-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen aria-hidden="true" />
                      <span>{WRITING_META.ctaLabel}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            id="publicationSlideRight"
            className="btn2 btn-color-1 rightbtn publications-nav-btn right"
            type="button"
            aria-label="Next article"
            disabled={articles.length === 0 || active >= articles.length - 1}
            onClick={() => slide(1)}
          >
            <ArrowRight className="icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      {articles.length > 1 && (
        <div className="project-bubble-indicators">
          {articles.map((article, i) => (
            <button
              key={article.link}
              type="button"
              className={`project-bubble${i === active ? ' active' : ''}`}
              aria-label={`Go to article ${i + 1}`}
              onClick={() => jumpTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
