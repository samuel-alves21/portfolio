import styled from "styled-components"

export type TitleProps = {
  title: string
}

export function Title({ title } :TitleProps) {
  return (
    <H5>{title}</H5>
  )
} 

const H5 = styled.h5`
  font-weight: medium;
  color: #000;
`