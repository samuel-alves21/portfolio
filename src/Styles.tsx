import { createGlobalStyle } from 'styled-components' 

import { breakingPoints } from './utils/breakingPoints'

type GlobalStylesProps = {
  $darkTheme: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

  :root {
    --primary-color: #A501E6;
    --secundary-color: #003BE6;
    --tertiary-color: ${({ $darkTheme }) => $darkTheme ? '#fff' : '#666 '};
    --tertiary-color-light: #b3b3b3;
    --quaternary-color: #42446E;

    --nav-color:  ${({ $darkTheme }) => $darkTheme ? 'var(--dark-theme-color-light)' : '#efefef'};
    --mobile-nav-color: ${({ $darkTheme }) => $darkTheme ? 'var(--dark-theme-color-light)' : 'var(--tertiary-color)'};

    --dark-theme-color: #0d0d0d;
    --dark-theme-color-light: #232323;

    --gap-1 : 10px;
    --gap-2 : 20px;
    --gap-3 : 30px;
    --gap-4 : 40px;
    --gap-5 : 50px;
    --gap-6 : 60px;
    --gap-7 : 70px;
    --gap-8 : 80px;
    --gap-9 : 90px;
    --gap-10 : 100px;
    --gap-15 : 150px;
    --gap-20 : 200px;
    --gap-25 : 250px;

    position: relative;
    scroll-behavior: smooth;
    
    ::selection {
      background-color: var(--tertiary-color-light);
      color: #fff;
    }
  }

  .section-margin {
    margin-top: var(--gap-10);
  }

  .subtitle-margin {
    margin-top: var(--gap-1);
  }

  .nav-scroll {
    background-color: var(--tertiary-color-light);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${({ $darkTheme }) => $darkTheme ? 'var(--dark-theme-color)' : '#fff'};
    transition: background-color 0.3s ease-in-out;
  }

  p, a, a:visited, span {
    color: var( --tertiary-color);
    font-size: 1rem;
    text-decoration: none;
  }

  h1 {
    font-size: 3rem;
    color: var(--secundary-color);
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
    color: var(--tertiary-color);
    font-weight: normal;
  }

  h5 {
    font-size: 1.4rem;
    color: var(--tertiary-color);
    font-weight: normal;
  }

  @media (max-width: ${breakingPoints.xxl}) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${breakingPoints.md}) {
    .section-margin {
      margin-top: var(--gap-5);
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
    .subtitle-margin {
      margin-top: var(--gap-1);
    }

    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    a {
      font-size: 0.8rem;
    }
  }
`