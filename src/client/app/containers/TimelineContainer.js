import { connect } from 'react-redux'

import { updateStartTime, updateEndTime } from 'actions'
import Timeline from 'components/Timeline'

function mapStateToProps(state, ownProps) {
  return {
    startTime: state.trips.start,
    endTime: state.trips.end
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateStart: (time) => dispatch(updateStartTime(time)),
    updateEnd: (time) => dispatch(updateEndTime(time))
  }
}


const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)

export default TimelineContainer