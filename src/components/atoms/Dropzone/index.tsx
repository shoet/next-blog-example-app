import Flex from '@/components/layout/Flex'
import styled from 'styled-components'
import { PropsWithChildren, useRef, useState } from 'react'
import Text from '../Text'
import Box from '@/components/layout/Box'

const ACCEPT_FILE_TYPES_DEFAULT = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
]

type DropzoneProps = {
  value?: File[]
  onChange?: (value: File[]) => void
  isError?: boolean
  acceptFileTypes?: string[]
}
const Dropzone = (props: PropsWithChildren<DropzoneProps>) => {
  const {
    value = [],
    onChange,
    isError: isErrorInit = false,
    acceptFileTypes = ACCEPT_FILE_TYPES_DEFAULT,
    children,
  } = props

  const [isError, setIsError] = useState(isErrorInit)
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  function checkFileTypes(files: File[] | FileList, acceptFileTypes: string[]) {
    const validFiles = []
    const inValidFiles = []

    for (let i = 0, numFiles = files.length; i < numFiles; i++) {
      if (!acceptFileTypes.includes(files[i].type)) {
        inValidFiles.push(files[i])
      } else {
        validFiles.push(files[i])
      }
    }
    return { valid: validFiles, invalid: inValidFiles }
  }

  const fileTypeErrorMessage = (file: File) =>
    `無効なファイル形式です。[${file.name}: ${file.type}]`

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessages([])
    if (e.target.files) {
      const files = e.target.files
      const { valid, invalid } = checkFileTypes(files, acceptFileTypes)
      if (invalid.length > 0) {
        setIsError(true)
        setErrorMessages(invalid.map((f) => fileTypeErrorMessage(f)))
      }
      onChange && onChange(valid)
    }
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setErrorMessages([])
    if (e.dataTransfer.files) {
      const files = e.dataTransfer.files
      const { valid, invalid } = checkFileTypes(files, acceptFileTypes)
      if (invalid.length > 0) {
        setIsError(true)
        setErrorMessages(invalid.map((f) => fileTypeErrorMessage(f)))
      }
      onChange && onChange(valid)
    }
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const hiddenInputRef = useRef<HTMLInputElement>(null)
  const openHiddenInputDialog = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click()
    }
  }

  return (
    <>
      <DropzoneContainer
        isError={isError}
        onClick={openHiddenInputDialog}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children || 'ファイルをドロップまたはクリックして下さい'}
        <input
          type="file"
          multiple
          hidden
          accept={acceptFileTypes.join(',')}
          onChange={onChangeInput}
          ref={hiddenInputRef}
        />
      </DropzoneContainer>
      {isError &&
        errorMessages.length > 0 &&
        errorMessages.map((m, idx) => (
          <Box key={idx}>
            <Text as="label" variant="small" color="danger">
              {m}
            </Text>
          </Box>
        ))}
    </>
  )
}

const DropzoneContainer = styled(Flex)<{ isError?: boolean }>`
  border: dashed 1px ${({ isError, theme }) =>
    isError ? theme.colors.danger : theme.colors.border};
  border-radius: 10px;
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default Dropzone
