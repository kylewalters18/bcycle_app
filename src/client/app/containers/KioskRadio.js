import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { toggle } from 'actions'

import { RadioGroup, Radio } from 'react-mdl'

class KioskRadio extends React.Component {
  render() {
    let input

    return (
      <RadioGroup value="checkout" name="kiosks">
          <Radio value="checkout"
                 className='mdl-color-text--grey-100'
                 onClick={ () => this.props.dispatch(toggle('checkout'))}>
            Checkout Kiosks
          </Radio>
          <Radio value="checkout"
                 className='mdl-color-text--grey-100'
                 onClick={ () => this.props.dispatch(toggle('return'))}>
            Return Kiosks
          </Radio>
      </RadioGroup>
    )
  }
}

KioskRadio = connect()(KioskRadio)

export default KioskRadio