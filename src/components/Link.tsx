import styled from "styled-components"

type LinkProps = {
  href: string
  text: string
  className?: string
}

export function Link({ href, text, className }: LinkProps) {
  return (
    <StyledLink className={className} href={href}>{text}</StyledLink>
  )
} 

const StyledLink = styled.a`
  font-size: 20px;
  position: relative;

  &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2.5px;
      width: 100%;
      background-color: var(--tertiary-color);
      transition: opacity 0.4s;
      opacity: 0;
    }

  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`