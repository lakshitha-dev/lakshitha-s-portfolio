import {
  siJavascript,
  siTypescript,
  siPython,
  siOpenjdk,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siSpring,
  siDotnet,
  siFastapi,
  siFlutter,
  siTailwindcss,
  siDocker,
  siPostgresql,
  siGit,
  siFirebase,
  siFlask,
  siMysql,
  siSupabase,
  siJenkins,
  siCloudflare,
  siN8n,
  siLangchain,
  siGithub,
  siQdrant,
  siGithubactions,
  siApachekafka,
  siGooglegemini,
  siMedium,
} from 'simple-icons';

const ICONS = {
  javascript: siJavascript,
  typescript: siTypescript,
  python: siPython,
  openjdk: siOpenjdk,
  react: siReact,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  spring: siSpring,
  dotnet: siDotnet,
  fastapi: siFastapi,
  flutter: siFlutter,
  tailwindcss: siTailwindcss,
  docker: siDocker,
  postgresql: siPostgresql,
  git: siGit,
  firebase: siFirebase,
  flask: siFlask,
  mysql: siMysql,
  supabase: siSupabase,
  jenkins: siJenkins,
  cloudflare: siCloudflare,
  n8n: siN8n,
  langchain: siLangchain,
  github: siGithub,
  qdrant: siQdrant,
  githubactions: siGithubactions,
  apachekafka: siApachekafka,
  googlegemini: siGooglegemini,
  medium: siMedium,
} as const;

export type TechIconSlug = keyof typeof ICONS;

interface TechIconProps {
  slug: TechIconSlug;
  title: string;
  className?: string;
}

export function TechIcon({ slug, title, className = '' }: TechIconProps) {
  const icon = ICONS[slug];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
