import Hero from '@/components/organisms/Hero'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'

// export default function Home() {
//   return <Hero title="Blog" subTitle="My blog" />
// }

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
  return <Hero title="Blog" subTitle="My blog" />
}

export default Home
