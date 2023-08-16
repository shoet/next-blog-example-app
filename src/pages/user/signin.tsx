import Hero from '@/components/organisms/Hero'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Meta from '@/components/templates/Meta'
import SignInForm from '@/components/organisms/SignInForm'
import { useRouter } from 'next/router'

const SingIn: NextPage = () => {
  const router = useRouter()
  const onSignin = () => {
    router.push('/')
  }
  return (
    <>
      <Meta pageTitle="SingIn" pageDesc="SingIn" />
      <SignInForm />
    </>
  )
}

export default SingIn
