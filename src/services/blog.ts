import { BlogFormData } from '@/components/organisms/BlogForm'
import { ApiContext } from '@/types/data'
import { fetcher } from '@/utils/http'
import { Blog } from '@prisma/client'

export const postBlog = async (context: ApiContext, data: BlogFormData) => {
  const blog = await fetcher(`${context.apiBaseUrl}/blog`, {
    method: 'POST',
    data: data,
  })
  return blog
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
