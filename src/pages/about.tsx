import Box from '@/components/layout/Box'
import Hero from '@/components/organisms/Hero'
import Content from '@/components/templates/Content'
import Profile from '@/components/molecules/Profile'
import Contact from '@/components/molecules/Contact'
import Image from 'next/image'
import aboutImage from 'images/aboutImage.jpg'

const About = () => {
  return (
    <>
      <Box marginBottom={3}>
        <Hero title="About" subTitle="About this blog" />
      </Box>
      <Box marginBottom={3} textAlign="center">
        <Image
          src={aboutImage}
          alt=""
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          width={0}
          height={0}
          priority
          placeholder="blur"
        />
      </Box>
      <Content
        MainContent={<Profile />}
        SubContent={<Contact alignment="end" />}
      />
    </>
  )
}

export default About
