import './projects.css';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Github, CirclePlay, MoveRight } from 'lucide-react';
import type { Project } from '../data';
import { PROJECTS, PROJECTS_META } from '../data';
import type { TechIconSlug } from './TechIcon';
import { TechIcon } from './TechIcon';

const CHIP_VARIANT: Record<string, string> = {
  AI: 'ai-ml',
  Web: 'fullstack',
  Mobile: 'backend',
};

const TAG_SLUGS: Record<string, TechIconSlug> = {
  Python: 'python',
  FastAPI: 'fastapi',
  LangChain: 'langchain',
  n8n: 'n8n',
  React: 'react',
  'ASP.NET Core': 'dotnet',
  Flutter: 'flutter',
  Firebase: 'firebase',
  TypeScript: 'typescript',
  'Tailwind CSS': 'tailwindcss',
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`details-container color-container${expanded ? ' expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((v) => !v)}
    >
      <span className={`domain-chip ${CHIP_VARIANT[project.category] ?? ''}`}>
        {project.category === 'AI' ? 'AI/ML' : project.category === 'Web' ? 'Full Stack' : project.category}
      </span>
      <div className="info">
        <div className="info1">
          <div className="article-container">
            <img src={project.image} alt={project.title} className="project-img" />
          </div>
        </div>
        <div className="info2">
          <h3>Project Description</h3>
          <p>{project.description}</p>
        </div>
      </div>
      <h3 className="experience-subtitle project-title">{project.title}</h3>
      <div className="btn-container">
        {project.confidential ? (
          <button className="project-icon-btn" disabled title="Confidential project" type="button">
            <Github aria-hidden="true" />
          </button>
        ) : (
          <>
            {project.repoUrl !== '#' && (
              <a
                className="project-icon-btn"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                aria-label={`${project.title} on GitHub`}
              >
                <Github aria-hidden="true" />
              </a>
            )}
            {project.liveUrl !== '#' && (
              <a
                className="project-icon-btn"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                aria-label={`${project.title} live demo`}
              >
                <CirclePlay aria-hidden="true" />
              </a>
            )}
          </>
        )}
      </div>
      <div className="tech-stack">
        <div className="iconss">
          {project.tags.map((tag) =>
            TAG_SLUGS[tag] ? (
              <TechIcon key={tag} slug={TAG_SLUGS[tag]} title={tag} className="tech-mini-icon" />
            ) : (
              <span key={tag} className="tech-mini-chip">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/** Projects: hidden-scrollbar card carousel with arrows + bubble pagination. */
export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>('.details-container');
    return card ? card.offsetWidth + 16 : 480;
  };

  // Sync active bubble/arrows with real scroll position (incl. swipes).
  const onScroll = () => {
    const track = trackRef.current;
    const step = cardStep();
    if (!track || step === 0) return;
    const index = Math.round(track.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), PROJECTS.length - 1));
  };

  const slide = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const jumpTo = (index: number) => {
    trackRef.current?.scrollTo({ left: index * cardStep(), behavior: 'smooth' });
  };

  return (
    <section id="projects">
      <p className="section-text-p1">{PROJECTS_META.eyebrow}</p>
      <h1 className="title">{PROJECTS_META.title}</h1>

      <div className="experience-details-container-project">
        <button
          id="slideLeft"
          className="btn2 btn-color-1 leftbtn"
          type="button"
          aria-label="Previous project"
          disabled={active === 0}
          onClick={() => slide(-1)}
        >
          <ArrowLeft className="icon" aria-hidden="true" />
        </button>

        <div id="container" className="about-containers2" ref={trackRef} onScroll={onScroll}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <button
          id="slideRight"
          className="btn2 btn-color-1 rightbtn"
          type="button"
          aria-label="Next project"
          disabled={active >= PROJECTS.length - 1}
          onClick={() => slide(1)}
        >
          <ArrowRight className="icon" aria-hidden="true" />
        </button>

        <div className="swipe-hint" aria-hidden="true">
          Swipe to explore <MoveRight />
        </div>
      </div>

      <div className="project-bubble-indicators">
        {PROJECTS.map((project, i) => (
          <button
            key={project.id}
            type="button"
            className={`project-bubble${i === active ? ' active' : ''}`}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => jumpTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
