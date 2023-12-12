import { useState } from "react"
import styled from "styled-components"

type ToggleProps = {
  toggle: boolean
}

const baseSize = 30

export function ToggleBtn() {
  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper toggle={toggle} onClick={() => setToggle(!toggle)}>
      <Circle toggle={toggle} />
    </Wrapper>
  )
}

const Wrapper = styled.div<ToggleProps>`
  width: ${baseSize * 2}px;
  height: ${baseSize}px;
  padding: 0 3px;
  border-radius: 50px;
  border: 1px solid var(--tertiary-color);
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ toggle }) => toggle ? 'var(--primary-color)' : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`

const Circle = styled.div<ToggleProps>`
  height: ${baseSize - 6}px;
  width: ${baseSize - 6}px;
  border-radius: 50%;
  background-color: var(--tertiary-color);
  transform: ${({ toggle }) => toggle ? `translateX(${baseSize}px)` : 'translateX(0)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ toggle }) => toggle ? '#fff' : 'var(--tertiary-color)'};
`