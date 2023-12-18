import styled from "styled-components"

import { Cards } from "./Cards"
import { useContext } from "react"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"
import { languages } from "../../utils/languages"

export function Projects() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { title, description }= languages[language].projects

  return (
    <Wrapper id='projects'>
      <h1>{title}</h1>
      <h4 className="subtitle-margin">{description}</h4>
      <Cards />
    </Wrapper>
  )
} 

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`