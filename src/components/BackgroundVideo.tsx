import './hero.css';

/**
 * Full-viewport background video layer behind the hero, feathered to white.
 * Drop your own loops at public/assets/background-video.mp4 (desktop) and
 * public/assets/background-video-mobile.mp4 (mobile); until then the layer
 * renders as a transparent feather over the grid canvas.
 */
export default function BackgroundVideo() {
  return (
    <div className="background-video" aria-hidden="true">
      <video autoPlay muted loop playsInline className="bg-video desktop-bg">
        <source src="/assets/background-video.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop playsInline className="bg-video mobile-bg">
        <source src="/assets/background-video-mobile.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
