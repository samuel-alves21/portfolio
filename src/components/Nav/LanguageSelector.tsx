import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import { countryFlags } from "../../utils/countryFlags"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"
import { Language } from "../../contexts/SettingsContext/initialState"

import { breakingPoints } from "../../utils/breakingPoints"

type OptionsWrapperProps = {
  $darkTheme: boolean
  $lg?: boolean
}

type LanguageSelectorProps = {
  $lg: boolean
  $display?: boolean
}

export function LanguageSelector() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [display, setDisplay] = useState(false)

  const { settingsState: { language, darkTheme, shouldDisplayNav }, settingsDispatch } = useContext(SettingsContext) as SettingsContextType

  const lg = useMediaQuery({ query: `(max-width: ${breakingPoints.lg})` })

  useEffect(() => {
    countryFlags.forEach((country) => {
      if (country.language === language) {
        setSelectedCountry(country.flag)
      }
    })
  }, [language])

  useEffect(() => {
    if (!shouldDisplayNav) {
      setDisplay(false)
    }
  }, [shouldDisplayNav])

  const setLanguage = (language: Language) => {
    settingsDispatch({ type: 'CHANGE_LANGUAGE', payload: language })
  }

  const openLanguageOptions = () => {
    if (!lg) return
    setDisplay(!display)
  }
  
  return (
    <Wrapper className="modal" $lg={lg}>
      <img src={selectedCountry} alt="usa flag" className="modal" onClick={openLanguageOptions}/>
      <DropDown className="modal" $display={display} $lg={lg}>
        {countryFlags.map((country, index) => (
          <OptionsWrapper $darkTheme={darkTheme} $lg={lg} className="modal" key={index}>
            <div onClick={() => setLanguage(country.language)} className="modal">
              { country.language === language && <DoneImg src='img/done.svg' alt="done icon" className="modal"/>} 
              <img src={country.flag} alt="" className="modal"/>
              <span className="modal">{country.text}</span>
            </div>
          </OptionsWrapper>
        ))}
      </DropDown>
    </Wrapper>
  )
}

const Wrapper= styled.div<LanguageSelectorProps>`
  display: flex;
  align-items: center;
  position: relative;

  & > img {
    cursor: pointer;
    width: ${({ $lg }) => $lg ? '40px' : '30px'};
  }

  & img {
    width: 30px;
  }

  &:hover {
    & > div {
      ${({ $lg }) => !$lg && 'display: block'}; 
    }
  }
`

const DropDown = styled.div<LanguageSelectorProps>`
  display: ${({ $display, $lg }) => $lg ? $display ? 'block' : 'none' : 'none'};
  position: absolute;
  top: ${({ $lg }) => $lg ? '-10px' : '30px'};
  right: ${({ $lg }) => $lg ? '50px' : '0'};
  width:  ${({ $lg }) => $lg ? '180px' : '200px'};
  padding: var(--gap-2) 0 0 0 ;
  background-color: ${({ $lg }) => $lg ? 'var(--mobile-nav-color)' : 'var(--nav-color)'};
  transition: background-color 0.3s ease-in-out;
`

const OptionsWrapper = styled.div<OptionsWrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 5px var(--gap-3);

  &:hover {
    background-color: ${({ $darkTheme, $lg }) => $darkTheme ? '#2c2c2c' : $lg ? '#929292' : '#d3d3d3'};
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