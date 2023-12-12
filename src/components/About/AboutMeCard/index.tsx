import styled from "styled-components"
import { MainInfo } from "./MainInfo"
import { SubInfo } from "./SubInfo"
import { Line } from "../../Line"

export function AboutMeCard() {
  return (
    <Wrapper>
      <MainInfo />
      <SubInfo />
      <Line />
    </Wrapper>
  )  
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);
`



