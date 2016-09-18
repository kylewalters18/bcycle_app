import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Kiosks from 'components/Kiosks'

function mapStateToProps(state, ownProps) {
  return {
    toggle: state.controls,
    map: ownProps.map
  }
}

const VisibleKiosks = connect(
  mapStateToProps
)(Kiosks)

export default VisibleKiosks