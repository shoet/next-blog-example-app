import axios, { AxiosRequestConfig } from 'axios'
import { envVarNotSetMessage } from './error'

const client = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export type FetchOptions = {
  baseUrl?: string
  resource?: string
  config?: AxiosRequestConfig
}
export const fetcher = async ({
  baseUrl = process.env.NEXT_PUBLIC_API_PROXY_PATH,
  resource,
  config = {},
}: FetchOptions): Promise<any> => {
  try {
    if (process.env.NEXT_PUBLIC_API_PROXY_PATH === undefined) {
      throw new Error(envVarNotSetMessage('NEXT_PUBLIC_API_PROXY_PATH'))
    }
    config.url = `${baseUrl}${resource}`
    console.log(config)
    const response = await client.request(config)
    return response.data
  } catch (err) {
    // TODO: error handling
    if (axios.isAxiosError(err)) {
      console.log(err.status)
      console.log(err.message)
      throw new Error('Failed api request by axios')
    } else {
      console.log(err)
      throw new Error('Failed api request')
    }
  }
}
