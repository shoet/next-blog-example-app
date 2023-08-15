import { ApiContext } from '@/types/api'
import { fetcher } from '@/utils/http'
import { Blog } from '@prisma/client'

export const postBlog = () => {
  // TODO: title, slug, category, tag, body(markdown)
  // api: /blog/new
  // TODO: save image
  // api: /image/public/new
}

export const getBlog = async (
  blogId: number,
  context: ApiContext,
): Promise<Blog> => {
  const blog = await fetcher(`${context.apiBaseUrl}/blog/${blogId}`, {
    method: 'GET',
  })
  return blog
}

export const getAllBlogIds = async (
  context: ApiContext,
): Promise<Pick<Blog, 'id'>[]> => {
  const blogIds = await fetcher(`${context.apiBaseUrl}/blog/ids`, {
    method: 'GET',
  })
  return blogIds
}