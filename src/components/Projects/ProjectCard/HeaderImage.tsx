import styled from "styled-components";

import { breakingPoints } from "../../../utils/breakingPoints";

export type HeaderImageProps = {
  img: string
}

export function HeaderImage({ img } :HeaderImageProps) {
  return (
    <Img src={img} alt="Study Pom"/>
  )
}

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (max-width: ${breakingPoints.md}) {
    height: 150px;
  }

  @media (max-width: ${breakingPoints.sm}) {
    height: 100px;
  }
`