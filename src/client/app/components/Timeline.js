import React from 'react'
import { render } from 'react-dom'

import { Textfield } from 'react-mdl'

class Timeline extends React.Component {
	render() {
		return (
			<div>
				<Textfield
				    onChange={() => {}}
				    pattern="-?[0-9]*(\.[0-9]+)?"
				    error="Input is not a number!"
				    label="Start..."
				    floatingLabel
				    className='mdl-color-text--grey-100'
				    onChange={ (event) => this.props.updateStart(event.target.value) }
				/>
				<Textfield
				    onChange={() => {}}
				    pattern="-?[0-9]*(\.[0-9]+)?"
				    error="Input is not a number!"
				    label="End..."
				    floatingLabel
				    className='mdl-color-text--grey-100'
				    onChange={ (event) => this.props.updateEnd(event.target.value) }
				/>
			</div>
		)
	}
}

export default Timeline;