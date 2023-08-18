import { useState } from 'react'
import Input from '../Input'
import { styled } from 'styled-components'
import Flex from '@/components/layout/Flex'
import Badge from '../Badge'
import Box from '@/components/layout/Box'

type TagFormProps = {
  value: string[]
  onKeyDown?: (tags: string[]) => void
  onChange?: (text: string) => void
  placeholder?: string
}
const TagForm = (props: TagFormProps) => {
  const { onKeyDown, onChange, placeholder } = props
  const [inputText, setInputText] = useState('')
  const [tags, setTags] = useState<string[]>([])

  // TODO: ハンドラで何をさせるか
  // TODO: memo化
  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTags([...tags, inputText])
      setInputText('')
      onKeyDown && onKeyDown(tags)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
    onChange && onChange(inputText)
  }

  const handleOnClick = (idx: number) => {
    tags.splice(idx, 1)
    setTags([...tags])
  }

  return (
    <>
      <TagFormContainer>
        <Input
          value={inputText}
          hasBorder={false}
          onKeyDown={handleKeyDownInput}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      </TagFormContainer>
      <Box marginTop={1}>
        <TagItems>
          {tags.map((t, idx) => (
            <Badge
              key={idx}
              label={t}
              isShowClose
              onClickClose={() => handleOnClick(idx)}
            />
          ))}
        </TagItems>
      </Box>
    </>
  )
}

const TagFormContainer = styled(Flex)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`

const TagItems = styled(Flex)`
  flex-direction: row;
  justify-content: start;
  align-items: center;
  & > span {
    margin-left: 5px;
    margin-bottom: 3px;
  }
  flex-wrap: wrap;
`

export default TagForm
