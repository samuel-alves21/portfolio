import styled from "styled-components"

import { breakingPoints } from "../../utils/breakingPoints"
import { Link } from "../Link"
import { links } from "../../utils/links"

export function Navigationlinks() {
  return (
    <Wrapper>
      {links.map((id, index) => (
        <Link key={index} destinationId={id} text={id.replace(id[0], id[0].toUpperCase())} />
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

