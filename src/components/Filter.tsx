import styled from "styled-components"
import { useContext } from "react"
import { NavContext, NavContextType } from "../context"

type StyledFilterProps = {
  $shouldDisplay: boolean
}

export function Filter() {
  const { shouldDisplay } = useContext(NavContext) as NavContextType

  return (
    <>
      <BlackFilter $shouldDisplay={shouldDisplay}/>
      <BlurFilter $shouldDisplay={shouldDisplay}/>
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