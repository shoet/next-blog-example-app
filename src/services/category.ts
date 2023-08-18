import { ApiContext } from '@/types/data'
import { Category } from '@prisma/client'
import useSWR from 'swr'

export const useCategory = (context: ApiContext, initial: Category[] = []) => {
  const { data, isLoading, error, mutate } = useSWR<Category[]>(
    `${context.apiBaseUrl}/category`, // TODO: paging
  )

  return {
    categories: data || initial,
    isLoading,
    error,
    mutate,
  }
}
