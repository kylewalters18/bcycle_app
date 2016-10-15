import Kiosks from 'components/Kiosks';
import { connect } from 'react-redux';
import { fetchKiosks } from 'actions';

function mapStateToProps(state, ownProps) {
  return {
    toggle: state.controls,
    kiosks: state.kiosks.kiosks,
    zoom: state.zoom,
    map: ownProps.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInitialize: () => dispatch(fetchKiosks()),
    updateSelectedKiosk: id => console.log(id),
  };
}


const KiosksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kiosks);

export default KiosksContainer;
