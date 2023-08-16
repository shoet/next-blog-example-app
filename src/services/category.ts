import { ApiContext } from '@/types/data'
import { Category } from '@prisma/client'
import useSWR from 'swr'

export const useCategory = (context: ApiContext) => {
  const { data, isLoading, error, mutate } = useSWR<Category[]>(
    `${context.apiBaseUrl}/category`, // TODO: paging
  )

  return {
    categories: data,
    isLoading,
    error,
    mutate,
  }
}
