import Destinations from 'components/Destinations';
import { connect } from 'react-redux';
import { mouseoverKiosk } from 'actions';

function mapStateToProps(state) {
  return {
    stationName: state.routes.stationName,
    destinations: state.routes.topDestinations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mouseoverKiosk: kiosk => dispatch(mouseoverKiosk(kiosk)),
  };
}


const TopDestinations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default TopDestinations;
