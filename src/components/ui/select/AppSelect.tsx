import React, {useCallback, useEffect, useRef, useState} from 'react'
import useEventsSelect from '../../../hooks/useEventSelect'
import useClickOutside from '../../../hooks/useClickOutside'
import {
  ButtonArrow,
  ButtonText,
  Select,
  SelectButton,
  SelectElement,
  SelectList
} from './StyleSelect'

interface AppSelectProps {
  label: string
  options: number[]
}

const AppSelect: React.FC<AppSelectProps> = ({label, options}) => {
  const [selectValue, setSelectValue] = useState<string | number>('')
  const [isSelectActive, setIsSelectActive] = useState(false)
  const selectListElement = useRef<HTMLUListElement>(null)
  const selectElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isSelectActive) {
      selectListElement.current?.focus()
    } else {
      selectListElement.current?.blur()
    }
  }, [isSelectActive])

  const onSetIsSelectActive = useCallback((state: boolean) => {
    setIsSelectActive(state)
  }, [])

  const onSetSelectValue = useCallback((id: number) => {
    setSelectValue(options[id])
    onSetIsSelectActive(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isKeydownActive = useEventsSelect(
    selectListElement!.current,
    onSetIsSelectActive,
    onSetSelectValue,
    options.length
  )
  useClickOutside(selectElement.current!, onSetIsSelectActive)
  return (
    <Select ref={selectElement} isActive={isSelectActive} width={'200px'}>
      <SelectButton onClick={() => onSetIsSelectActive(!isSelectActive)}>
        <ButtonText>{selectValue ? selectValue : label}</ButtonText>
        <ButtonArrow xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
        </ButtonArrow>
      </SelectButton>
      <SelectList tabIndex={0} ref={selectListElement}>
        {options.map((option: string | number, index: number) => (
          <SelectElement
            onClick={() => onSetSelectValue(index)}
            isFocus={isKeydownActive === index}
            key={index}
          >
            {option}
          </SelectElement>
        ))}
      </SelectList>
    </Select>
  )
}

export default AppSelect
