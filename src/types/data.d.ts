import { User } from '@prisma/client'

export type ApiContext = {
  apiBaseUrl: string
}

export type AuthUser = Omit<User, 'password'>
