import { updateEndDay, updateEndTime, updateStartDay, updateStartTime } from 'actions';

import Timeline from 'components/Timeline';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    startDay: state.trips.start,
    endDay: state.trips.end,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateStartDay: day => dispatch(updateStartDay(day)),
    updateEndDay: day => dispatch(updateEndDay(day)),
    updateStartTime: time => dispatch(updateStartTime(time)),
    updateEndTime: time => dispatch(updateEndTime(time)),
  };
}


const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

export default TimelineContainer;
