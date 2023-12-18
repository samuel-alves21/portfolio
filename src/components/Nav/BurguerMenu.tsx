import styled from "styled-components"
import { useContext } from "react"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function BurguerMenu() {
  const { settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  return (
    <Wrapper onClick={() => settingsDispatch({ type: "OPEN_NAV" })}>
      <img src='img/burguerMenu.svg' alt="menu burguer" className='modal'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;

    & img {
      transition: opacity  0.3s;
      opacity: 0.5;
    }
  }
`