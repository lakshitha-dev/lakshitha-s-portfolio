import type { MemoryPhoto } from '../data';

interface PhotoPileProps {
  photos: MemoryPhoto[];
}

/**
 * Photo collage: every photo is placed in a named grid area, and each
 * breakpoint's grid-template-areas (experience.css) tiles them into a
 * full rectangle, so no empty cells appear at any width.
 */
export default function PhotoPile({ photos }: PhotoPileProps) {
  return (
    <div className="photo-collage">
      {photos.map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="collage-item"
          style={{ gridArea: photo.area, objectPosition: photo.focus }}
          loading="lazy"
          draggable={false}
        />
      ))}
    </div>
  );
}
