import { createContext, useState } from "react";

type NavProviderProps = {
  children: React.ReactNode;
}

export type NavContextType = {
  shouldDisplay: boolean;
  setShouldDisplay: (shouldDisplay: boolean) => void;
}

export const NavContext = createContext<null | NavContextType>(null)

export const NavProvider = ({ children }: NavProviderProps) => {
  const [shouldDisplay, setShouldDisplay] = useState(false)

  return (
    <NavContext.Provider value={{shouldDisplay, setShouldDisplay}}>
      {children}
    </NavContext.Provider>
  )
}