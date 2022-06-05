import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { seo } from '@config/seo'

interface SEOProps {
  title?: string
  description?: string
  image?: {
    url: string
    alt: string
  }
  url?: string
}

function SEO({ description, image, title, url }: SEOProps) {
  const images = image ? [image] : []
  return (
    <>
      <Head>
        <meta charSet={seo.locale} key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={title || seo.defaultTitle}
        description={description || seo.description}
        canonical={seo.canonical}
        facebook={seo.facebook}
        openGraph={{
          title: title || seo.defaultTitle,
          description: description || seo.description,
          url: url || seo.canonical,
          locale: seo.locale,
          site_name: seo.defaultTitle,
          images,
          type: 'website'
        }}
        twitter={{
          handle: seo.twitter,
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
    </>
  )
}

export { SEO }
