import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

import druLogo from '.github/dru_logo.png'

const config: DocsThemeConfig = {
  logo: (
    <a href="https://www.devreluni.com/">
    <Image
      src={druLogo}
      alt="DevRel University Logo"
      width={80}
      height={80}
    />
  ),
  project: {
    link: 'https://github.com/0xwaya/devreluni_rss',
  },
  chat: {
    link: 'https://discord.gg/TcAC7RVB7H',
  },
  docsRepositoryBase: 'https://github.com/0xwaya/devreluni_rss/tree/main',
  footer: {
    text: 'DevRel University Resources',
  },
}

export default config