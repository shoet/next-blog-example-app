import { PropsWithChildren, createContext, useContext } from 'react'
import { ApiContext, AuthUser } from '@/types/data'
import useSWR from 'swr'
import { User } from '@prisma/client'
import * as authService from '@/services/auth'

type AuthUserContextProps = {
  user?: AuthUser
  isLoading: boolean
  isError: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}
const AuthUserContext = createContext<AuthUserContextProps>({
  user: undefined,
  isLoading: false,
  isError: false,
  signIn: async () => {},
  signOut: async () => {},
})
export const useAuthUserContext = () => useContext(AuthUserContext)

export type AuthUserContextProviderProps = PropsWithChildren & {
  context: ApiContext
}
export const AuthUserContextProvider = ({
  context,
  children,
}: AuthUserContextProviderProps) => {
  const {
    data: user,
    isLoading,
    error,
    mutate,
  } = useSWR<User>(`${context.apiBaseUrl}/user/me`)

  const signIn = async (email: string, password: string) => {
    await authService.signIn(email, password, context)
    mutate()
  }
  const signOut = async () => {
    await authService.signOut(context)
    mutate()
  }

  return (
    <AuthUserContext.Provider
      value={{ user, isLoading, isError: !!error, signIn, signOut }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}
