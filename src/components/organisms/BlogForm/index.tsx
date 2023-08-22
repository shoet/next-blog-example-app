import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import { Controller, useForm } from 'react-hook-form'
import { useCategory } from '@/services/category'
import Dropdown, {
  DROPDOWN_DEFAULT_OPTION,
  DropdownOption,
} from '@/components/atoms/Dropdown'
import { useEffect, useState } from 'react'
import TagForm from '@/components/atoms/TagForm'
import { useAuthUserContext } from '@/context/AuthUserContext'
import { useRouter } from 'next/router'
import TextArea from '@/components/atoms/TextArea'
import Flex from '@/components/layout/Flex'
import CheckBox from '@/components/atoms/CheckBox'
import { useBlogStatus } from '@/services/blog-status'
import Dropzone from '@/components/atoms/Dropzone'
import { postBlog } from '@/services/blog'
import { envVarNotSetMessage } from '@/utils/error'

export type BlogFormData = {
  title: string
  categoryId: number
  slug: string
  content: string
  authorId: number
  publish: boolean
  statusId: number
  eyeCatchImage?: string
  tags: string[]
}

const BlogForm = () => {
  const { categories, isLoading: isLoadingCategory } = useCategory({
    apiBaseUrl: process.env.NEXT_PUBLIC_API_PROXY_PATH || '',
  })

  const { blogStatuses, isLoading: isLoadingBlogStatuses } = useBlogStatus({
    apiBaseUrl: process.env.NEXT_PUBLIC_API_PROXY_PATH || '',
  })

  const { user } = useAuthUserContext()
  const [imageFiles, setImageFiles] = useState<File[]>([])

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>()

  const [dropdownOptionsCategory, setDropdownOptionsCategory] = useState<
    DropdownOption[]
  >([])

  const [dropdownOptionsBlogStatus, setDropdownOptionsBlogStatus] = useState<
    DropdownOption[]
  >([])

  useEffect(() => {
    const fetchedCategory: DropdownOption[] = categories.map((c) => ({
      label: c.name,
      value: String(c.id),
    }))
    setDropdownOptionsCategory([DROPDOWN_DEFAULT_OPTION, ...fetchedCategory])
  }, [categories, isLoadingCategory])

  useEffect(() => {
    const fetchedBlogStatus: DropdownOption[] = blogStatuses.map((c) => ({
      label: c.name,
      value: String(c.id),
    }))
    setDropdownOptionsBlogStatus([
      DROPDOWN_DEFAULT_OPTION,
      ...fetchedBlogStatus,
    ])
  }, [blogStatuses, isLoadingBlogStatuses])

  const router = useRouter()
  const onSubmit = async (data: BlogFormData) => {
    if (user === undefined) {
      router.push('/auth/signin')
      return
    }
    data.authorId = user.id
    // TODO: image url
    const baseUrl = process.env.NEXT_PUBLIC_API_PROXY_PATH
    if (!baseUrl) {
      throw new Error(envVarNotSetMessage('NEXT_PUBLIC_API_PROXY_PATH'))
    }
    await postBlog({ apiBaseUrl: baseUrl || '' }, data)
    router.push('/blog')
  }

  return (
    <form>
      <Box>
        {/* TODO: 画像プレビューをカルーセルにする */}
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Title
            </Text>
          </Box>
          <Input
            {...register('title', { required: 'タイトルは必須です。' })}
            name="title"
            type="text"
            placeholder="Title"
            isError={!!errors.title}
          />
          {errors.title && (
            <Text as="label" variant="small" color="danger">
              {errors.title.message}
            </Text>
          )}
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Slug
            </Text>
          </Box>
          <Input
            {...register('slug', { required: 'Slugは必須です。' })}
            name="slug"
            type="text"
            placeholder="Slug"
            isError={!!errors.slug}
          />
          {errors.slug && (
            <Text as="label" variant="small" color="danger">
              {errors.slug.message}
            </Text>
          )}
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Category
            </Text>
          </Box>
          {/* TODO: デフォルト0で良いのか */}
          <Controller
            control={control}
            name="categoryId"
            rules={{
              validate: (value) => {
                return value !== 0 || 'カテゴリを選択して下さい。'
              },
            }}
            defaultValue={Number(DROPDOWN_DEFAULT_OPTION.value)}
            render={({ field: { onChange, value } }) => (
              <>
                <Dropdown
                  value={dropdownOptionsCategory.find(
                    (o) => Number(o.value) === value,
                  )}
                  options={dropdownOptionsCategory}
                  onChange={(item: DropdownOption) => onChange(item.value)}
                />
                {errors.categoryId && (
                  <Text as="label" variant="small" color="danger">
                    {errors.categoryId.message}
                  </Text>
                )}
              </>
            )}
          />
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Tags
            </Text>
          </Box>
          <Controller
            defaultValue={[]}
            control={control}
            name="tags"
            rules={{
              validate: (value) =>
                (value && value.length <= 5) || '作成できるタグは5つまでです。',
            }}
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <>
                <TagForm
                  value={value}
                  placeholder="Tags"
                  onKeyDown={(tags: String[]) => onChange(tags)}
                />
                {errors.tags && (
                  <Text as="label" variant="small" color="danger">
                    {errors.tags.message}
                  </Text>
                )}
              </>
            )}
          />
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Content
            </Text>
          </Box>
          <Controller
            control={control}
            name="content"
            rules={{ required: '本文は必須です。' }}
            render={({ field: { value, onChange } }) => {
              return (
                <TextArea
                  value={value}
                  onChange={(text) => onChange(text)}
                  minRows={5}
                />
              )
            }}
          />
          {errors.content && (
            <Text as="label" variant="small" color="danger">
              {errors.content.message}
            </Text>
          )}
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              Status
            </Text>
          </Box>
          {/* TODO: デフォルト0で良いのか */}
          <Controller
            control={control}
            name="statusId"
            rules={{
              validate: (value) => {
                console.log(value)
                return value !== 0 || 'ステータスを選択して下さい。'
              },
            }}
            defaultValue={Number(DROPDOWN_DEFAULT_OPTION.value)}
            render={({ field: { onChange, value } }) => (
              <>
                <Dropdown
                  value={dropdownOptionsBlogStatus.find(
                    (o) => Number(o.value) === value,
                  )}
                  options={dropdownOptionsBlogStatus}
                  onChange={(item: DropdownOption) => onChange(item.value)}
                />
                {errors.statusId && (
                  <Text as="label" variant="small" color="danger">
                    {errors.statusId.message}
                  </Text>
                )}
              </>
            )}
          />
        </Box>
        <Box paddingBottom={2}>
          <Box paddingBottom={1}>
            <Text as="label" variant="medium" marginBottom={3}>
              EyeCatchImage
            </Text>
          </Box>
          {/* TODO: 改善 revokeURL */}
          <Controller
            control={control}
            name="eyeCatchImage"
            rules={{}}
            render={({ field: { onChange: onChangeEyeCatchImage } }) => (
              <>
                <Dropzone
                  value={imageFiles}
                  onChange={(files) => {
                    if (files.length > 1) {
                      control.setError('eyeCatchImage', {
                        message: 'アップロードできるファイルは1つです。',
                      })
                      return
                    }
                    // TODO: destract files
                    const url = URL.createObjectURL(files[0])
                    onChangeEyeCatchImage(url)
                  }}
                >
                  Dropzone
                </Dropzone>
                {errors.eyeCatchImage && (
                  <Text as="label" variant="small" color="danger">
                    {errors.eyeCatchImage.message}
                  </Text>
                )}
              </>
            )}
          />
        </Box>
      </Box>
      <Flex flexDirection="row" justifyContent="end" alignItems="center">
        <Flex marginRight={3} alignItems="center">
          <Controller
            control={control}
            defaultValue={false}
            name="publish"
            render={({ field: { value, onChange } }) => {
              return (
                <CheckBox
                  name="publish"
                  type="checkbox"
                  checked={value}
                  onChange={(value) => {
                    console.log(value)
                    onChange(value)
                  }}
                />
              )
            }}
          />
          <Text as="label">公開する</Text>
        </Flex>
        <Button
          variant="primary"
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Post
        </Button>
      </Flex>
    </form>
  )
}

export default BlogForm
