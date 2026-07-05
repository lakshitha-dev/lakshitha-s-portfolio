import './contact.css';
import { Mail, Linkedin, Github, BookOpen, MapPin } from 'lucide-react';
import { CONTACT_META, SITE } from '../data';
import { UpworkIcon } from './UpworkIcon';

const CONTACT_ITEMS = [
  {
    label: 'Email',
    text: SITE.email,
    href: `mailto:${SITE.email}`,
    Icon: Mail,
  },
  {
    label: 'Upwork',
    text: 'Hire me on Upwork',
    href: SITE.upwork,
    Icon: UpworkIcon,
    color: '#14a800',
  },
  {
    label: 'LinkedIn',
    text: 'Connect with me',
    href: SITE.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    text: 'mlswijerathne',
    href: SITE.github,
    Icon: Github,
  },
  {
    label: 'Medium',
    text: '@lakshithaa',
    href: SITE.medium,
    Icon: BookOpen,
  },
];

/** Contact: glass split panel — info items left, location + map right. */
export default function Contact() {
  return (
    <section id="contact">
      <p className="section-text-p1">{CONTACT_META.eyebrow}</p>
      <h1 className="title">{CONTACT_META.title}</h1>
      <div className="contact-split-container">
        <div className="contact-left-panel">
          <div className="contact-info-list">
            {CONTACT_ITEMS.map(({ label, text, href, Icon, color }) => (
              <div key={label} className="contact-info-item">
                <Icon
                  className="contact-item-icon"
                  aria-hidden="true"
                  style={color ? { color } : undefined}
                />
                <div className="contact-item-text">
                  <span className="contact-label">{label}</span>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    {text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-right-panel">
          <div className="location-info">
            <div className="location-text">
              <MapPin className="location-icon" aria-hidden="true" />
              <div>
                <p className="location-city">Colombo, Sri Lanka</p>
                <p className="location-subtitle">Based in</p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Colombo,+Sri+Lanka&z=11&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Map of Colombo, Sri Lanka"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
