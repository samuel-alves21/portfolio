import styled from "styled-components"
import { countryFlags } from "../../utils/countryFlags"
import { useContext, useEffect, useState } from "react"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

type OptionsWrapperProps = {
  $darkTheme: boolean
}

export function LanguageSelector() {
  const [selectedCountry, setSelectedCountry] = useState('')

  const { settingsState: { language, darkTheme } } = useContext(SettingsContext) as SettingsContextType

  useEffect(() => {
    countryFlags.forEach((country) => {
      if (country.language === language) {
        setSelectedCountry(country.flag)
      }
    })
  }, [language])
  
  return (
    <Wrapper>
      <img src={selectedCountry} alt="usa flag" />
      <DropDown>
        {countryFlags.map((country) => (
          <OptionsWrapper $darkTheme={darkTheme}>
            <div>
              { country.language === language && <DoneImg src='img/done.svg' alt="done icon" />} 
              <img src={country.flag} alt="" />
              <span>{country.text}</span>
            </div>
          </OptionsWrapper>
        ))}
      </DropDown>
    </Wrapper>
  )
}

const Wrapper= styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > img {
    cursor: pointer;
  }

  &:hover {
    & > div {
      display: block;
    }
  }
`

const DropDown = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 30px;
  width: 200px;
  padding: var(--gap-2) 0 0 0 ;
  background-color: var(--nav-color);
  transition: background-color 0.3s ease-in-out;
`

const OptionsWrapper = styled.div<OptionsWrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 5px var(--gap-3);

  &:hover {
    background-color: ${({ $darkTheme }) => $darkTheme ? '#2c2c2c' : '#d3d3d3'} ;
  }

  & div {
    display: flex;
    align-items: center;
    position: relative;
    gap: var(--gap-1);
  }
`

const DoneImg = styled.img`
  position: absolute;
  width: 15px !important; 
  left: -20px;
`