import { Dispatch, createContext, useReducer } from "react";
import { SettingsState, initialState } from "./initialState";
import { SettingsReducerAction, reducer } from "./reducer";

type NavProviderProps = {
  children: React.ReactNode;
}

export type SettingsContextType = {
  settingsState: SettingsState
  settingsDispatch: Dispatch<SettingsReducerAction>
}

export const SettingsContext = createContext<null | SettingsContextType>(null)

export const SettingsProvider = ({ children }: NavProviderProps) => {
  const [settingsState, settingsDispatch] = useReducer(reducer, initialState)

  return (
    <SettingsContext.Provider value={{settingsState, settingsDispatch}}>
      {children}
    </SettingsContext.Provider>
  )
}