import React, {useRef, useState} from 'react'
import {GeocodingType} from '../../../app/geocoding/geocodingTypes'
import useClickOutside from '../../../hooks/useClickOutside'
import Loader from '../loader/Loader'
import {
  Arrow,
  Input,
  InputLabel,
  InputSelectWrapper,
  SelectButtonText,
  SelectList,
  SelectListButton,
  SelectListElement,
  SelectListNotFound
} from './InputSelectStyles'

interface InputSelectProps {
  value: string
  onChange: React.HTMLAttributes<HTMLInputElement>['onChange']
  options: GeocodingType[]
  onClick: (location: GeocodingType) => void
  label: string
  isLoad: boolean
}

const InputSelect: React.FC<InputSelectProps> = ({
  value,
  onChange,
  options,
  onClick,
  label,
  isLoad
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false)
  const selectElement = useRef<HTMLDivElement>(null)
  console.log(options)
  useClickOutside(selectElement.current!, () => setIsInputFocus(false))

  return (
    <InputSelectWrapper width='400px' ref={selectElement}>
      <InputLabel htmlFor='input' isActive={isInputFocus || !!value}>
        {label}
      </InputLabel>
      <Input
        id='input'
        onFocus={() => setIsInputFocus(true)}
        onChange={onChange}
        value={value}
        autoComplete={'off'}
      />
      <InputLabel isArrow htmlFor='input'>
        <Arrow
          isActive={isInputFocus}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
        </Arrow>
      </InputLabel>
      <SelectList isActive={isInputFocus && !!value}>
        {isLoad ? (
          <Loader />
        ) : (
          <>
            {value && options.length === 0 && (
              <SelectListNotFound>
                Nothing found <span>\(o_o)/</span>
              </SelectListNotFound>
            )}
            {options.map((option, index) => (
              <SelectListElement key={index}>
                <SelectListButton onClick={() => onClick(option)}>
                  <SelectButtonText>{option.name}</SelectButtonText>
                  <SelectButtonText isSmall>{option?.state}</SelectButtonText>
                  <SelectButtonText>{option.country}</SelectButtonText>
                </SelectListButton>
              </SelectListElement>
            ))}
          </>
        )}
      </SelectList>
    </InputSelectWrapper>
  )
}

export default InputSelect
