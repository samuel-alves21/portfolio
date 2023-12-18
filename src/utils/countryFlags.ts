import { Language } from "../contexts/SettingsContext/initialState"

type languageObj = {
  language: Language
  text: string
  flag: string
}

export const countryFlags: Array<languageObj> = [
  {
    language: "en",
    text: 'english',
    flag: 'img/usa-flag.png'
  },
  {
    language: 'pt',
    text: 'portuguese',
    flag: 'img/brazil-flag.png'
  }
]