import { useAuthUserContext } from '@/context/AuthUserContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthGuard = () => {
  const router = useRouter()
  const { user, isLoading } = useAuthUserContext()

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/user/signin') // TODO: redirect_to
    }
  }, [router, user, isLoading])
}
