import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { RadioGroup, Radio } from 'react-mdl'

class KiosksSelector extends React.Component {
  render() {
    let input

    return (
      <RadioGroup value={ this.props.selection } name="kiosks" container="div" childContainer="div">
          <Radio value="checkout"
                 className='mdl-color-text--grey-100'
                 onClick={ () => this.props.onClick('checkout')}>
            Checked out bicycles
          </Radio>
          <Radio value="return"
                 className='mdl-color-text--grey-100'
                 onClick={ () => this.props.onClick('return')}>
            Returned bicycles
          </Radio>
      </RadioGroup>
    )
  }
}

export default KiosksSelector