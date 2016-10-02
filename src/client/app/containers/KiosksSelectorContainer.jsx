import { connect } from 'react-redux';

import { toggle } from 'actions';
import KiosksSelector from 'components/KiosksSelector';


function mapStateToProps(state, ownProps) {
  return {
    selection: state.controls,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: kiosk => dispatch(toggle(kiosk)),
  };
}


const KiosksSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KiosksSelector);

export default KiosksSelectorContainer;
