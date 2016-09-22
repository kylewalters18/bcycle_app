import { connect } from 'react-redux'

import { updateStartDay, updateEndDay, updateStartTime, updateEndTime } from 'actions'
import Timeline from 'components/Timeline'

function mapStateToProps(state, ownProps) {
  return {
    startDay: state.trips.start,
    startDay: state.trips.end
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateStartDay: (day) => dispatch(updateStartDay(day)),
    updateEndDay: (day) => dispatch(updateEndDay(day)),
    updateStartTime: (time) => dispatch(updateStartTime(time)),
    updateEndTime: (time) => dispatch(updateEndTime(time))
  }
}


const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)

export default TimelineContainer