import styled from "styled-components"

import { MainInfo, MainInfoProps } from "./MainInfo"
import { SubInfo, SubInfoProps } from "./SubInfo"
import { Line } from "../../Line"

type AboutMeCardProps = MainInfoProps & SubInfoProps

export function AboutMeCard({
  title, 
  description, 
  company, 
  initialMounth, 
  initialYear, 
  finalMounth, 
  finalYear, 
  location  
} :AboutMeCardProps) {

  const needSubInfo = company || location || (initialMounth && initialYear && finalMounth && finalYear)

  return (
    <Wrapper>
      <MainInfo title={title} description={description}/>
      { needSubInfo &&
        <SubInfo 
        company={company} 
        location={location} 
        initialMounth={initialMounth} 
        initialYear={initialYear} 
        finalMounth={finalMounth} 
        finalYear={finalYear} />
      }
      <Line />
    </Wrapper>
  )  
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-1);

  & h4 {
    text-align: left;
  }
`



