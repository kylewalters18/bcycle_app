import Routes from 'components/Routes';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    highlightedKiosk: state.kiosks.highlightedKiosk,
    routes: state.routes.routes,
    zoom: state.map.zoom,
    map: ownProps.map,
  };
}

const RoutesContainer = connect(
  mapStateToProps,
)(Routes);

export default RoutesContainer;
