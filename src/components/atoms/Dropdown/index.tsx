import { useEffect, useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import Text from '../Text'

type DropdownProps = {
  value?: DropdownOption
  options: DropdownOption[]
  onChange: (item: DropdownOption) => void
  isError?: boolean
}
const Dropdown = (props: DropdownProps) => {
  const {
    value = { label: '-', value: '' },
    options,
    onChange,
    isError = false,
  } = props
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [selectedValue, setSelectedValue] = useState<DropdownOption>(value)

  const onClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  const dropdownRootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dropdown = dropdownRootRef.current
    if (!dropdown) {
      return
    }

    // 欄外クリック
    document.addEventListener('click', (e: MouseEvent) => {
      if (!dropdown.contains(e.target as Node)) {
        // DropdownRootに外側が含まれていない
        setIsOpenDropdown(false)
      }
    })
  }, [dropdownRootRef])

  return (
    <DropdownRoot
      onClick={onClickDropdown}
      isError={isError}
      ref={dropdownRootRef}
    >
      <DropdownContainer>
        <DropdownSelected>
          <Text variant="medium">{selectedValue.label}</Text>
        </DropdownSelected>
        <DropdownArrowIcon isOpen={isOpenDropdown} size={5} />
        {isOpenDropdown && (
          <DropdownOptions>
            <ul>
              {options.map((option, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => {
                    setSelectedValue(option)
                    setIsOpenDropdown(false)
                    onChange && onChange(option)
                  }}
                >
                  {option.label}
                </DropdownItem>
              ))}
            </ul>
          </DropdownOptions>
        )}
      </DropdownContainer>
    </DropdownRoot>
  )
}

export type DropdownOption = {
  label: string
  value: string
}

const DropdownRoot = styled.div<{ isError: boolean }>`
  ${({ theme, isError }) => {
    return css`
        border: 1px solid ${
          isError ? theme.colors.danger : theme.colors.border
        };
      `
  }}
  border-radius: 3px;
  cursor: pointer;
`

const DropdownContainer = styled.div`
  position: relative;
`

const DropdownSelected = styled.div`
  line-height: 30px;
  padding: 5px 10px;
`

const DropdownArrowIcon = styled.div<{ isOpen?: boolean; size?: number }>`
  position: absolute;
  right: 0px;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateX(-100%) translateY(-50%);
  ${({ isOpen = false, size = 5 }) => {
    return isOpen
      ? css`
      border-left: ${size}px solid transparent;
      border-right: ${size}px solid transparent;
      border-bottom: ${size}px solid black;
    `
      : css`
      border-left: ${size}px solid transparent;
      border-right: ${size}px solid transparent;
      border-top: ${size}px solid black;
    `
  }}
`

const DropdownOptions = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  max-height: 150px;
  overflow: auto;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid transparent;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #FFFFFF
`

const DropdownItem = styled.li`
  line-height: 30px;
  padding: 5px 10px;
  &:hover {
    background-color: #CCCCCC;
  }
`

export default Dropdown
