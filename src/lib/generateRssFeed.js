import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'
import ReactDOMServer from 'react-dom/server'

import { getAllwritings } from './getAllwritings'

export async function generateRssFeed() {
  let writings = await getAllwritings()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Alex Godfrey',
    email: 'spencer@planetaria.tech',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let writing of writings) {
    let url = `${siteUrl}/writings/${writing.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <Writing.component isRssFeed />
    )

    feed.addItem({
      title: writing.title,
      id: url,
      link: url,
      description: writing.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(writing.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
