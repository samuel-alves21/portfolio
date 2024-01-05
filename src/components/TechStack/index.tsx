import styled from "styled-components"
import { useContext } from "react"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

import { languages } from "../../utils/languages"

import { Icons } from "./Icons"

export function TechStack() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { title, description }= languages[language].teckStack

  return (
    <Wrapper id='tech-stack' data-aos="fade-up" data-aos-duration="1500">
      <h1>{title}</h1>
      <h4 className="subtitle-margin">{description}</h4>
      <Icons />
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