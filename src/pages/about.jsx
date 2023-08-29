import clsx from 'clsx'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import ConsultationButton from '@/components/ConsultationButton'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200 dark:hover:text-primary"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Alex Godfrey</title>
        <meta
          name="description"
          content="I’m Alex Godfrey. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Alex Godfrey.
            </h1>
            <div className="mt-6 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
              <p className="m-0 p-0">
                I can believe things that are true and things that aren&apos;t
                true and I can believe things where nobody knows if they&apos;re
                true or not. I can believe in Santa Claus and the Easter Bunny
                and the Beatles and Marilyn Monroe and Elvis and Mister Ed.
                Listen - I believe that people are perfectable, that knowledge
                is infinite, that the world is run by secret banking cartels and
                is visited by aliens on a regular basis, nice ones that look
                like wrinkled lemurs and bad ones who mutilate cattle and want
                our water and our women. I believe that the future sucks and I
                believe that the future rocks and I believe that one day White
                Buffalo Woman is going to come back and kick everyone&apos;s
                ass. I believe that all men are just overgrown boys with deep
                problems communicating and that the decline in good sex in
                America is coincident with the decline in drive-in movie
                theaters from state to state. I believe that all politicians are
                unprincipled crooks and I still believe that they are better
                than the alternative. I believe that California is going to sink
                into the sea when the big one comes, while Florida is going to
                dissolve into madness and alligators and toxic waste. I believe
                that antibacterial soap is destroying our resistance to dirt and
                disease so that one day we&apos;ll all be wiped out by the
                common cold like martians in War of the Worlds. I believe that
                the greatest poets of the last century were Edith Sitwell and
                Don Marquis, that jade is dried dragon sperm, and that thousands
                of years ago in a former life I was a one-armed Siberian shaman.
                I believe that mankind&apos;s destiny lies in the stars. I
                believe that candy really did taste better when I was a kid,
                that it&apos;s aerodynamically impossible for a bumble bee to
                fly, that light is a wave and a particle, that there&apos;s a
                cat in a box somewhere who&apos;s alive and dead at the same
                time (although if they don&apos;t ever open the box to feed it
                it&apos;ll eventually just be two different kinds of dead), and
                that there are stars in the universe billions of years older
                than the universe itself. I believe in a personal god who cares
                about me and worries and oversees everything I do. I believe in
                an impersonal god who set the universe in motion and went off to
                hang with her girlfriends and doesn&apos;t even know that
                I&apos;m alive. I believe in an empty and godless universe of
                causal chaos, background noise, and sheer blind luck. I believe
                that anyone who says sex is overrated just hasn&apos;t done it
                properly. I believe that anyone who claims to know what&apos;s
                going on will lie about the little things too. I believe in
                absolute honesty and sensible social lies. I believe in a
                woman&apos;s right to choose, a baby&apos;s right to live, that
                while all human life is sacred there&apos;s nothing wrong with
                the death penalty if you can trust the legal system implicitly,
                and that no one but a moron would ever trust the legal system. I
                believe that life is a game, that life is a cruel joke, and that
                life is what happens when you&apos;re alive and that you might
                as well lie back and enjoy it.
              </p>
              <p className="m-0 p-0 text-right">
                - Samantha Black Crow (Neil Gaiman&apos;s American Gods)
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <ConsultationButton short />
              <SocialLink
                href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                target="_blank"
                rel="noreferer noopener"
                icon={GitHubIcon}
                className="mt-4"
              >
                See my Code
              </SocialLink>
              <SocialLink
                href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
                target="_blank"
                rel="noreferer noopener"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect with me on LinkedIn
              </SocialLink>
              <SocialLink
                href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK}
                target="_blank"
                rel="noreferer noopener"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow me on Instagram
              </SocialLink>
              <SocialLink
                href={process.env.NEXT_PUBLIC_MAILTO_LINK}
                target="_blank"
                rel="noreferer noopener"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                me@alexgodfrey.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
