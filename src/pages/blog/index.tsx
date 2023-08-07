import Hero from '@/components/organisms/Hero'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Meta from '@/components/templates/Meta'

type HomePageProps = {}

export const getStaticProps: GetStaticProps<HomePageProps> = (
  context: GetStaticPropsContext,
) => {
  return {
    props: {},
    revalidate: 10,
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Meta pageTitle="Blog" pageDesc="My blog" />
      <Hero title="Blog" subTitle="My blog" />
    </>
  )
}

export default Home
