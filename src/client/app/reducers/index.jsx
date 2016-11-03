import { combineReducers } from 'redux';
import kiosks from 'reducers/kiosks';
import map from 'reducers/map';
import routes from 'reducers/routes';

const reducer = combineReducers({
  map,
  routes,
  kiosks,
});

export default reducer;
