import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { useState } from "react"

import { breakingPoints } from "../../utils/breakingPoints"

import { LanguageSelector } from "./LanguageSelector"
import { Navigationlinks } from "./NavigationLinks"
import { Redirectlinks } from "./Redirectlinks"
import { BurguerMenu } from "./BurguerMenu"
import { ToggleBtn } from "./ToggleBtn"
import { Logo } from "../Logo"


type MainWrapperProps = {
  $hasScrolled: boolean;
}

export function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false)

  window.onscroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  } 

  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  return (
    <MainWrapper $hasScrolled={hasScrolled}>
      <Logo />
      <LinksWrapper>
        {lg || 
        <>
          <LanguageSelector />
          <ToggleBtn />
          <Navigationlinks />
        </> }
        <Redirectlinks />
        {lg && <BurguerMenu />}
      </LinksWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.nav<MainWrapperProps>`
  transition: background-color 0.3s ease-in-out;
  max-width: 2000px;
  position: fixed;
  margin: 0 auto;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: var(--gap-1) var(--gap-15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: ${({ $hasScrolled }) => $hasScrolled ? 'var(--nav-color)' : 'transparent' };
  ${({ $hasScrolled }) => $hasScrolled && 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.247);' }

  & img {
    width: 30px;
  }

  @media (max-width: ${breakingPoints.xxl}) {
    padding: var(--gap-1) var(--gap-5);
  }

  @media (max-width: ${breakingPoints.lg}) {
    padding: var(--gap-1) var(--gap-2);
    gap: var(--gap-10);
  }

  @media (max-width: ${breakingPoints.sm}) {
    padding: 5px var(--gap-1);
    gap: var(--gap-10);
  }
`

const LinksWrapper = styled.div`
  display: flex;
  gap: var(--gap-5); 
  align-items: center;
  position: relative;

  @media (max-width: ${breakingPoints.xxl}) {
    gap: var(--gap-3);
  }

  @media (max-width: ${breakingPoints.lg}) {
    gap: var(--gap-2);
  }
`