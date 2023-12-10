import styled from "styled-components"
import { useEffect, useContext } from "react"

import { Link } from "../Link"
import { NavContext, NavContextType } from "../../context"
import { links } from "../../links"

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
      {links.map((link, index) => (
        <Link key={index} destinationId={link.href} text={link.text} />
      ))}
      <div>
        <img src='img/closeIcon.svg' alt="close icon" id="close-icon"/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  background-color: var(--tertiary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2);
  padding: var(--gap-2);
  top: 0px;
  transition: right 0.3s ease-in-out;
  ${({ $shouldDisplay }) => $shouldDisplay ? 'right: 0px;' : 'right: -200px;'};
  z-index: 10;

  & span, span:visited {
    color: #fff;
  }

  & span::after {
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