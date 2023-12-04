import styled from "styled-components";

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
  height: 200px;
  object-fit: cover;
`