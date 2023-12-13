import styled from "styled-components"
import { breakingPoints } from "../../utils/breakingPoints"
import { useMediaQuery } from "react-responsive"

export function Contact() {
  const sm = useMediaQuery({ query: `(max-width: ${breakingPoints.sm})` })
  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  return (
    <Wrapper id='contact'> 
    { 
      sm ? <><h5>To make contact, please mail me:</h5> <h5 className='email'>samueltheodoro@gmail.com</h5></> :
      lg ? <><h2>To make contact, please mail me:</h2> <h2 className='email'>samueltheodoro@gmail.com</h2></> :
      <><h1>To make contact, please mail me:</h1> <h1 className='email'>samueltheodoro@gmail.com</h1></> 
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
