import Map from 'components/Map';
import { connect } from 'react-redux';
import { zoom } from 'actions';

function mapStateToProps(state) {
  return {
    zoom: state.map.zoom,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onZoom: level => dispatch(zoom(level)),
  };
}


const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
