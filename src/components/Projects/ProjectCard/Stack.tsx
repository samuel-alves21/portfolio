export type TechStackProps = {
  techStack: string
}

export function Stack({ techStack } :TechStackProps) {
  return (
    <p><strong style={{color: 'var( --primary-color)'}}>Teck Stack: </strong>{techStack}</p>
  )
}



