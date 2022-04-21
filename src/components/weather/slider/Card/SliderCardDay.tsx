import {format} from 'date-fns'
import React from 'react'
import {JustifyContentEnum} from '../../../../app/styles/stylesDisplay'
import {DailyForecastEightDaysElement} from '../../../../app/weather/dailyForecastEightDays'
import {BlockFlex} from '../../style/CardWeatherStyle'
import {
  SliderCard,
  SliderHeader,
  SliderIcon,
  SliderImage,
  SliderParagraph
} from '../styles/SliderCardStyles'

interface SliderCardWeatherProps {
  weather: DailyForecastEightDaysElement
}

const SliderCardDay: React.FC<SliderCardWeatherProps> = ({weather}) => {
  return (
    <SliderCard>
      <BlockFlex justifyContent={JustifyContentEnum.spaceBetween}>
        <SliderImage
          src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
          alt=''
        />
        <div>
          <SliderHeader>
            {weather && format(new Date(weather?.dt! * 1000), 'cccc')}
          </SliderHeader>
          <SliderParagraph>{Math.ceil(weather?.temp.day)}</SliderParagraph>
          <BlockFlex>
            <SliderIcon
              xmlns='http://www.w3.org/2000/SliderIcon'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z' />
            </SliderIcon>
            <SliderParagraph>{Math.ceil(weather?.pop! * 100)}%</SliderParagraph>
          </BlockFlex>
        </div>
      </BlockFlex>
      <BlockFlex justifyContent={JustifyContentEnum.spaceBetween}>
        <div>
          <BlockFlex>
            <SliderIcon
              xmlns='http://www.w3.org/2000/SliderIcon'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z' />
            </SliderIcon>
            <SliderParagraph>{Math.ceil(weather?.clouds)}%</SliderParagraph>
          </BlockFlex>
          <BlockFlex>
            <SliderIcon
              xmlns='http://www.w3.org/2000/SliderIcon'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M21.98,14H22H21.98z M5.35,13c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1 c1.19,0,1.4,0.98,3.31,1v-2c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1 c-1.19,0-1.42-1-3.33-1C3.38,11,3.24,12,2,12v2C3.9,14,4.17,13,5.35,13z M18.67,15c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1 c-1.95,0-2.1,1-3.34,1c-1.24,0-1.38-1-3.33-1c-1.95,0-2.1,1-3.34,1v2c1.95,0,2.11-1,3.34-1c1.24,0,1.38,1,3.33,1 c1.95,0,2.1-1,3.34-1c1.19,0,1.42,1,3.33,1c1.94,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1v-2C20.76,16,20.62,15,18.67,15z M5.35,9 c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.4,0.98,3.31,1V8 c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1C10.04,7,9.9,8,8.66,8C7.47,8,7.24,7,5.33,7 C3.38,7,3.24,8,2,8v2C3.9,10,4.17,9,5.35,9z' />
            </SliderIcon>
            <SliderParagraph>
              {Math.ceil(weather?.rain ? weather?.rain * 100 : 0)}%
            </SliderParagraph>
          </BlockFlex>
        </div>
        <div>
          <BlockFlex>
            <SliderIcon
              xmlns='http://www.w3.org/2000/SliderIcon'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M15,9.86L18.03,12L15,14.14V9.86 M6,9.86L9.03,12L6,14.14V9.86 M13,6v12l8.5-6L13,6L13,6z M4,6v12l8.5-6L4,6L4,6z' />
            </SliderIcon>
            <SliderParagraph>{Math.ceil(weather?.wind_speed)}m/s</SliderParagraph>
          </BlockFlex>
          <BlockFlex>
            <SliderIcon
              xmlns='http://www.w3.org/2000/SliderIcon'
              enable-background='new 0 0 24 24'
              viewBox='0 0 24 24'
              fill='#000000'
            >
              <path d='M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z' />
            </SliderIcon>
            <SliderParagraph>{Math.ceil(weather?.humidity)}%</SliderParagraph>
          </BlockFlex>
        </div>
      </BlockFlex>
      <SliderParagraph>
        <span>Pressure:</span> {Math.ceil(weather?.pressure)} Pa
      </SliderParagraph>
    </SliderCard>
  )
}

export default SliderCardDay
