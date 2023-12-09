import styled from "styled-components"

import { Icons } from "./Icons"

export function TechStack() {
  return (
    <Wrapper id='tech-stack'>
      <h1>My Tech Stack</h1>
      <h4 className="subtitle-margin">Technologies I’ve been working with recently</h4>
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
  width: 100%;
`