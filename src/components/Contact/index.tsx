import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"
import { languages } from "../../utils/languages"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function Contact() {
  const sm = useMediaQuery({ query: `(max-width: ${breakingPoints.sm})` })
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title } = languages[language].contact

  return (
    <Wrapper id='contact' data-aos="fade-up" data-aos-duration="1500"> 
      { 
        sm ? <><h5>{title}</h5> <h5 className='email'><Strong>samueltheodoro@gmail.com</Strong></h5></> :
        lg ? <><h2>{title}</h2> <h2 className='email'><Strong>samueltheodoro@gmail.com</Strong></h2></> :
        <><h1>{title}</h1> <h1 className='email'>samueltheodoro@gmail.com</h1></> 
      }
      <Button as='a' href={language === "en" ? 'resume-english.pdf' : 'resume.pdf' } download >Download CV</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & > *:not(:last-child) {
    color: var(--secundary-color);
  }

  & .email {
    color: var(--primary-color);
  }
`    

const Strong = styled.strong`
  color: var(--primary-color)
`

const Button = styled.button`
  margin: var(--gap-2) auto 0 auto;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  width: fit-content;
  padding: 5px 10px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`
