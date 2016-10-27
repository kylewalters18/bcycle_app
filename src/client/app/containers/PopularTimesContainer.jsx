import Times from 'components/Times';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    times: ['Test 1', 'Test 2', 'Test 3'],
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}


const PopularTimes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Times);

export default PopularTimes;
