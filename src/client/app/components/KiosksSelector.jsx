import { Radio, RadioGroup } from 'react-mdl';
import React, { PropTypes } from 'react';

const KiosksSelector = ({ selection, onClick }) =>
(
  <RadioGroup value={selection} name="kiosks" container="div" childContainer="div">
    <Radio
      value="checkout"
      className="headline mdl-color-text--grey-100"
      onClick={() => onClick('checkout')}
    >
      Checked out bicycles
    </Radio>
    <Radio
      value="return"
      className="headline mdl-color-text--grey-100"
      onClick={() => onClick('return')}
    >
      Returned bicycles
    </Radio>
  </RadioGroup>
);

KiosksSelector.propTypes = {
  selection: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default KiosksSelector;
