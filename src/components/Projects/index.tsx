import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logo121 from '@/images/logos/121-circle.png'
import logoAltumDark from '@/images/logos/altum-dark.png'
import logoAltum from '@/images/logos/altum.png'
import logoAnyTranscript from '@/images/logos/anytranscript.svg'
import logoBookwords from '@/images/logos/bookwords-logo.svg'
import logoSierra from '@/images/logos/sierra.png'
import logoStudyflowOld from '@/images/logos/studyflow-old.svg'
import logoStudyflow from '@/images/logos/studyflow.svg'
import getLogo from '@/lib/getLogo'
import { Project, Teks } from '@/types/Project'
import Image from 'next/future/image'
import Head from 'next/head'
import { useContext } from 'react'
import { DarkModeContext } from '../DarkModeContext'

const projects: Project[] = [
  {
    name: 'OneTwentyOne',
    subtitle: 'this is it',
    description: 'Infrastructure for the next generation of medicine.',
    start: 'October 2023',
    end: '',
    link: {
      href: 'https://onetwentyone.ai',
      label: 'onetwentyone.ai',
    },
    logo: logo121,
    teks: [
      Teks.Swift,
      Teks.TypeScript,
      Teks.Next,
      Teks.Node,
      Teks.PostgreSQL,
      Teks.Express,
      Teks.GCP,
      Teks.DigitalOcean,
      Teks.Tailwind,
    ],
  },
  {
    name: 'Bookwords',
    subtitle: 'open source project',
    description: "{Paused in light of 121} The world's word count API.",
    start: 'August 2023',
    end: '',
    link: {
      href: 'https://bookwords.org',
      label: 'bookwords.org',
    },
    logo: logoBookwords,
    teks: [
      Teks.TypeScript,
      Teks.Next,
      Teks.Node,
      Teks.PostgreSQL,
      Teks.Express,
      Teks.GCP,
      Teks.AWS,
      Teks.Tailwind,
    ],
  },
  {
    name: 'AnyTranscript',
    subtitle: 'startup',
    description:
      '{Paused in light of 121} A comprehensive suite of AI-powered transcription tools for content creators, such as AI-enhanced transcription, blog post creation from videos, and more.',
    start: 'June 2023',
    end: '',
    link: {
      href: 'https://anytranscript.ai',
      label: 'anytranscript.ai',
    },
    logo: logoAnyTranscript,
    teks: [
      Teks.TypeScript,
      Teks.Next,
      Teks.PostgreSQL,
      Teks.AWS,
      Teks.Tailwind,
    ],
  },
  {
    name: 'Altum Labs',
    subtitle: 'API contractor',
    description:
      'Contracted by Altum Labs CEO to architect and implement multi-tenant database and corresponding API from scratch. Secured database with over 80 RLS policies, serving over 200k successful requests. Continued to lead team of 12 engineers to develop plantalysis, an online lab testing marketplace. In early August, I was offered a full-time position as CTO.',
    start: 'May 2023',
    end: 'Aug 2023',
    link: {
      href: 'https://altumlabs.co',
      label: 'altumlabs.co',
    },
    logo: logoAltum,
    logoDark: logoAltumDark,
    teks: [
      Teks.TypeScript,
      Teks.Next,
      Teks.PostgreSQL,
      Teks.AWS,
      Teks.Tailwind,
    ],
  },
  {
    name: 'Studyflow',
    subtitle: 'startup',
    description:
      'A more ambitious version of Studyflow that attempted to create all-in-one student productivity software.',
    start: 'March 2022',
    end: 'September 2022',
    link: {
      href: 'https://studyflow.ai',
      label: 'studyflow.ai',
    },
    logo: logoStudyflow,
    teks: [
      Teks.TypeScript,
      Teks.Next,
      Teks.Node,
      Teks.PostgreSQL,
      Teks.GraphQL,
      Teks.Prisma,
      Teks.GCP,
      Teks.AWS,
      Teks.Tailwind,
    ],
  },
  {
    name: 'Calctrainer',
    subtitle: 'project',
    description:
      'A web app I built in a weekend to help my friends and I track our understanding as we practiced for the Calc II final. It includes user-uploaded questions for each topic covered on the final exam.',
    start: 'December 2022',
    end: 'March 2022',
    link: {
      href: 'https://121health.app',
      label: 'domain sold',
    },
    teks: [
      Teks.JavaScript,
      Teks.React,
      Teks.PostgreSQL,
      Teks.Express,
      Teks.Bootstrap,
      Teks.Sass,
    ],
  },
  {
    name: 'Studyflow 0',
    subtitle: 'project',
    description:
      'A primitive version of Studyflow that integrated Todoist, Notion, and Google Drive through an AWS daemon server.',
    start: 'Aug 2021',
    end: 'March 2022',
    link: {
      href: 'https://github.com/alexjamesgodfrey/studyflow.git',
      label: 'github',
    },
    logo: logoStudyflowOld,
    teks: [
      Teks.JavaScript,
      Teks.Node,
      Teks.PostgreSQL,
      Teks.Express,
      Teks.GCP,
      Teks.AWS,
      Teks.Bootstrap,
    ],
  },
  {
    name: 'sierraapicella.com',
    subtitle: 'project',
    description: 'A portfolio website for a local artist.',
    start: 'May 2020',
    end: 'May 2021',
    link: { href: 'https://sierraapicella.com', label: 'sierraapicella.com' },
    logo: logoSierra,
    teks: [
      Teks.JavaScript,
      Teks.React,
      Teks.PostgreSQL,
      Teks.Express,
      Teks.Bootstrap,
      Teks.Sass,
    ],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function NoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="mt-1 h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  )
}

export default function Projects() {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <>
      <Head>
        <title>Projects - Alex Godfrey</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Some cool things I’ve made."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. If any of my work inspires, you, feel free to reach out to me at me@alexgodfrey.com for more information or web development services."
      >
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                width: '28rem',
                margin: '1rem 1.5rem',
              }}
            >
              <Card as="li" key={project.name} className="h-full">
                <div className="z-10 flex w-full items-center justify-between">
                  <div
                    className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                    style={{
                      height: '3rem',
                      width: '3rem',
                    }}
                  >
                    {project.logo ? (
                      <>
                        {!project.logoDark && (
                          <Image
                            src={project.logo}
                            alt=""
                            className={'h-8 w-8'}
                            style={{
                              height: '2rem',
                              width: '2rem',
                            }}
                            unoptimized
                          />
                        )}
                        {project.logoDark && !isDarkMode && (
                          <Image
                            src={project.logo}
                            alt=""
                            className={'h-8 w-8'}
                            style={{
                              height: '2rem',
                              width: '2rem',
                            }}
                            unoptimized
                          />
                        )}
                        {isDarkMode && project.logoDark && (
                          <Image
                            src={project.logoDark}
                            alt=""
                            className="h-8 w-8"
                            style={{
                              height: '2rem',
                              width: '2rem',
                            }}
                            unoptimized
                          />
                        )}
                      </>
                    ) : (
                      <div className='dark:ring-0" mt-1 mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 dark:bg-amber-800'></div>
                    )}
                  </div>
                  <div className="mt-2 flex w-16 flex-wrap justify-end gap-2">
                    {project.teks.map((tek, i) => (
                      <Image
                        src={getLogo(tek)}
                        alt=""
                        key={i}
                        className="mt-0.5 h-4 w-4"
                        unoptimized
                      />
                    ))}
                  </div>
                </div>

                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">
                    {project.name}{' '}
                    <span
                      className="text-xs italic text-zinc-400"
                      style={{
                        fontStyle: 'italic',
                        color: 'rgb(161 161 170 / var(--tw-text-opacity))',
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </Card.Link>
                </h2>

                <div
                  className="z-10 text-xs text-zinc-400 transition dark:text-zinc-200"
                  aria-label={`${project.start} until ${project.end}`}
                >
                  <time dateTime={project.start}>{project.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={project.end}>{project.end}</time>
                </div>

                <Card.Description>{project.description}</Card.Description>

                <p className="item-center relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
                  {project.link.label !== 'private code' ? (
                    <LinkIcon className="h-6 w-6 flex-none" />
                  ) : (
                    <NoIcon className="mt-1 h-5 w-5 flex-none" />
                  )}
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
