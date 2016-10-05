import Kiosks from 'components/Kiosks';
import { connect } from 'react-redux';
import { fetchTripsAsync } from 'actions';

function mapStateToProps(state, ownProps) {
  return {
    toggle: state.controls,
    checkoutKiosks: state.trips.checkoutKiosksTally,
    returnKiosks: state.trips.returnKiosksTally,
    zoom: state.zoom,
    map: ownProps.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInitialize: () => dispatch(fetchTripsAsync()),
  };
}


const KiosksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kiosks);

export default KiosksContainer;
