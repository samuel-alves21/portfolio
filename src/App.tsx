import styled from "styled-components"

import { breakingPoints } from "./breakingPoints"
import { About } from "./components/About"
import { Nav } from "./components/Nav"
import { TechStack } from "./components/TechStack"
import { Projects } from "./components/Projects"

const App = () => {
  return (
    <MainWrapper>
      <Nav />
      <About />
      <TechStack />
      <Projects />
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
  margin: 0 auto;
  padding: 20px 150px;
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  gap: 200px; 
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${breakingPoints.xxl}) {
    padding: 20px 50px;
  }

  @media (max-width: ${breakingPoints.lg}) {
    padding: 20px 50px;
    gap: 100px;
  }

  @media (max-width: ${breakingPoints.sm}) {
    padding: 10px 15px;
    gap: 100px;
  }
`

export default App
