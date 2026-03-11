import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Cortex Docs',
    template: '%s — Cortex Docs',
  },
  description: 'Documentation for Cortex — personal knowledge management with AI-powered recall.',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.2 6H8.2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 22v-4h6v4" />
      <path d="M9 18h6" />
    </svg>
    Cortex
  </span>
)

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🧠" />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/DoctaCloak/cortex"
            />
          }
          footer={
            <Footer>
              MIT {new Date().getFullYear()} © Cortex. Remember everything. Recall what matters.
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/DoctaCloak/cortex-docs/blob/main/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
