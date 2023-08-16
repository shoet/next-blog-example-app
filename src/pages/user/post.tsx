import Hero from '@/components/organisms/Hero'
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Meta from '@/components/templates/Meta'
import BlogForm from '@/components/organisms/BlogForm'
import { useAuthGuard } from '@/utils/hook'

type BlogPostPageProps = {}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = (
  context: GetStaticPropsContext,
) => {
  return {
    props: {},
    revalidate: 10,
  }
}

const BlogPost: NextPage = () => {
  useAuthGuard()

  return (
    <>
      <Meta pageTitle="BlogPost" pageDesc="Blog post" />
      <BlogForm />
    </>
  )
}

export default BlogPost
