import Box from '@/components/layout/Box'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next'

type BlogContentPageProps = {
  id: number
  title: string
  content: string
  category: string
  tag: string
  created_at: string
  updated_at: string
}

export const getStaticProps: GetStaticProps<BlogContentPageProps> = async (
  context: GetStaticPropsContext,
) => {
  const { params } = context
  if (!params) {
    throw new Error('params is undefined')
  }

  const id = Number(params.id)

  // search blog content

  return {
    props: {
      id: 1,
      title: 'title',
      content: 'content',
      category: 'category',
      tag: 'tag',
      created_at: '20230101',
      updated_at: '20230101',
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/blog/1']
  return { paths, fallback: false }
}

const BlogContentPage: NextPage<BlogContentPageProps> = (
  props: BlogContentPageProps,
) => {
  return <Box>{props.title}</Box>
}

export default BlogContentPage
