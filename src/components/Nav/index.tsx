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
      <Name>Samuel Alves</Name>
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

  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 10px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $hasScrolled }) => $hasScrolled ? 'background-color: var(--tertiary-color-light);' : 'background-color: transparent;' }

  @media (max-width: ${breakingPoints.xxl}) {
    padding: 10px 50px;
  }

  @media (max-width: ${breakingPoints.lg}) {
    padding: 10px 25px;
  }

  @media (max-width: ${breakingPoints.sm}) {
    padding: 6px 15px;
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