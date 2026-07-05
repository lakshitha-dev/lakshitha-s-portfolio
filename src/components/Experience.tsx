import './experience.css';
import type { ReactNode } from 'react';
import { Building2, MapPin, Calendar, Bot, Code2 } from 'lucide-react';
import type { Experience as ExperienceItem } from '../data';
import { BISTEC_MEMORIES, EXPERIENCE_META, EXPERIENCES, LOGOS } from '../data';
import { Reveal } from './Reveal';
import PhotoPile from './PhotoPile';
import { TechIcon } from './TechIcon';
import { UpworkIcon } from './UpworkIcon';

/** Split a role description into bullet sentences. */
function toBullets(description: string): string[] {
  return description
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

interface EmployerCard {
  company: string;
  jobTitle: string;
  location: string;
  period: string;
  logo?: string;
  roles: { exp: ExperienceItem; icon: ReactNode }[];
}

const bistec = EXPERIENCES.filter((e) => e.company === 'BISTEC Global Services');
const independent = EXPERIENCES.filter((e) => e.company !== 'BISTEC Global Services');

const EMPLOYERS: EmployerCard[] = [
  {
    company: 'BISTEC Global Services',
    jobTitle: bistec[0]?.role ?? '',
    location: 'Colombo, Sri Lanka',
    period: 'Aug 2025 — Present',
    logo: LOGOS.bistec,
    roles: bistec.map((exp, i) => ({
      exp,
      icon: i === 0 ? <Bot aria-hidden="true" /> : <Code2 aria-hidden="true" />,
    })),
  },
  {
    company: 'Freelance & Writing',
    jobTitle: 'AI Agent Developer · Technical Writer',
    location: 'Remote',
    period: 'Mar 2025 — Present',
    roles: independent.map((exp) => ({
      exp,
      icon:
        exp.company === 'Upwork' ? (
          <UpworkIcon size={20} style={{ color: '#14a800' }} />
        ) : (
          <TechIcon slug="medium" title="Medium" />
        ),
    })),
  },
];

/** Professional experience: white employer cards with role sub-cards. */
export default function Experience() {
  return (
    <section id="experience">
      <p className="section-text-p1">{EXPERIENCE_META.eyebrow}</p>
      <h1 className="title">{EXPERIENCE_META.title}</h1>

      {EMPLOYERS.map((employer) => (
        <Reveal key={employer.company} variant="fade">
          <div className="experience-container">
            <div className="experience-header">
              <div className="company-info">
                <div className="company-logo" aria-hidden="true">
                  {employer.logo ? (
                    <img src={employer.logo} alt="" />
                  ) : (
                    <Building2 size={34} strokeWidth={1.5} />
                  )}
                </div>
                <div className="company-details">
                  <h3>{employer.company}</h3>
                  <p className="job-title">{employer.jobTitle}</p>
                  <div className="job-meta">
                    <span>
                      <MapPin aria-hidden="true" />
                      {employer.location}
                    </span>
                    <span>
                      <Calendar aria-hidden="true" />
                      {employer.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-content">
              <div className="projects-row">
                {employer.roles.map(({ exp, icon }) => (
                  <div key={exp.id} className="project-section">
                    <div className="project-header">
                      <div className="project-icon">{icon}</div>
                      <div className="project-title-container">
                        <h4 className="project-title-experience">
                          {exp.role}
                          {exp.company !== employer.company && ` — ${exp.company}`}
                        </h4>
                        <p className="project-period">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="project-description">
                      {toBullets(exp.description).map((bullet) => (
                        <li key={bullet.slice(0, 24)}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {employer.company === 'BISTEC Global Services' && (
                <div style={{ position: 'relative', marginTop: '2rem' }}>
                  <PhotoPile photos={BISTEC_MEMORIES} />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
