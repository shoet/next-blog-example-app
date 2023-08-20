import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Text from '@/components/atoms/Text'
import Box from '@/components/layout/Box'
import { Controller, useForm } from 'react-hook-form'
import { useCategory } from '@/services/category'
import Dropdown, { DropdownOption } from '@/components/atoms/Dropdown'
import { useEffect, useState } from 'react'
import TagForm from '@/components/atoms/TagForm'
import { useAuthUserContext } from '@/context/AuthUserContext'
import { useRouter } from 'next/router'
import TextArea from '@/components/atoms/TextArea'
import Flex from '@/components/layout/Flex'
import CheckBox from '@/components/atoms/CheckBox'

type BlogFormData = {
  title: string
  categoryId: number
  slug: string
  content: string
  authorId: number
  publish: boolean
  statusId: number
  tags: string[]
}

const BlogForm = () => {
  // TOOD: fetch status
  const {
    categories,
    isLoading: isLoadingCategory,
    error: errorCategory,
    mutate: mutateCategory,
  } = useCategory({ apiBaseUrl: process.env.NEXT_PUBLIC_API_PROXY_PATH || '' })

  // TOOD: dropzone
  // TODO: tag form

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BlogFormData>()

  const [dropdownOptionsCategory, setDropdownOptionsCategory] = useState<
    DropdownOption[]
  >([])

  useEffect(() => {
    const fetchedCategory: DropdownOption[] = categories.map((c) => ({
      label: c.name,
      value: String(c.id),
    }))
    setDropdownOptionsCategory([{ label: '-', value: '' }, ...fetchedCategory])
  }, [categories, isLoadingCategory])

  const onSubmit = (data: BlogFormData) => {
    console.log(data)
  }

  return (
    <form>
      <Box>
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
          <Controller
            control={control}
            name="categoryId"
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
                value.length <= 5 || '作成できるタグは5つまでです。',
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
              return <TextArea value={value} onChange={onChange} minRows={5} />
            }}
          />
          {errors.content && (
            <Text as="label" variant="small" color="danger">
              {errors.content.message}
            </Text>
          )}
        </Box>
      </Box>
      <Flex flexDirection="row" justifyContent="end" alignItems="center">
        <Flex marginRight={3} alignItems="center">
          <CheckBox {...register('publish')} name="publish" type="checkbox" />
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
