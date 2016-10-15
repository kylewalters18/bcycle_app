import Routes from 'components/routes';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    routes: state.routes.routes,
    zoom: state.zoom,
    map: ownProps.map,
  };
}

const RoutesContainer = connect(
  mapStateToProps,
)(Routes);

export default RoutesContainer;
