import { useEffect, useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import Text from '../Text'

const DROPDOWN_DEFAULT_OPTION = { label: '-', value: '' }
type DropdownProps = {
  value?: DropdownOption
  options: DropdownOption[]
  onChange?: (item: DropdownOption) => void
  isError?: boolean
}
const Dropdown = (props: DropdownProps) => {
  const {
    value = DROPDOWN_DEFAULT_OPTION,
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
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdown.contains(e.target as Node)) {
        // DropdownRootに外側が含まれていない
        setIsOpenDropdown(false)
      }
    }
    document.addEventListener('click', (e) => handleClickOutside(e))

    // cleanup関数
    return document.removeEventListener('click', handleClickOutside)
  }, [dropdownRootRef])

  const handleKeyDownDropdownRoot = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setIsOpenDropdown(!isOpenDropdown)
    } else if (e.key === 'Escape') {
      setIsOpenDropdown(false)
    }
  }

  const handleKeyDownDropdownItem = (
    e: React.KeyboardEvent,
    item: DropdownOption,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSelectedValue(item)
      setIsOpenDropdown(!isOpenDropdown)
    } else if (e.key === 'Escape') {
      setIsOpenDropdown(false)
    }
  }

  return (
    <DropdownRoot
      onClick={onClickDropdown}
      isError={isError}
      ref={dropdownRootRef}
      aria-haspopup="true"
      aria-expanded={isOpenDropdown}
      tabIndex={0}
      onKeyDown={handleKeyDownDropdownRoot}
    >
      <DropdownContainer>
        <DropdownSelected>
          <Text variant="medium">{selectedValue.label}</Text>
        </DropdownSelected>
        <DropdownArrowIcon isOpen={isOpenDropdown} size={5} />
        {isOpenDropdown && (
          <DropdownOptions>
            <ul>
              {options.map((option) => (
                <DropdownItem
                  key={option.value}
                  onClick={() => {
                    setSelectedValue(option)
                    setIsOpenDropdown(false)
                    onChange && onChange(option)
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDownDropdownItem(e, option)}
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

const DropdownRoot = styled.div.withConfig({
  shouldForwardProp: (props) => !['isError'].includes(props),
})<{ isError: boolean }>`
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

const DropdownArrowIcon = styled.div.withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props),
})<{ isOpen?: boolean; size?: number }>`
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
