import { useContext } from "react"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

import { languages } from "../../utils/languages"

export function AboutMe() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title, description } = languages[language].about

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}