import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

import druLogo from './.github/dru_logo.png'

const config: DocsThemeConfig = {
  logo: (
    <Image
      src={druLogo}
      alt="DevRel University Logo"
      width={80}
      height={80}
    />
  ),
  project: {
    link: 'https://github.com/0xwaya/DRU_Resources',
  },
  chat: {
    link: 'https://discord.gg/TcAC7RVB7H',
  },
  docsRepositoryBase: 'https://github.com/0xwaya/DRU_Resources',
  footer: {
    text: 'DevRel University Resources',
  },
}

export default config