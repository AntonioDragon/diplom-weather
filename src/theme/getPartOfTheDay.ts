import {lightFormat} from 'date-fns'

export enum PartDay {
  night = 'night',
  morning = 'morning',
  afternoon = 'afternoon',
  evening = 'evening'
}

const getPartOfTheDay = () => {
  const today = new Date()
  switch (Number(lightFormat(today, 'H'))) {
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
      return PartDay.night
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return PartDay.morning
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      return PartDay.afternoon
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
      return PartDay.evening
  }
}

export default getPartOfTheDay
