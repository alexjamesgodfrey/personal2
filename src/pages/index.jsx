import Newsletter from '@/components/About/Newletter'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logo121 from '@/images/logos/121-circle.png'
import logoAltumDark from '@/images/logos/altum-dark.png'
import logoAltum from '@/images/logos/altum.png'
import logoCornell from '@/images/logos/cornell.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllWritings } from '@/lib/getAllWritings'
import clsx from 'clsx'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { DarkModeContext } from '../components/DarkModeContext'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Writing({ writing }) {
  return (
    <Card as="writing">
      <Card.Title href={`/writings/${writing.slug}`}>
        {writing.title}
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={writing.date}
        decorate
        className="flex w-full justify-between"
      >
        <div>{formatDate(writing.date)}</div>
        <div className="text-zinc-400 dark:text-zinc-500">
          <span className="ml-3">{writing.readLength} minute read</span>
        </div>
      </Card.Eyebrow>
      <Card.Description>{writing.description}</Card.Description>
      <Card.Cta>Read paper</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  const { isDarkMode } = useContext(DarkModeContext)

  let resume = [
    {
      company: 'OneTwentyOne',
      title: 'Founder',
      start: 'October 2023',
      end: 'Present',
      logo: logo121,
    },
    {
      company: 'Altum Labs',
      title: 'API Contractor',
      start: 'May 2023',
      end: 'August 2023',
      logo: logoAltum,
      logoDark: logoAltumDark,
    },
    {
      company: 'CS 1110 - Intro to Computing',
      title: 'Consultant',
      logo: logoCornell,
      start: 'Aug 2022',
      end: 'Dec 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        See a full history{' '}
        <Link href="/projects" className="cursor-pointer underline">
          here
        </Link>
        .
      </p>
      <ol className="mt-4 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            {role.logo ? (
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {role.logoDark && isDarkMode ? (
                  <Image
                    src={role.logoDark}
                    alt=""
                    className="h-7 w-7"
                    unoptimized
                  />
                ) : (
                  <Image
                    src={role.logo}
                    alt=""
                    className="h-7 w-7"
                    unoptimized
                  />
                )}
              </div>
            ) : (
              <div className='dark:ring-0" relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800'>
                <div className='dark:ring-0" mt-1 mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 dark:bg-amber-800'></div>
              </div>
            )}
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button
        href="/resume90222.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>{' '} */}
      <div className="mt-4 flex flex-col items-center">
        {/* <ConsultationButton short /> */}
      </div>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ writings }) {
  return (
    <>
      <Head>
        <title>Alex Godfrey - Student, founder, and builder</title>
        <meta
          name="description"
          content="I'm Alex, a software developer and entrepreneur based in
            Dewittville, NY. I'm currently studying computer science, math,
            and neuroscience as a junior at Cornell University. I'm also
            the founder of multiple companies."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Student, founder, and builder.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Alex, a software developer and entrepreneur based in
            Ithaca, NY. I&apos;m currently studying computer science, math, and
            neuroscience as a junior at Cornell University. Right now, I&apos;m
            obsessed with preventive medicine, and am building{' '}
            <a
              href="https://onetwentyone.ai"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              OneTwentyone
            </a>{' '}
            so you have a personalized and actionable life extension plan.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <SocialLink
              href={process.env.NEXT_PUBLIC_GITHUB_LINK || '#'}
              target="_blank"
              rel="noreferer noopener"
              aria-label="See my code on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={process.env.NEXT_PUBLIC_LINKEDIN_LINK || '#'}
              target="_blank"
              rel="noreferer noopener"
              aria-label="Connect with me on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK || '#'}
              target="_blank"
              rel="noreferer noopener"
              aria-label="Follow me on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={process.env.NEXT_PUBLIC_MAILTO_LINK || '#'}
              target="_blank"
              rel="noreferer noopener"
              aria-label="Email me"
              icon={EmailIcon}
            />
            <div className="hidden sm:flex md:hidden">
              {/* <ConsultationButton short /> */}
            </div>
            <div className="hidden md:flex">{/* <ConsultationButton /> */}</div>
          </div>
          <div className="mt-2 sm:hidden">
            {/* <ConsultationButton short /> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {writings.map((writing) => (
              <Writing key={writing.slug} writing={writing} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      writings: (await getAllWritings())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
