import Hero from '@/components/organisms/Hero'
import Head from 'next/head'
import Meta from '@/components/templates/Meta'

const Home = () => {
  return (
    <>
      <Meta />
      <Hero title="Home" subTitle="Home page" imageOn />
    </>
  )
}

export default Home
