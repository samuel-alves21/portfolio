import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

const burguerMenu = 'img/burguerMenu.svg'

export function BurguerMenu() {
  const { settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  return (
    <Wrapper onClick={() => settingsDispatch({ type: "OPEN_NAV" })}>
      <img src={burguerMenu} alt="menu burguer" className='modal'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  & img {
    width: 40px;
  }

  &:hover {
    cursor: pointer;

    & img {
      transition: opacity  0.3s;
      opacity: 0.5;
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
      & img {
      width: 30px;
    }
  }
`