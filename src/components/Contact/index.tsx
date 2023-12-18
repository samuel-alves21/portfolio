import styled from "styled-components"
import { useContext } from "react"
import { useMediaQuery } from "react-responsive"

import { breakingPoints } from "../../utils/breakingPoints"
import { languages } from "../../utils/languages"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function Contact() {
  const sm = useMediaQuery({ query: `(max-width: ${breakingPoints.sm})` })
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title } = languages[language].contact

  return (
    <Wrapper id='contact'> 
    { 
      sm ? <><h5>{title}</h5> <h5 className='email'>samueltheodoro@gmail.com</h5></> :
      lg ? <><h2>{title}</h2> <h2 className='email'>samueltheodoro@gmail.com</h2></> :
      <><h1>{title}</h1> <h1 className='email'>samueltheodoro@gmail.com</h1></> 
    }
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
