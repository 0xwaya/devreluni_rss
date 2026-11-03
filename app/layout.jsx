import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://dru-resources.vercel.app'),
  title: {
    default: 'DevRel University Resources',
    template: '%s - DevRel University'
  },
  description:
    'A curated library of resources for Developer Relations professionals.',
  applicationName: 'DevRel University Resources'
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <Image
          src="/dru_logo.png"
          alt="DevRel University Logo"
          width={80}
          height={80}
          priority
        />
      }
      logoLink="https://www.devreluni.com/"
      projectLink="https://github.com/0xwaya/devreluni_rss"
      chatLink="https://discord.gg/TcAC7RVB7H"
    />
  )

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>DevRel University Resources</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/0xwaya/devreluni_rss/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children ?? null}
        </Layout>
      </body>
    </html>
  )
}
