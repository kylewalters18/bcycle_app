import { fetchKiosks, selectKiosk } from 'actions';

import Kiosks from 'components/Kiosks';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    toggle: state.controls,
    kiosks: state.kiosks.kiosks,
    zoom: state.map.zoom,
    map: ownProps.map,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInitialize: () => dispatch(fetchKiosks()),
    selecteKiosk: id => dispatch(selectKiosk(id)),
  };
}


const KiosksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kiosks);

export default KiosksContainer;
