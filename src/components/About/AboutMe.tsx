import { useContext } from "react"
import styled from "styled-components"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

import { languages } from "../../utils/languages"

export function AboutMe() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title, description } = languages[language].about

  return (
    <>
      <h1>{title}</h1>
      <p>{description.initialDescription}<Strong>{description.descriptionHighlight01}</Strong>{description.middleText}<Strong>{description.descriptionHighlight02}</Strong>{description.finalDescription}</p>
    </>
  )
}

const Strong = styled.strong`
  color: var(--primary-color)
`