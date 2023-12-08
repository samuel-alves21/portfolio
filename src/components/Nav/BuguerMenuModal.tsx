import styled from "styled-components"

import { Link } from "../Link"
import { useEffect, useContext } from "react"
import { NavContext, NavContextType } from "../../context"

type WrapperProps = {
  $shouldDisplay: boolean
}

export function BuguerMenuModal() {
  const { shouldDisplay, setShouldDisplay } = useContext(NavContext) as NavContextType

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'close-icon' || !target.classList.contains('modal')) {
      setShouldDisplay(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return (
    <Wrapper $shouldDisplay={shouldDisplay} className='modal'>
      <Link href="" text="Home" className='modal'/>
      <Link href="" text="About" className='modal'/>
      <Link href="" text="Tech Stack" className='modal'/> 
      <Link href="" text="Projects" className='modal'/>
      <Link href="" text="Contact" className='modal'/>
      <div>
        <img src='img/closeIcon.svg' alt="close icon" id="close-icon"/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside<WrapperProps>`
  position: absolute;
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2);
  padding: 20px;
  top: -23px;
  transition: right 0.3s ease-in-out;
  ${({ $shouldDisplay }) => $shouldDisplay ? 'right: -52px;' : 'right: -205px;'};
  z-index: 10;

  & a, a:visited {
    color: #fff;
  }

  & a::after {
    background-color: #fff;
  }

  & img {
    width: 20px;
  }

  & img:hover {
    transition: opacity 0.3s;
    opacity: 0.8;
    cursor: pointer
  }
`