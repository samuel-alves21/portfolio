import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"
import { languages } from "../../utils/languages"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function AboutText() {
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { text01, text02, text03 }= languages[language].home

  return (
    <H1>
      {text01}, {lg || <br />}
      {text02} <br />
      <div>
        <StyledH1>Samuel Alves,</StyledH1>
      </div>
      {text03}
    </H1>
  )
}

const StyledH1 = styled.h1`
  color: var(--primary-color);
`

const H1 = styled.h1`
  color: var(--secundary-color);
`
