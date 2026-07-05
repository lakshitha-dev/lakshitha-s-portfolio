import './slogan.css';
import { SLOGAN } from '../data';

/**
 * Decorative typographic slogan (serif words + rotated script word).
 * Rendered as the last child of the About details column, per the
 * reference layout.
 */
export default function Slogan() {
  return (
    <div className="quote" aria-hidden="true">
      <h1 className="imagine">{SLOGAN.serifWords}</h1>
      <h1 className="achieve">{SLOGAN.scriptWord}</h1>
    </div>
  );
}
