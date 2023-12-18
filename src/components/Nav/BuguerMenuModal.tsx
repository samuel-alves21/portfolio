import styled from "styled-components"
import { useEffect, useContext } from "react"

import { Link } from "../Link"
import { links } from "../../utils/links"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

type WrapperProps = {
  $shouldDisplay: boolean
  $darkTheme: boolean
}

export function BuguerMenuModal() {
  const { settingsState: { shouldDisplayNav, darkTheme, language }, settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'close-icon' || !target.classList.contains('modal')) {
      if (!shouldDisplayNav) return
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
    <Wrapper $shouldDisplay={shouldDisplayNav} $darkTheme={darkTheme} className='modal'>
      {links[language].map((linkObj, index) => (
        <Link key={index} destinationId={linkObj.id} text={linkObj.name} />
      ))}
      <div>
        <img src='img/closeIcon.svg' alt="close icon" id="close-icon"/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-2);
  padding: var(--gap-2);
  top: 0px;
  transition: right 0.3s ease-in-out;
  right: ${({ $shouldDisplay }) => $shouldDisplay ? '0px;' : '-200px;'};
  background-color: ${({ $darkTheme }) => $darkTheme ? 'var(--dark-theme-color-light)' : 'var(--tertiary-color)'};
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