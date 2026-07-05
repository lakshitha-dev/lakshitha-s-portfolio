interface PhotoPileProps {
  photos: { src: string; alt: string; tall?: boolean }[];
}

/**
 * Two-row photo collage: equal-height tiles filled column by column,
 * photos crop-fitted with object-fit cover; `tall` photos span both
 * rows — matching the reference's memories grid.
 */
export default function PhotoPile({ photos }: PhotoPileProps) {
  return (
    <div className="photo-collage">
      {photos.map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className={`collage-item${photo.tall ? ' tall' : ''}`}
          loading="lazy"
          draggable={false}
        />
      ))}
    </div>
  );
}
