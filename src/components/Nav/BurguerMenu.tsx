import styled from "styled-components"
import { useContext } from "react"

import { NavContext, NavContextType } from "../../context"

const burguerMenu = 'img/burguerMenu.svg'

export function BurguerMenu() {
  const { setShouldDisplay } = useContext(NavContext) as NavContextType

  return (
    <Wrapper onClick={() => setShouldDisplay(true)}>
      <img src={burguerMenu} alt="menu burguer" className='modal'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;

    & img {
      transition: opacity  0.3s;
      opacity: 0.5;
      width: 40px;
    }
  }
`