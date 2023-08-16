import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import Flex from '@/components/layout/Flex'
import { useAuthUserContext } from '@/context/AuthUserContext'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type SignInFormData = {
  email: string
  password: string
}

const SignInForm = () => {
  const router = useRouter()
  const { signIn } = useAuthUserContext()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInFormData>()

  const onSubmit = async (data: SignInFormData) => {
    await signIn(data.email, data.password)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Title
            </Text>
          </Box>
          <Input
            {...register('email', { required: 'メールアドレスは必須です。' })}
            name="email"
            type="text"
            placeholder="Email"
            isError={!!errors.email}
          />
          {errors.email && (
            <Text as="label" variant="small" color="danger">
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box paddingBottom={3}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Password
            </Text>
          </Box>
          <Input
            {...register('password', { required: 'パスワードは必須です。' })}
            name="password"
            type="text"
            placeholder="Password"
            isError={!!errors.password}
          />
          {errors.password && (
            <Text as="label" variant="small" color="danger">
              {errors.password.message}
            </Text>
          )}
        </Box>
        <Flex justifyContent="center">
          <Button
            type="submit"
            variant="primary"
            fontSize="extraLarge"
            paddingTop="5px"
            paddingRight={2}
            paddingBottom="5px"
            paddingLeft={2}
            letterSpacing="large"
          >
            Login
          </Button>
        </Flex>
      </Box>
    </form>
  )
}

export default SignInForm
