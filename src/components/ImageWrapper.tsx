import styled from "styled-components"

type StyledImageProps = {
  size: string;
}

type ImageProps = StyledImageProps & {
  src: string
  alt: string
  id?: string
  className?: string
  title?: string
}

export function ImageWrapper({ size, src, alt, id, className, title }: ImageProps) {
  return (
    <StyledImg src={src} alt={alt} size={size} id={id} className={className} title={title}/>
  )
}

const StyledImg = styled.img<StyledImageProps>`
  object-fit: cover;
  width: ${props => props.size};
`