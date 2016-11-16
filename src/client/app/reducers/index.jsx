import { combineReducers } from 'redux';
import kiosks from 'reducers/kiosks';
import map from 'reducers/map';
import routes from 'reducers/routes';
import times from 'reducers/times';

const reducer = combineReducers({
  map,
  routes,
  kiosks,
  times,
});

export default reducer;
