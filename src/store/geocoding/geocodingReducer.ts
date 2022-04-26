import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GeocodingType} from '../../app/geocoding/geocodingTypes'

interface initialStateData {
  activeLocation: GeocodingType | undefined
  geocodingFavorites: GeocodingType[]
  geocodingSearch: GeocodingType[]
}

const initialState: initialStateData = {
  activeLocation: {
    id: 0,
    name: 'Zaporizhzhia',
    local_names: {
      ru: 'Запорожье',
      et: 'Zaporižžja',
      lt: 'Zaporižia',
      uk: 'Запоріжжя',
      az: 'Zaporojya',
      sk: 'Zaporižžia',
      de: 'Saporischschja',
      eo: 'Zaporiĵo',
      cs: 'Záporoží',
      hu: 'Zaporizzsja',
      ko: '자포리자',
      es: 'Zaporiyia',
      pl: 'Zaporoże',
      fr: 'Zaporijia',
      ar: 'زاباروجيا',
      lv: 'Zaporižja',
      zh: '扎波里日扎',
      en: 'Zaporizhzhia',
      sh: 'Zaporižja',
      nl: 'Zaporizja',
      be: 'Запарожжа',
      sr: 'Запорожје',
      hr: 'Zaporižžja',
      tr: 'Zaporijjia',
      pt: 'Zaporizhzhya'
    },
    lat: 47.8507859,
    lon: 35.1182867,
    country: 'UA',
    state: 'Zaporizhia Oblast'
  },
  geocodingFavorites: [
    {
      id: 0,
      name: 'Zaporizhzhia',
      local_names: {
        ru: 'Запорожье',
        et: 'Zaporižžja',
        lt: 'Zaporižia',
        uk: 'Запоріжжя',
        az: 'Zaporojya',
        sk: 'Zaporižžia',
        de: 'Saporischschja',
        eo: 'Zaporiĵo',
        cs: 'Záporoží',
        hu: 'Zaporizzsja',
        ko: '자포리자',
        es: 'Zaporiyia',
        pl: 'Zaporoże',
        fr: 'Zaporijia',
        ar: 'زاباروجيا',
        lv: 'Zaporižja',
        zh: '扎波里日扎',
        en: 'Zaporizhzhia',
        sh: 'Zaporižja',
        nl: 'Zaporizja',
        be: 'Запарожжа',
        sr: 'Запорожје',
        hr: 'Zaporižžja',
        tr: 'Zaporijjia',
        pt: 'Zaporizhzhya'
      },
      lat: 47.8507859,
      lon: 35.1182867,
      country: 'UA',
      state: 'Zaporizhia Oblast'
    },
    {
      id: 1,
      name: 'Kyiv',
      local_names: {
        sq: 'Kievi',
        fr: 'Kyïv',
        cs: 'Kyjev',
        tl: 'Kiev',
        uz: 'Kiyev',
        el: 'Κίεβο',
        lt: 'Kijevas',
        qu: 'Kiyiw',
        ga: 'Cív',
        sw: 'Kiev',
        it: 'Kyiv',
        kl: 'Kyiv',
        sh: 'Kyiv',
        sc: 'Kiev',
        gd: 'Kyiv',
        cy: 'Kyiv',
        th: 'เคียฟ',
        bg: 'Киев',
        cv: 'Кийӳ',
        ta: 'கீவ்',
        la: 'Kiovia',
        bo: 'ཀིབ།',
        fo: 'Kyiv',
        yo: 'Kiev',
        vi: 'Kyiv',
        lb: 'Kiew',
        de: 'Kiew',
        pt: 'Kiev',
        tt: 'Киев',
        pa: 'ਕੀਵ',
        oc: 'Kyiiv',
        ug: 'كىيېۋ',
        nl: 'Kiev',
        hu: 'Kijev',
        jv: 'Kyiv',
        mr: 'क्यीव',
        mk: 'Киев',
        bs: 'Kijev',
        ur: 'کیف',
        mi: 'Kieu',
        ab: 'Кыив',
        et: 'Kõjiv',
        tw: 'Kiev',
        an: 'Kyiv',
        tr: 'Kıyiv',
        he: 'קייב',
        zu: 'IKiyevi',
        zh: '基辅',
        feature_name: 'Kyiv',
        ky: 'Киев',
        ht: 'Kyèv',
        fi: 'Kiova',
        af: 'Kyiv',
        ca: 'Kíiv',
        se: 'Kiova',
        hi: 'कीव',
        ie: 'Kyiv',
        te: 'క్యివ్',
        uk: 'Київ',
        ascii: 'Kyiv',
        nn: 'Kiev',
        wo: 'Kiyew',
        ia: 'Kiev',
        ln: 'Kyjiw',
        ku: 'Kîev',
        hy: 'Կիև',
        kk: 'Киев',
        bi: 'Kyiv',
        mt: 'Kjiv',
        os: 'Киев',
        is: 'Kænugarður',
        sl: 'Kijev',
        eu: 'Kiev',
        gl: 'Kiev',
        ko: '키이우',
        no: 'Kiev',
        fy: 'Kiev',
        id: 'Kyiv',
        cu: 'Кꙑѥвъ',
        vo: 'Küyiv',
        fa: 'کی‌یف',
        ja: 'キエフ',
        am: 'ኪየቭ',
        gv: 'Kyiv',
        sv: 'Kiev',
        br: 'Kyiv',
        ro: 'Kiev',
        az: 'Kiyev',
        kv: 'Киев',
        hr: 'Kijev',
        ms: 'Kiev',
        es: 'Kyiv',
        my: 'ကီးယက်မြို့',
        da: 'Kyiv',
        kn: 'ಕೀವ್',
        ar: 'كييف',
        tg: 'Киев',
        sk: 'Kyjev',
        sr: 'Кијев',
        eo: 'Kijivo',
        lv: 'Kijeva',
        pl: 'Kijów',
        ba: 'Киев',
        en: 'Kyiv',
        ka: 'კიევი',
        be: 'Кіеў',
        mn: 'Киев',
        bn: 'কিয়েভ',
        ml: 'കീവ്',
        yi: 'קיעוו',
        ru: 'Киев',
        io: 'Kyiv'
      },
      lat: 50.4500336,
      lon: 30.5241361,
      country: 'UA'
    },
    {
      id: 2,
      name: 'Świdnica',
      local_names: {
        mk: 'Швидњица',
        ru: 'Свидница',
        uk: 'Свідниця',
        la: 'Svidnitium',
        lt: 'Svidnica',
        pl: 'Świdnica',
        cs: 'Svídnice',
        de: 'Schweidnitz'
      },
      lat: 50.8424835,
      lon: 16.4870549,
      country: 'PL',
      state: 'Lower Silesian Voivodeship'
    }
  ],
  geocodingSearch: []
}
const geocodingSlide = createSlice({
  name: 'geocoding',
  initialState,
  reducers: {
    changeActiveLocation: (state, action: PayloadAction<GeocodingType>) => {
      state.activeLocation = action.payload
    },
    addFavoriteByWether: (state, action: PayloadAction<GeocodingType>) => {
      state.geocodingFavorites.push({
        id: state.geocodingFavorites.at(-1)?.id! + 1,
        ...action.payload
      })
    },
    deleteFavoriteToDefault: (state, action: PayloadAction<GeocodingType>) => {
      const favoriteIndex = state.geocodingFavorites.findIndex(
        (location) =>
          location.name === action.payload.name &&
          location.country === action.payload.country &&
          location.state === action.payload.state
      )
      if (favoriteIndex !== -1)
        state.geocodingFavorites.splice(favoriteIndex, 1)
    }
  }
})

export const {
  addFavoriteByWether,
  deleteFavoriteToDefault,
  changeActiveLocation
} = geocodingSlide.actions

export default geocodingSlide.reducer
