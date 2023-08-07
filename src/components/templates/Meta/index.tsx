import Head from 'next/head'
import { siteMeta } from '@/lib/constants'
import { useRouter } from 'next/router'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta

type MetaProps = {
  pageTitle?: string
  pageDesc?: string
}

const Meta = (props: MetaProps) => {
  const { pageTitle, pageDesc } = props
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc

  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  )
}

export default Meta
