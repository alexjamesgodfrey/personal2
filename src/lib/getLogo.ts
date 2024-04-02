import logoMe from '@/images/avatar.jpg'
import logoAWS from '@/images/logos/aws.svg'
import logoAzure from '@/images/logos/azure.svg'
import logoBootstrap from '@/images/logos/bootstrap.svg'
import logoDigitalOcean from '@/images/logos/digital-ocean.svg'
import logoExpress from '@/images/logos/express.svg'
import logoGCP from '@/images/logos/gcp.svg'
import logoGraphQL from '@/images/logos/graphql.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoNext from '@/images/logos/next.svg'
import logoNode from '@/images/logos/node.svg'
import logoPostgresSQL from '@/images/logos/postgresql.svg'
import logoPrisma from '@/images/logos/prisma.svg'
import logoReact from '@/images/logos/react.svg'
import logoSass from '@/images/logos/sass.svg'
import logoSwift from '@/images/logos/swift.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import { Teks } from '@/types/Project'

export default function getLogo(tek: Teks) {
  switch (tek) {
    case Teks.TypeScript:
      return logoTypescript
    case Teks.JavaScript:
      return logoJavascript
    case Teks.React:
      return logoReact
    case Teks.Next:
      return logoNext
    case Teks.Node:
      return logoNode
    case Teks.PostgreSQL:
      return logoPostgresSQL
    case Teks.GraphQL:
      return logoGraphQL
    case Teks.Swift:
      return logoSwift
    case Teks.Express:
      return logoExpress
    case Teks.Prisma:
      return logoPrisma
    case Teks.Tailwind:
      return logoTailwind
    case Teks.Sass:
      return logoSass
    case Teks.Bootstrap:
      return logoBootstrap
    case Teks.AWS:
      return logoAWS
    case Teks.GCP:
      return logoGCP
    case Teks.Azure:
      return logoAzure
    case Teks.DigitalOcean:
      return logoDigitalOcean
    default:
      return logoMe
  }
}
