import { useContext, useState } from "react"
import styled from "styled-components"
import { SettingsContext, SettingsContextType } from "../contexts/SettingsContext"

type ToggleProps = {
  $toggle: boolean
}

const baseSize = 25

export function ToggleBtn() {
  console.log('here')
  const [toggle, setToggle] = useState(false)
  const { settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  const handleClick = () => {
    setToggle(!toggle)
    settingsDispatch({ type: "CHANGE_THEME" })
  }

  return (
    <Wrapper $toggle={toggle} onClick={handleClick}>
      <Circle $toggle={toggle} />
    </Wrapper>
  )
}

const Wrapper = styled.div<ToggleProps>`
  width: ${baseSize * 2}px;
  height: ${baseSize}px;
  padding: 0 3px;
  border-radius: 50px;
  border: ${({ $toggle }) => $toggle ? 'none' : '1px solid var(--tertiary-color)'};
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
  background-color: ${({ $toggle }) => $toggle ? '#fff' : 'var(--tertiary-color)'};
`