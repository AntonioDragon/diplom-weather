import React, {useRef, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../app/appStoreHooks'
import useClickOutside from '../../../hooks/useClickOutside'
import {changeActiveLanguage} from '../../../store/languages/languagesReducer'
import {getLanguages} from '../../../store/languages/languagesSelectors'
import {changeOptionTheme} from '../../../store/theme/themeReducer'
import {getThemeOptions} from '../../../store/theme/themeSlice'
import {
  ButtonOptions,
  LanguagesBar,
  OptionsBar,
  ThemesBar,
  TitleOptions
} from './OptionsStyles'

interface OptionsProps {
  isActive: boolean
  onChange: (state: boolean) => void
}

const Options: React.FC<OptionsProps> = ({isActive, onChange}) => {
  const {languages, activeLanguage} = useAppSelector(getLanguages)
  const optionsBar = useRef<HTMLDivElement>(null)
  const themeOptions = useAppSelector(getThemeOptions)
  const dispatch = useAppDispatch()

  useClickOutside(optionsBar.current!, () => onChange(false))

  return (
    <OptionsBar ref={optionsBar} isActive={isActive}>
      <LanguagesBar>
        <TitleOptions>Languages:</TitleOptions>
        {languages.map((language) => (
          <ButtonOptions
            onClick={() => dispatch(changeActiveLanguage(language))}
            key={language.id}
            isActive={activeLanguage.id === language.id}
          >
            {language.name}
          </ButtonOptions>
        ))}
      </LanguagesBar>
      <ThemesBar>
        <TitleOptions>Themes:</TitleOptions>
        {themeOptions.map((option) => (
          <ButtonOptions
            onClick={() => dispatch(changeOptionTheme(option.id))}
            key={option.id}
            isActive={option.isActive}
            isDisable={option.isDisable}
            disabled={option.isDisable}
          >
            {option.name}
          </ButtonOptions>
        ))}
      </ThemesBar>
    </OptionsBar>
  )
}

export default Options
