import { combineReducers } from 'redux';
import kiosks from 'reducers/kiosks';
import routes from 'reducers/routes';
import zoom from 'reducers/zoom';

const reducer = combineReducers({
  zoom,
  routes,
  kiosks,
});

export default reducer;
