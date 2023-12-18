import { useContext } from "react"
import styled from "styled-components"

import { SettingsContext, SettingsContextType } from "../../../contexts/SettingsContext"

export type TitleProps = {
  title: string
}

type StyledH5 = {
  $darkTheme: boolean
}

export function Title({ title } :TitleProps) {
  const { settingsState: { darkTheme } } = useContext(SettingsContext) as SettingsContextType

  return (
    <H5 $darkTheme={darkTheme}>{title}</H5>
  )
} 

const H5 = styled.h5<StyledH5>`
  font-weight: medium;
  color: ${({ $darkTheme }) => $darkTheme ? '#fff' : '#000'};
`