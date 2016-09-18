import { connect } from 'react-redux'

import { zoom } from 'actions'
import Map from 'components/Map'

function mapStateToProps(state, ownProps) {
  return {
    zoom: state.zoom
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onZoom: (level) => dispatch(zoom(level))
  }
}


const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer