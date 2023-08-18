import { useState } from 'react'
import Input from '../Input'
import { styled } from 'styled-components'
import Flex from '@/components/layout/Flex'
import Badge from '../Badge'

type TagFormProps = {
  onKeyDown: (text: string) => void
}

const TagForm = (props: TagFormProps) => {
  const { onKeyDown } = props
  const [inputText, setInputText] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key === 'Enter') {
      setTags([...tags, inputText])
      setInputText('')
      onKeyDown && onKeyDown(inputText)
    }
    if (e.nativeEvent.isComposing || e.key === 'Backspace') {
      if (inputText !== '') {
        return
      }
      tags.splice(tags.length - 1, 1)
      setTags([...tags])
    }
  }

  return (
    <>
      <TagFormContainer>
        <TagItems>
          {tags.map((t, idx) => (
            <Badge key={idx} label={t} />
          ))}
        </TagItems>
        <Input
          value={inputText}
          hasBorder={false}
          onKeyDown={handleKeyDownInput}
          onChange={(e) => setInputText(e.target.value)}
        />
      </TagFormContainer>
    </>
  )
}

const TagFormContainer = styled(Flex)`
  width: 100%;
  border: 1px solid gray;
  border-radius: 3px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const TagItems = styled.div`
  & > span {
    margin-left: 5px;
  }
`

export default TagForm
