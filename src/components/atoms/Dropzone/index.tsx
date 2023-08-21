import Flex from '@/components/layout/Flex'
import { styled } from 'styled-components'
import Input from '../Input'
import { useRef, useState } from 'react'

const ACCEPT_FILE_TYPES_DEFAULT = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
]

type DropzoneProps = {
  value: File[]
  onChange?: (value: File[]) => void
  onDrag?: (value: File[]) => void
  isError?: boolean
  acceptFileTypes?: string[]
}
// TODO: destract files
const Dropzone = (props: DropzoneProps) => {
  const {
    value = [],
    onChange,
    isError = false,
    acceptFileTypes = ACCEPT_FILE_TYPES_DEFAULT,
  } = props

  const [files, setFiles] = useState<File[]>(value)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files
      const newFiles = []
      if (files) {
        for (let i = 0, numFiles = files.length; i < numFiles; i++) {
          if (!acceptFileTypes.includes(files[i].type)) {
            window.alert(
              `サポートされていないファイル形式です。[${files[i].name}, ${files[i].type}]`,
            )
            return
          }
          newFiles.push(files[i])
        }
      }
      onChange && onChange(newFiles)
    }
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    const newFiles = []
    if (files) {
      for (let i = 0, fileLength = files.length; i < fileLength; i++) {
        if (!acceptFileTypes.includes(files[i].type)) {
          window.alert(
            `サポートされていないファイル形式です。[${files[i].name}, ${files[i].type}]`,
          )
          return
        }
        newFiles.push(files[i])
      }
    }
    setFiles(newFiles)
    onChange && onChange(newFiles)
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
        Dropzone
        <input
          type="file"
          multiple
          hidden
          accept={ACCEPT_FILE_TYPES_DEFAULT.join(',')}
          onChange={onChangeInput}
          ref={hiddenInputRef}
        />
      </DropzoneContainer>
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
