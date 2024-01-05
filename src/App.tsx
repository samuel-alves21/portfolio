import styled from "styled-components"
import { useContext, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { breakingPoints } from "./utils/breakingPoints"

import { Home } from "./components/Home"
import { Nav } from "./components/Nav"
import { TechStack } from "./components/TechStack"
import { Projects } from "./components/Projects"
import { BuguerMenuModal } from "./components/Nav/BuguerMenuModal"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./Styles"

import { SettingsContext, SettingsContextType } from "./contexts/SettingsContext"

const App = () => {
  const { settingsState: { darkTheme } } = useContext(SettingsContext) as SettingsContextType

  useEffect(() => {
    AOS.init()
  })
  
  return (
    <MainWrapper>
      <GlobalStyles $darkTheme={darkTheme}/>
      <BuguerMenuModal />
      <Nav />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
  margin: 0 auto;
  padding: var(--gap-2) var(--gap-15);
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  gap: 200px; 
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${breakingPoints.xxl}) {
    padding: var(--gap-2) var(--gap-5);
  }

  @media (max-width: ${breakingPoints.lg}) {
    align-items: center;
    padding: var(--gap-2) var(--gap-2);
    gap: var(--gap-10);
  }

  @media (max-width: ${breakingPoints.sm}) {
    padding: var(--gap-1) var(--gap-1);
    gap: var(--gap-10);
  }
`

export default App
