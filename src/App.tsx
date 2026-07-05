import GridCanvas from './components/GridCanvas';
import HeroBackdrop from './components/HeroBackdrop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Writing from './components/Writing';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Milestones from './components/Milestones';
import VelocityBanner from './components/VelocityBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import { useMediumArticles } from './hooks/useMediumArticles';

/**
 * Approximation of the reference's runtime-injected #frosted SVG backdrop
 * filter. Browsers that don't support url() backdrop-filters fall back to
 * the blur(20px) saturate(180%) declaration that precedes it in the CSS.
 */
function FrostedFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter id="frosted">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
      </filter>
    </svg>
  );
}

export default function App() {
  const { articles, loading } = useMediumArticles();

  // Deep links (/#projects etc.): the browser's fragment jump fires
  // before React renders, so re-run it once sections exist.
  useEffect(() => {
    const { hash } = window.location;
    if (hash.length > 1) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
      }, 150);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <FrostedFilter />
      <Preloader />
      <GridCanvas />
      <HeroBackdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Writing articles={articles} loading={loading} />
        <FeaturedProject />
        <Projects />
        <Certifications />
        <Milestones />
        <VelocityBanner />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
