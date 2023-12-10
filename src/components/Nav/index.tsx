import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Navigationlinks } from "./NavigationLinks"
import { Redirectlinks } from "./Redirectlinks"
import { breakingPoints } from "../../breakingPoints"
import { BurguerMenu } from "./BurguerMenu"
import { useState } from "react"

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
      <Name>SA</Name>
      <LinksWrapper>
        {lg || <Navigationlinks />}
        <Redirectlinks />
        {lg && <BurguerMenu />}
      </LinksWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div<MainWrapperProps>`
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
  ${({ $hasScrolled }) => $hasScrolled ? 'background-color: var(--nav-color);' : 'background-color: transparent;' }
  ${({ $hasScrolled }) => $hasScrolled && 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.247);' }

  @media (max-width: ${breakingPoints.xxl}) {
    padding: var(--gap-2) var(--gap-5);
  }

  @media (max-width: ${breakingPoints.lg}) {
    padding: var(--gap-2) var(--gap-2);
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

const Name = styled.h3`
  color: var(--primary-color);
`