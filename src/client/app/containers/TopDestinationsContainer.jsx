import Destinations from 'components/Destinations';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    destinations: ['Test 1', 'Test 2', 'Test 3'],
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
