import { useState } from 'react'
import { styled } from 'styled-components'
import Text from '../Text'

export type DropdownOption = {
  label: string
  value: string
}

type DropdownProps = {
  value?: DropdownOption
  options: DropdownOption[]
  onChange: (item: DropdownOption) => void
  disabled: boolean
}

const DropdownRoot = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`

const DropdownContainer = styled.div`
  position: relative;
`

const DropdownSelected = styled.div`
  line-height: 30px;
  padding: 5px 10px;
`

const DropdownOptions = styled.div`
  position: absolute;
  top: 40px;
  border: 1px solid #CCCCCC;
  width: 100%;
  max-height: 300px;
  border-radius: 0px 0px 5px 5px;
`
const DropdownItem = styled.li`
  line-height: 30px;
  padding: 5px 10px;
  &:hover {
    background-color: #CCCCCC;
  }
`

const Dropdown = (props: DropdownProps) => {
  const {
    value = { label: '-', value: '' },
    options,
    onChange,
    disabled = false,
  } = props
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [selectedValue, setSelectedValue] = useState<DropdownOption>(value)

  return (
    <DropdownRoot>
      <DropdownContainer>
        <DropdownSelected onClick={() => setIsOpenDropdown(true)}>
          <Text variant="medium">{selectedValue.label}</Text>
        </DropdownSelected>
        {isOpenDropdown && (
          <DropdownOptions>
            <ul>
              {options.map((option, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => {
                    setSelectedValue(option)
                    setIsOpenDropdown(false)
                    console.log(isOpenDropdown)
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

export default Dropdown
