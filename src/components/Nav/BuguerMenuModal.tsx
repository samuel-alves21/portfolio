import styled from "styled-components"
import { useEffect, useContext } from "react"

import { Link } from "../Link"
import { links } from "../../utils/links"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

type WrapperProps = {
  $shouldDisplay: boolean
}

export function BuguerMenuModal() {
  const { settingsState: { shouldDisplayNav }, settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'close-icon' || !target.classList.contains('modal')) {
      settingsDispatch({ type: "CLOSE_NAV" })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return (
    <Wrapper $shouldDisplay={shouldDisplayNav} className='modal'>
      {links.map((id, index) => (
        <Link key={index} destinationId={id} text={id.replace(id[0], id[0].toUpperCase())} />
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