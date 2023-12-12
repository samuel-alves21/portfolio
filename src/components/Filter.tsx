import styled from "styled-components"
import { useContext } from "react"
import { SettingsContext, SettingsContextType } from "../contexts/SettingsContext"

type StyledFilterProps = {
  $shouldDisplay: boolean
}

export function Filter() {
  const { settingsState: { shouldDisplayNav } } = useContext(SettingsContext) as SettingsContextType

  return (
    <>
      <BlackFilter $shouldDisplay={shouldDisplayNav}/>
      <BlurFilter $shouldDisplay={shouldDisplayNav}/>
    </>
  )
}

const BlackFilter = styled.div<StyledFilterProps>`
  position: absolute;
  background-color: #000;
  transition: opacity 0.3s;
  opacity: ${({ $shouldDisplay }) => $shouldDisplay ? '0.7' : '0'};
  z-index: 5;
  pointer-events: none;
  width: 100%;
  height: 100%;
`

const BlurFilter = styled.div<StyledFilterProps>`
  position: absolute;
  transition: opacity 0.3s;
  opacity: ${({ $shouldDisplay }) => $shouldDisplay ? '0.5' : '0'};
  backdrop-filter: blur(10px);
  z-index: 4;
  pointer-events: none;
  width: 100%;
  height: 100%;
`