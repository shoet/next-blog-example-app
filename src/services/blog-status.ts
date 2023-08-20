import { ApiContext } from '@/types/data'
import { BlogStatus } from '@prisma/client'
import useSWR from 'swr'

export const useBlogStatus = (
  context: ApiContext,
  initial: BlogStatus[] = [],
) => {
  const { data, isLoading, error, mutate } = useSWR<BlogStatus[]>(
    `${context.apiBaseUrl}/blog-status`,
  )

  return {
    blogStatuses: data || initial,
    isLoading,
    error,
    mutate,
  }
}
