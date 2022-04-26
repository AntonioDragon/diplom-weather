import React, {ChangeEvent, useCallback, useEffect, useState} from 'react'
import Logo from '../../Logo/Logo'
import {HeaderButton, NavStyle, HeaderStyle} from './StyleHeader'
import {DisplayEnum} from '../../../app/styles/stylesDisplay'
import InputSelect from '../../ui/input/InputSelect'
import {GeocodingType} from '../../../app/geocoding/geocodingTypes'
import {useSearchParams} from 'react-router-dom'
import useDebounceFunction from '../../../hooks/useDebounceFunction'
import {geocodingService} from '../../../api/geocodingService'
import Portal from '../../modals/Portal'
import Options from '../../modals/Options/Options'
import { useAppDispatch } from '../../../app/appStoreHooks'
import { changeActiveLocation } from '../../../store/geocoding/geocodingReducer'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const [isActiveOptionBar, setIsActiveOptionBar] = useState(false)
  const [list, setList] = useState<GeocodingType[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoad, setIsLoad] = useState(false)

  const onChangeStateOptionBar = useCallback((state: boolean) => {
    setIsActiveOptionBar(state)
  }, [])

  const onClickValue = useCallback(
    (location: GeocodingType) => dispatch(changeActiveLocation(location)),
    []
  )

  const onChangeInputGeolocation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
      debounceInputSearch(event.target.value)
    },
    []
  )

  useEffect(() => {
    let location = searchParams.get('location')
    if (location) {
      setIsLoad(true)
      geocodingService.getLocations(location).then(({data}) => {
        setList(data)
        setIsLoad(false)
      })
    }
  }, [searchParams])

  const debounceInputSearch = useDebounceFunction((value: string) => {
    if (value) setSearchParams({location: value})
    else setSearchParams('')
  }, 1000)

  return (
    <HeaderStyle>
      <Portal>
        <Options
          isActive={isActiveOptionBar}
          onChange={onChangeStateOptionBar}
        />
      </Portal>
      <Logo />
      <NavStyle display={DisplayEnum.flex}>
        <InputSelect
          onChange={onChangeInputGeolocation}
          onClick={onClickValue}
          value={inputValue}
          label='Search'
          options={list}
          isLoad={isLoad}
        />
        <HeaderButton
          handler={() => onChangeStateOptionBar(!isActiveOptionBar)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#000000'
          >
            <path d='M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
          </svg>
        </HeaderButton>
      </NavStyle>
    </HeaderStyle>
  )
}

export default Header
