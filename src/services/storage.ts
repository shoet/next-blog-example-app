import { ApiContext } from '@/types/data'
import { fetcher } from '@/utils/http'
import { useState } from 'react'

export const uploadFile = async (
  signedUrl: string,
  file: File,
  contentType: string,
) => {
  await fetcher(signedUrl, {
    data: file,
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    withCredentials: false,
  })
}

export type UploadUrlData = {
  url: string
  fileName: string
}
export const useUploadUrl = (context: ApiContext) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [data, setData] = useState<UploadUrlData>()

  const mutate = async (fileName: string, contentType: string) => {
    if (isLoading) {
      throw new Error('queue duplicated') // TODO: error message
    }
    setIsLoading(true)
    try {
      const data = await fetcher(
        `${context.apiBaseUrl}/storage/public/generate-url`,
        {
          method: 'POST',
          data: { fileName, contentType },
        },
      )
      setData(data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
        return
      }
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    isLoading,
    error,
    mutate,
  }
}
