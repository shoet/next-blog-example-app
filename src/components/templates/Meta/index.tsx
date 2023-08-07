import Head from 'next/head'
import { siteMeta } from '@/lib/constants'

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
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
    </Head>
  )
}

export default Meta
