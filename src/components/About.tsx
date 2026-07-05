import './about.css';
import { ABOUT } from '../data';
import Slogan from './Slogan';

/** About: grayscale portrait + two "interstellar" info cards + short bio. */
export default function About() {
  return (
    <section id="about">
      <p className="section-text-p1">{ABOUT.eyebrow}</p>
      <h1 className="title about-title">{ABOUT.title}</h1>
      <div className="section-container">
        <div className="section-pic-container">
          <img src={ABOUT.image} alt={ABOUT.imageAlt} className="about-pic" />
        </div>
        <div className="about-detailes-container">
          <div className="cards-container">
            {ABOUT.cards.map((card) => (
              <div key={card.heading} className="interstellar-card">
                <div className="corner-dots top-left" />
                <div className="corner-dots top-right" />
                <div className="corner-dots bottom-left" />
                <div className="corner-dots bottom-right" />
                <div className="card-content">
                  <img className="card-background" src={card.logo.src} alt="" aria-hidden="true" />
                  <h2 className="card-title">{card.heading}</h2>
                  <div className="card-text">
                    {card.lines.map((line) => (
                      <p key={line.text} className={line.highlight ? 'highlight' : undefined}>
                        {line.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-container">
            {ABOUT.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <Slogan />
        </div>
      </div>
    </section>
  );
}
