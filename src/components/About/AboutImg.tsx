import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'

import { ImageWrapper } from "../ImageWrapper"
import { breakingPoints } from "../../breakingPoints"

type WrapperProps = {
  size: string
}

const myimage = 'img/myPhoto03.png'

export function AboutImg() {
  const xxl = useMediaQuery({ query: `(max-width: ${breakingPoints.xxl})` })
  const sm = useMediaQuery({ query: `(max-width: ${breakingPoints.sm})` })
  const size = sm ? '250px' : xxl ? '350px' : '500px'

  return (
    <Wrapper size={size}>
      <ImageWrapper src={myimage} alt={'developer image'} size={size}/>
    </Wrapper>
  )
} 

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size }) => size};
  width:  ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 8px solid #A501E6;
`