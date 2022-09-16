import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllwritings } from '@/lib/getAllwritings'

function Writing({ writing }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/writings/${writing.slug}`}>
          {writing.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={writing.date}
          className="md:hidden"
          decorate
        >
          {formatDate(writing.date)}
        </Card.Eyebrow>
        <Card.Description>{writing.description}</Card.Description>
        <Card.Cta>Read writing</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={writing.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(writing.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function WritingsIndex({ writings }) {
  return (
    <>
      <Head>
        <title>Writings - Alex Godfrey</title>
        <meta name="description" content="Some writings" />
      </Head>
      <SimpleLayout
        title="Some writings"
        intro="I have made for my classes at Cornell."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {writings.map((writing) => (
              <Writing key={writing.slug} writing={writing} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      writings: (await getAllwritings()).map(({ component, ...meta }) => meta),
    },
  }
}
