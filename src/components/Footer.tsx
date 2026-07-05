import './contact.css';
import { NAV_LINKS, SITE } from '../data';

/** Morse for S T A Y — revealed on hover inside the STAY button. */
const STAY_MORSE = '... - .- -.--';

const BLUR_LAYERS = [
  { mask: 'linear-gradient(to bottom, transparent 0%, black 16.7%, black 33.3%, transparent 50%)', blur: '0.230rem' },
  { mask: 'linear-gradient(to bottom, transparent 16.7%, black 33.3%, black 50%, transparent 66.7%)', blur: '0.385rem' },
  { mask: 'linear-gradient(to bottom, transparent 33.3%, black 50%, black 66.7%, transparent 83.3%)', blur: '0.750rem' },
  { mask: 'linear-gradient(to bottom, transparent 50%, black 66.7%, black 83.3%, transparent 100%)', blur: '1.462rem' },
  { mask: 'linear-gradient(to bottom, transparent 66.7%, black 83.3%, black 100%)', blur: '2.443rem' },
  { mask: 'linear-gradient(to bottom, transparent 83.3%, black 100%)', blur: '3.000rem' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer>
        <div className="footer-button-container">
          <button className="stay-top-btn" type="button" onClick={scrollTop} aria-label="Scroll to top">
            <div className="stay-btn-content">
              <span className="stay-text">S T A Y</span>
              <div className="morse-code">{STAY_MORSE}</div>
            </div>
          </button>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p>
          Copyright © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </p>
      </footer>

      {/* Progressive-blur strip pinned to the viewport bottom */}
      <div
        className="gradual-blur gradual-blur-page"
        aria-hidden="true"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          opacity: 1,
          transition: 'opacity 0.1s ease-out',
          zIndex: 1100,
          height: '3rem',
          width: '100%',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div className="gradual-blur-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
          {BLUR_LAYERS.map((layer) => (
            <div
              key={layer.blur}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 1,
                maskImage: layer.mask,
                WebkitMaskImage: layer.mask,
                backdropFilter: `blur(${layer.blur})`,
                WebkitBackdropFilter: `blur(${layer.blur})`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
