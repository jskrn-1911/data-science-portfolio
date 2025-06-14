import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Your Portfolio',
  description: 'Portfolio of [Your Name] – Developer, Designer, Builder.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yourdomain.com/',
    siteName: 'Your Portfolio',
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
}

export default config
