import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Navigationlinks } from "./NavigationLinks"
import { Redirectlinks } from "./Redirectlinks"
import { breakingPoints } from "../../breakingPoints"
import { BurguerMenu } from "./BurguerMenu"
import { BuguerMenuModal } from "./BuguerMenuModal"

export function Nav() {
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  return (
    <MainWrapper>
      <Name>Samuel Alves</Name>
      <LinksWrapper>
        {lg || <Navigationlinks />}
        <Redirectlinks />
        {lg && <BurguerMenu />}
        {lg && <BuguerMenuModal />}
      </LinksWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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