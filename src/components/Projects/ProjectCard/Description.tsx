import styled from "styled-components"

export type DescriptionProps = {
  description: string
}

export function Description({ description } :DescriptionProps) {
  return (
    <P>
      {description}
    </P>
  )
}

const P = styled.p`
  text-align: left;
  font-weight: 300;
`
