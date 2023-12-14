import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { breakingPoints } from "../../utils/breakingPoints"

export function AboutText() {
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  return (
    <H1>
      Hi, {lg || <br />}
      My name is <br />
      <div>
        <StyledH1>Samuel Alves</StyledH1>
      </div>
      I built things for web
    </H1>
  )
}

const StyledH1 = styled.h1`
  color: var(--primary-color);
`

const H1 = styled.h1`
  color: var(--secundary-color);
`
