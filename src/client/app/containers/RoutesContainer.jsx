import Routes from 'components/routes';
import { connect } from 'react-redux';
import { fetchRoutes } from 'actions';

function mapStateToProps(state, ownProps) {
  return {
    routes: state.routes.routes,
    zoom: state.zoom,
    map: ownProps.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInitialize: () => dispatch(fetchRoutes()),
  };
}

const RoutesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

export default RoutesContainer;
