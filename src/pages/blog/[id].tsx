import Box from '@/components/layout/Box'
import { Blog } from '@prisma/client'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next'
import { getBlog, getAllBlogIds } from '@/services/blog'
import { envVarNotSetMessage } from '@/utils/error'

type BlogContentPageProps = {
  blog: Blog
}

export const getStaticProps: GetStaticProps<BlogContentPageProps> = async (
  context: GetStaticPropsContext,
) => {
  const { params } = context
  if (!params) {
    throw new Error('params is undefined')
  }
  const blogId = Number(params.id)
  const baseUrl = process.env.API_BASE_URL
  if (!baseUrl) throw new Error(envVarNotSetMessage('API_BASE_URL'))
  const blog = await getBlog(blogId, { apiBaseUrl: baseUrl })
  return {
    props: {
      id: blogId,
      blog: blog,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const baseUrl = process.env.API_BASE_URL
  if (!baseUrl) throw new Error(envVarNotSetMessage('API_BASE_URL'))
  const blogIds = await getAllBlogIds({ apiBaseUrl: baseUrl })
  const paths = blogIds.map((res) => `/blog/${res.id}`)
  return { paths, fallback: false }
}

const BlogContentPage: NextPage<BlogContentPageProps> = (
  props: BlogContentPageProps,
) => {
  const { blog } = props
  return (
    <>
      <Box>{blog.id}</Box>
      <Box>{blog.title}</Box>
      <Box>{blog.content}</Box>
      <Box>{blog.categoryId}</Box>
      <Box>{blog.content}</Box>
    </>
  )
}

export default BlogContentPage
