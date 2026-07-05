import './certifications.css';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Medal, ExternalLink, Trophy } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS, CERTIFICATIONS_META } from '../data';

/** Achievements & certifications: white-card carousel; photo cards first. */
export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const totalCards = ACHIEVEMENTS.length + CERTIFICATIONS.length;

  const cardStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>('.achievement-container');
    return card ? card.offsetWidth + 16 : 700;
  };

  // Sync active bubble/arrows with real scroll position (incl. swipes).
  const onScroll = () => {
    const track = trackRef.current;
    const step = cardStep();
    if (!track || step === 0) return;
    const index = Math.round(track.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), totalCards - 1));
  };

  const slide = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const jumpTo = (index: number) => {
    trackRef.current?.scrollTo({ left: index * cardStep(), behavior: 'smooth' });
  };

  return (
    <section id="certifications">
      <p className="section-text-p1">{CERTIFICATIONS_META.eyebrow}</p>
      <h1 className="title">{CERTIFICATIONS_META.title}</h1>

      <div className="experience-details-container-project">
        <button
          id="slideLeft2"
          className="btn2 btn-color-1 leftbtn"
          type="button"
          aria-label="Previous achievement"
          disabled={active === 0}
          onClick={() => slide(-1)}
        >
          <ArrowLeft className="icon" aria-hidden="true" />
        </button>

        <div id="container2" className="about-containers2" ref={trackRef} onScroll={onScroll}>
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement.id} className="achievement-container">
              <div className="achv-photo-container">
                <img
                  src={achievement.images[0].src}
                  alt={achievement.images[0].alt}
                  className="achv-photo achv-photo-img"
                />
              </div>
              <div className="achv-details">
                <div className="place-container">
                  <Trophy className="medal-icon" aria-hidden="true" />
                  <h3 className="experience-subtitle achv-title">{achievement.place}</h3>
                </div>
                <h3 className="experience-subtitle achv-title wrap-title">{achievement.title}</h3>
                <p className="cert-date">{achievement.organizer}</p>
                <div className="text-container achv-text">
                  <p className="achv-desc">{achievement.description}</p>
                </div>
                {achievement.images[1] && (
                  <img
                    src={achievement.images[1].src}
                    alt={achievement.images[1].alt}
                    className="achv-secondary-photo"
                  />
                )}
              </div>
            </div>
          ))}

          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="achievement-container">
              <div className="achv-photo-container">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="achv-photo achv-photo-img"
                  />
                ) : (
                  <div className="achv-photo" aria-hidden="true">
                    <Award size={72} strokeWidth={1.2} />
                  </div>
                )}
              </div>
              <div className="achv-details">
                <div className="place-container">
                  <Medal className="medal-icon" aria-hidden="true" />
                  <h3 className="experience-subtitle achv-title">{cert.issuer}</h3>
                </div>
                <h3 className="experience-subtitle achv-title wrap-title">{cert.title}</h3>
                <p className="cert-date">
                  {cert.issueDate}
                  {cert.expiryDate ? ` — ${cert.expiryDate}` : ''}
                </p>
                <div className="cert-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  className="achievement-icon-btn"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink aria-hidden="true" />
                  <span>View Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          id="slideRight2"
          className="btn2 btn-color-1 rightbtn"
          type="button"
          aria-label="Next achievement"
          disabled={active >= totalCards - 1}
          onClick={() => slide(1)}
        >
          <ArrowRight className="icon" aria-hidden="true" />
        </button>
      </div>

      <div className="project-bubble-indicators">
        {Array.from({ length: totalCards }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`project-bubble${i === active ? ' active' : ''}`}
            aria-label={`Go to achievement ${i + 1}`}
            onClick={() => jumpTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
