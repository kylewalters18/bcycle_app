import { combineReducers } from 'redux'

import controls from 'reducers/toggle'
import trips from 'reducers/trips'
import zoom from 'reducers/zoom'

const reducer = combineReducers({
  controls,
  trips,
  zoom
})

export default reducer
