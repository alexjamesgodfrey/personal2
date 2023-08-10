export enum Teks {
  'TypeScript' = 'TypeScript',
  'JavaScript' = 'JavaScript',
  'Next' = 'Next',
  'React' = 'React',
  'Node' = 'Node',
  'PostgreSQL' = 'PostgreSQL',
  'GraphQL' = 'GraphQL',
  'Express' = 'Express',
  'Prisma' = 'Prisma',
  'AWS' = 'AWS',
  'GCP' = 'GCP',
  'Azure' = 'Azure',
  'Tailwind' = 'Tailwind',
  'Bootstrap' = 'Bootstrap',
  'Sass' = 'Sass',
}

export interface Project {
  name: string
  subtitle: string
  description: string
  start: string
  end?: string
  link: {
    href: string
    label: string
  }
  logo?: any
  logoDark?: any
  teks: Teks[]
}
