import { combineReducers } from 'redux'
import controls from 'reducers/toggle'
import trips from 'reducers/trips'

const reducer = combineReducers({
  controls,
  trips
})

export default reducer
