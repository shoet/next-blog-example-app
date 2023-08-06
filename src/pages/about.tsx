import Box from '@/components/layout/Box'
import Hero from '@/components/organisms/Hero'
import Content from '@/components/templates/Content'
import Profile from '@/components/molecules/Profile'
import Contact from '@/components/molecules/Contact'

const MainContent = () => {
  return (
    <>
      <Box backgroundColor="gray">MainContent</Box>
    </>
  )
}

const SubContent = () => {
  return (
    <>
      <Box backgroundColor="red">SubContent</Box>
    </>
  )
}

const About = () => {
  return (
    <>
      <Box marginBottom={3}>
        <Hero title="About" subTitle="About this blog" />
      </Box>
      <Content
        MainContent={<Profile />}
        SubContent={<Contact alignment="end" />}
      />
    </>
  )
}

export default About
