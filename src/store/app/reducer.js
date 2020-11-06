import { types } from './actions'

const initialState = {
  settings: {},
  spinners: {},
}

export default (appState = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_SPINNER:
      return {
        ...appState,
        spinners: {
          ...appState.spinners,
          [payload]: true,
        },
      }

    case types.HIDE_SPINNER:
      return {
        ...appState,
        spinners: {
          ...appState.spinners,
          [payload]: false,
        },
      }
    case types.SET_SETTINGS:
      return {
        ...appState,
        settings: {
          ...appState.settings,
          [payload.key]: payload.value,
        },
      }
    default:
      return appState
  }
}

export const selectSetting = key => state => state.app.settings[key]
