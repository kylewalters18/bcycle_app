import { connect } from 'react-redux'
import { fetchTripsAsync } from 'actions'
import Kiosks from 'components/Kiosks'

function mapStateToProps(state, ownProps) {
  return {
    toggle: state.controls,
    checkoutKiosks: state.trips.checkoutKiosksTally,
    returnKiosks: state.trips.returnKiosksTally,
    map: ownProps.map
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInitialize: () => dispatch(fetchTripsAsync())
  }
}


const VisibleKiosks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kiosks)

export default VisibleKiosks