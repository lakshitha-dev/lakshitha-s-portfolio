import './affectdemo.css';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Brain,
  CircleCheck,
  CirclePlay,
  Lightbulb,
  ListOrdered,
  Pause,
  Play,
  RefreshCw,
  ScanFace,
  ShieldCheck,
  SkipForward,
  Zap,
} from 'lucide-react';
import { useInView, useReducedMotion } from 'motion/react';
import { AFFECT_DEMO, type DemoState } from '../data';

const HELP_ICONS: Record<Exclude<DemoState, 'focused'>, LucideIcon[]> = {
  confused: [Lightbulb, ListOrdered, RefreshCw, CirclePlay],
  bored: [Zap, SkipForward],
};

/** Delay between pipeline stages lighting up, in ms. */
const STEP_MS = 280;
/** Stages before the help card: signals, detection, gate, agent. */
const STAGES = 4;
/** How long each beat of the script stays on screen. */
const BEAT_MS = 4300;
/** The learner's response button is "pressed" this long before the next beat. */
const PRESS_LEAD_MS = 650;
/** Frame shown when motion is reduced: confused, gate passed, first hint. */
const STATIC_BEAT = 1;

const SCRIPT = AFFECT_DEMO.script;

/**
 * Self-playing AffectLearn learner cycle. Plays a scripted session in a loop:
 * each beat lights the pipeline stage by stage, shows the help card, then
 * "presses" the learner's response that leads to the next beat. Pauses when
 * off screen, on hover, when the tab is hidden, or via the Pause button;
 * static under reduced motion.
 */
