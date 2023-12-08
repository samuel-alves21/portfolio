import styled from "styled-components"

import { Icons } from "./Icons"

export function TechStack() {
  return (
    <Wrapper>
      <h1>My Tech Stack</h1>
      <h4 style={{marginTop: '20px'}}>Technologies I’ve been working with recently</h4>
      <Icons />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`