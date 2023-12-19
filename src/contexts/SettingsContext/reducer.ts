import { Language, SettingsState } from "./initialState"
import { SettingsTypes } from "./types"

export type SettingsReducerAction = {
  type: SettingsTypes
  payload?: Language 
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
    case "CHANGE_LANGUAGE":
      if (!action.payload) return state
      return { ...state, language: action.payload }
    default:
      return state
  }
}