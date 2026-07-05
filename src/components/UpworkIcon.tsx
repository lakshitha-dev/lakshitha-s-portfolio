import type { CSSProperties } from 'react';
import { siUpwork } from 'simple-icons';

export function UpworkIcon({
  size = 16,
  className = '',
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d={siUpwork.path} />
    </svg>
  );
}
