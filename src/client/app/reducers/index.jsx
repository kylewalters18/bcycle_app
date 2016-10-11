import { combineReducers } from 'redux';
import controls from 'reducers/toggle';
import routes from 'reducers/routes';
import trips from 'reducers/trips';
import zoom from 'reducers/zoom';

const reducer = combineReducers({
  controls,
  trips,
  zoom,
  routes,
});

export default reducer;
