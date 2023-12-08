import styled from "styled-components"

import { breakingPoints } from "../../breakingPoints"
import { Link } from "../Link"

export function Navigationlinks() {
  return (
    <Wrapper>
      <Link href="" text="Home" />
      <Link href="" text="About" />
      <Link href="" text="Tech Stack" /> 
      <Link href="" text="Projects" />
      <Link href="" text="Contact" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-5);

  @media (max-width: ${breakingPoints.xxl}) {
    gap: var(--gap-3);
  }
`

