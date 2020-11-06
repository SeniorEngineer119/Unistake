import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import app from './app/reducer'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app,
    form,
  })

export default rootReducer
