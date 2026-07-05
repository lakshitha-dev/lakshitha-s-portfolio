import './hero.css';
import { Github, Linkedin, BookOpen } from 'lucide-react';
import { HERO, SITE } from '../data';
import { UpworkIcon } from './UpworkIcon';

const SOCIALS = [
  { id: 'github-btn', label: 'GitHub', href: SITE.github, Icon: Github },
  { id: 'linkedin-btn', label: 'LinkedIn', href: SITE.linkedin, Icon: Linkedin },
  { id: 'medium-btn', label: 'Medium', href: SITE.medium, Icon: BookOpen },
] as const;

/**
 * Hero: name + role text block pinned top-right over the background layer,
 * with the CTA/social row pushed to the lower viewport. No hero photo —
 * mirrors the reference layout.
 */
export default function Hero() {
  return (
    <section id="profile">
      <div className="section-container profile-section">
        <div className="section-text profile-text">
          <h1 className="name">{HERO.name}</h1>
          <p className="section-text-p2">{HERO.roleLine}</p>
          {HERO.affiliations.map((aff, i) => (
            <div key={aff.text} className={`inline-container${i === 1 ? ' inline-2' : ''}`}>
              <img className="uni-logo" src={aff.logo} alt={aff.logoAlt} />
              <p className="section-text-p4">{aff.text}</p>
            </div>
          ))}
        </div>

        <div className="slogan-inline-btn">
          <div className="inline-btn-social-container">
            <div className="btn-container">
              {HERO.buttons.map((btn) =>
                btn.download ? (
                  <a key={btn.label} className="btn btn-color-1" href={btn.href} download>
                    {btn.label}
                  </a>
                ) : (
                  <a key={btn.label} className="btn btn-color-1" href={btn.href}>
                    {btn.label}
                  </a>
                ),
              )}
            </div>

            <div id="social-container">
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
                    <Icon size={24} aria-hidden="true" />
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
                  <UpworkIcon size={24} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
