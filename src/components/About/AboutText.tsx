import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { breakingPoints } from "../../breakingPoints"

export function AboutText() {
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  return (
    <H1>
      Hi, {lg || <br />}
      My name is <br />
      <Span>Samuel Alves</Span> <br />
      I built things for web
    </H1>
  )
}

const Span = styled.span`
  color: var(--primary-color);
`

const H1 = styled.h1`
  color: var(--secundary-color);
`
