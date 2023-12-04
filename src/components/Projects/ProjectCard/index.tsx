import styled from "styled-components"
import { HeaderImage } from "./HeaderImage"
import { Title } from "./Title"
import { Description } from "./Description"
import { Stack } from "./Stack"

export function ProjectCard() {
  return (
    <MainWrapper>
      <HeaderImage />
      <InfoWrapper>
        <Title />
        <Description /> 
        <Stack />
      </InfoWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.40);
  display: flex; 
  gap: 20px;
  flex-direction: column;
  border-radius: 15px;
  object-fit: cover;
  width: 400px;

  & img {
    border-radius: 15px 15px 0 0;
  }
`

const InfoWrapper = styled.div`
  display: flex; 
  gap: 20px;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
`