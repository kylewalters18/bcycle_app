import Times from 'components/Times';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    histogram: state.times.histogram,
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
