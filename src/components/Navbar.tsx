import './navbar.css';
import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, SITE } from '../data';
import logo from '../assets/logo.svg';

/**
 * Dual navbar: fixed frosted-glass pill on desktop (>1280px, hides on
 * scroll-down) and an in-flow bar with a spring dropdown on mobile.
 */
export default function Navbar() {
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hide when scrolling down past the bar; show on scroll-up or near top.
      setNavHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <nav id="desktop-nav" className={`desktop-nav${navHidden ? ' nav-hidden' : ''}`} aria-label="Main navigation">
        <div className="logo" id="logo">
          <img src={logo} alt="" className="logo-img" />
          <h1>{SITE.firstName}</h1>
        </div>
        <div>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav" aria-label="Mobile navigation">
        <div className="hamburger-logo">
          <img
            src={logo}
            alt="Scroll to top"
            className="logo-img-mobile"
            onClick={scrollTop}
          />
          <div className="logo">{SITE.firstName}</div>
        </div>
        <div className="hamburger-menu">
          <button
            type="button"
            className={`hamburger-icon${menuOpen ? ' open' : ''}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ border: '1px solid hsla(0,0%,100%,.3)' }}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`menu-links${menuOpen ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
