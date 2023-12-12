import { SettingsState } from "./initialState"
import { SettingsTypes } from "./types"

export type SettingsReducerAction = {
  type: SettingsTypes
}

export type SettingsReducer = (state: SettingsState, action: SettingsReducerAction) => SettingsState

export const reducer: SettingsReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_NAV":
      return { ...state, shouldDisplayNav: true }
    case "CLOSE_NAV":
      return { ...state, shouldDisplayNav: false }
    case "CHANGE_THEME":
      return { ...state, darkTheme: !state.darkTheme }
    case "SET_EN":
      return { ...state, language: "en" }
    case "SET_PT":
      return { ...state, language: "pt" }
    default:
      return state
  }
}