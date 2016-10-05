import KiosksSelector from 'components/KiosksSelector';
import { connect } from 'react-redux';
import { toggle } from 'actions';

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
