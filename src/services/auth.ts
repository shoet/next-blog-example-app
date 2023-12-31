import { ApiContext } from '@/types/data'
import { User } from '@prisma/client'
import { fetcher } from '@/utils/http'

export const signIn = async (
  email: string,
  password: string,
  context: ApiContext,
): Promise<User> => {
  const user = await fetcher(`${context.apiBaseUrl}/auth/signin`, {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
  return user
}

export const signOut = async (context: ApiContext): Promise<void> => {
  await fetcher(`${context.apiBaseUrl}/auth/signout`, {
    method: 'POST',
  })
}