export default function AffectLearnDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const seen = useInView(rootRef, { once: true, amount: 0.35 });
  const visible = useInView(rootRef, { amount: 0.2 });
  const reduced = useReducedMotion();
  const [beat, setBeat] = useState(0);
  const [phase, setPhase] = useState(0);
  const [pressing, setPressing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [docHidden, setDocHidden] = useState(false);

  const playing = !reduced && seen && visible && !hovered && !paused && !docHidden;
  const index = reduced ? STATIC_BEAT : beat;
  const current = SCRIPT[index];

  useEffect(() => {
    const onVisibility = () => setDocHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Light the pipeline stage by stage for every new beat.
  useEffect(() => {
    if (reduced) {
      setPhase(STAGES + 1);
      return;
    }
    if (!seen) return;
    setPhase(0);
    const timers = Array.from({ length: STAGES + 1 }, (_, i) =>
      window.setTimeout(() => setPhase(i + 1), (i + 1) * STEP_MS),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [beat, seen, reduced]);

  // Advance the script while playing; press the learner's response first.
  useEffect(() => {
    setPressing(false);
    if (!playing) return;
    const timers: number[] = [];
    if (SCRIPT[beat].press) {
      timers.push(window.setTimeout(() => setPressing(true), BEAT_MS - PRESS_LEAD_MS));
    }
    timers.push(window.setTimeout(() => setBeat((b) => (b + 1) % SCRIPT.length), BEAT_MS));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [beat, playing]);

  const { state, level, confidence, press } = current;
  const ladder = state === 'focused' ? [] : AFFECT_DEMO.ladders[state];
  const help = ladder[level];
  const HelpIcon = state === 'focused' ? CircleCheck : HELP_ICONS[state][level];
  const aboveFloor = confidence >= AFFECT_DEMO.floor;
  const meterStyle = {
    '--fill': phase > 1 ? confidence : 0,
    '--floor': AFFECT_DEMO.floor,
  } as CSSProperties;

  const stages = [
    { key: 'signals', Icon: ScanFace, title: 'Signals', tone: 'on' },
    { key: 'detect', Icon: Activity, title: 'Affect detection', tone: 'on' },
    { key: 'gate', Icon: ShieldCheck, title: 'Adaptation gate', tone: help ? 'pass' : 'hold' },
    { key: 'agent', Icon: Brain, title: 'Pedagogical agent', tone: help ? 'on' : 'off' },
  ];

  return (
    <div
      className={`ald${playing ? ' is-playing' : ''}`}
      style={{ '--beat': `${BEAT_MS}ms` } as CSSProperties}
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="ald-sr">{AFFECT_DEMO.summary}</p>

      <div className="ald-head">
        <p className="ald-title">{AFFECT_DEMO.title}</p>
        {!reduced && (
          <button
            type="button"
            className="ald-toggle"
            aria-label={paused ? 'Play animation' : 'Pause animation'}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          </button>
        )}
      </div>

      <div className="ald-track" aria-hidden="true">
        <div className="ald-states">
          {AFFECT_DEMO.states.map((s) => (
            <span key={s.id} className={`ald-state${state === s.id ? ' is-active' : ''}`}>
              {s.label}
            </span>
          ))}
        </div>
        <div className="ald-progress">
          {SCRIPT.map((step, i) => (
            <span
              key={`${step.state}-${step.level}-${i}`}
              className={i < index ? 'is-done' : i === index ? 'is-current' : ''}
            >
              {/* Remounts per beat and on pause/resume, matching the beat timer restart. */}
              {i === index && !reduced && <i key={`${beat}-${playing}`} />}
            </span>
          ))}
        </div>
      </div>

      <ol className="ald-flow" aria-hidden="true">
        {stages.map(({ key, Icon, title, tone }, i) => (
          <li key={key} className={`ald-stage tone-${tone}${phase > i ? ' is-lit' : ''}`}>
            <span className="ald-stage-icon">
              <Icon size={18} aria-hidden="true" />
            </span>
            <span className="ald-stage-text">
              <span className="ald-stage-title">{title}</span>
              {key === 'signals' && <span className="ald-stage-detail">{AFFECT_DEMO.signals}</span>}
              {key === 'detect' && (
                <>
                  <span className="ald-chip">{AFFECT_DEMO.detection[state]}</span>
                  <span className={`ald-meter${aboveFloor ? ' is-above' : ''}`} style={meterStyle}>
                    <span className="ald-meter-bar">
                      <span className="ald-meter-fill" />
                      <span className="ald-meter-floor" />
                    </span>
                    <span className="ald-meter-text">
                      {confidence.toFixed(2)} <span>floor {AFFECT_DEMO.floor.toFixed(2)}</span>
                    </span>
                  </span>
                </>
              )}
              {key === 'gate' && <span className="ald-chip">{help ? 'passed' : 'held back'}</span>}
              {key === 'agent' && (
                <span className="ald-stage-detail">{help ? help.agent : 'not needed this cycle'}</span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <div
        className={`ald-card${phase > STAGES ? ' is-lit' : ''}${help ? '' : ' is-quiet'}`}
        aria-hidden="true"
      >
        <div className="ald-card-head">
          <span className="ald-card-icon">
            <HelpIcon size={20} aria-hidden="true" />
          </span>
          <div>
            <p className="ald-card-title">{help ? help.title : AFFECT_DEMO.focusedCard.title}</p>
            <p className="ald-card-text">{help ? help.text : AFFECT_DEMO.focusedCard.text}</p>
          </div>
        </div>

        {help && state !== 'focused' && (
          <>
            <div className="ald-ladder">
              {ladder.map((step, i) => (
                <span key={step.title} className={i <= level ? 'is-on' : ''} />
              ))}
            </div>
            <div className="ald-actions">
              <span
                className={`ald-btn ald-btn-dark${pressing && press === 'advance' ? ' is-pressing' : ''}${
                  level >= ladder.length - 1 ? ' is-disabled' : ''
                }`}
              >
                {AFFECT_DEMO.advanceLabel[state]}
              </span>
              <span className={`ald-btn${pressing && press === 'resolve' ? ' is-pressing' : ''}`}>
                {AFFECT_DEMO.resolveLabel}
              </span>
            </div>
          </>
        )}
      </div>

      <p className="ald-note">{AFFECT_DEMO.note}</p>
    </div>
  );
}
