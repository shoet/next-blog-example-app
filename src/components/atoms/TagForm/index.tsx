import { useState } from 'react'
import Input from '../Input'
import { styled } from 'styled-components'
import Flex from '@/components/layout/Flex'

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
        {tags.map((t, idx) => (
          <TagItem key={idx}>{t}</TagItem>
        ))}
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

const TagItem = styled.div`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  padding: 5px;
  margin-left: 5px;
`

export default TagForm
