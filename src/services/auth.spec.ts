import { ApiContext } from '@/types/data'
import { signIn } from './auth'

describe('auth.ts', () => {
  it('signIn', async () => {
    // TODO: 環境変数を取る
    const context: ApiContext = {
      apiBaseUrl: 'http://localhost:3001',
    }
    const email = 'user_a@example.com'
    const password = 'password'
    const user = await signIn(email, password, context)

    expect(user.email).toBe(email)
  })
})
