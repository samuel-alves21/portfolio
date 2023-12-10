import styled from "styled-components"

import { breakingPoints } from "../../breakingPoints"
import { Link } from "../Link"
import { links } from "../../links"

export function Navigationlinks() {
  return (
    <Wrapper>
      {links.map((link, index) => (
        <Link key={index} destinationId={link.href} text={link.text} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-5);
  color: var(--tertiary-color);

  @media (max-width: ${breakingPoints.xxl}) {
    gap: var(--gap-3);
  }
`

