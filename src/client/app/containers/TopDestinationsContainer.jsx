import Destinations from 'components/Destinations';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    destinations: state.routes.topDestinations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}


const TopDestinations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Destinations);

export default TopDestinations;
