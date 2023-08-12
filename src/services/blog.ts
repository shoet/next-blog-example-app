import { FetchOptions, fetcher } from '@/utils/http'
import { Blog } from '@prisma/client'

export const postBlog = () => {
  // TODO: title, slug, category, tag, body(markdown)
  // api: /blog/new
  // TODO: save image
  // api: /image/public/new
}

export const getBlog = async (
  blogId: number,
  fetchOptions?: FetchOptions,
): Promise<Blog> => {
  const blog = await fetcher({
    ...fetchOptions,
    resource: `/blog/${blogId}`,
    config: { method: 'GET' },
  })
  return blog
}

export const getAllBlogIds = async (
  fetchOptions?: FetchOptions,
): Promise<Pick<Blog, 'id'>[]> => {
  const blogIds = await fetcher({
    ...fetchOptions,
    resource: `/blog/ids`,
    config: { method: 'GET' },
  })
  return blogIds
}
