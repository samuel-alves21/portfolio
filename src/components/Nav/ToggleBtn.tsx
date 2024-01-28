import { useMediaQuery } from "react-responsive"
import { useContext, useState } from "react"
import styled from "styled-components"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

import { breakingPoints } from "../../utils/breakingPoints"

type ToggleProps = {
  $toggle: boolean
  $lg: boolean
}

const baseSize = 25

export function ToggleBtn() {
  const [toggle, setToggle] = useState(false)
  const { settingsState: { darkTheme }, settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  const handleClick = () => {
    setToggle(!toggle)
    settingsDispatch({ type: "CHANGE_THEME" })
  }

  const moonImg = darkTheme ? 'img/moon-on.png' : 'img/moon-off.png'

  return (
    <Wrapper className='modal'>
      {lg || <img src={moonImg} alt="sun icon" className='modal'/>} 
      <ToggleWrapper $lg={lg} $toggle={toggle} onClick={handleClick} className='modal'>
        <Circle $lg={lg} $toggle={toggle} className='modal'/>
      </ToggleWrapper>
    </Wrapper>
  )
}

const ToggleWrapper = styled.div<ToggleProps>`
  width: ${baseSize * 2}px;
  height: ${baseSize}px;
  padding: 0 3px;
  border-radius: 50px;
  border: ${({ $toggle, $lg }) => $toggle ? 'none' : $lg ? '1px solid #fff' : '1px solid var(--tertiary-color)'};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $toggle }) => $toggle ? 'var(--primary-color)' : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`

const Circle = styled.div<ToggleProps>`
  height: ${baseSize - 6}px;
  width: ${baseSize - 6}px;
  border-radius: 50%;
  background-color: var(--tertiary-color);
  transform: ${({ $toggle }) => $toggle ? `translateX(${baseSize}px)` : 'translateX(0)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ $toggle, $lg }) => $toggle || $lg ? '#fff' : 'var(--tertiary-color)'};
`

const Wrapper = styled.div`
  display: flex;
  gap: var(--gap-2);
  align-items: center;

  & > img {
    transform: rotate(6deg)
  }
`