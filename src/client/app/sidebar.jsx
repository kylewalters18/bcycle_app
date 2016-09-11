import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch, RadioGroup, Radio } from 'react-mdl';


class SideBar extends React.Component {

	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onToggle();
	}

	render() {
		return (
			<Grid>
				<Cell col={12}>
					<div className='mdl-typography--display-2 mdl-color--black mdl-typography--text-center mdl-color-text--grey-100'>
						Denver B-Cycle
					</div>
				</Cell>
				<Cell col={12} className="mdl-layout-spacer"/>
				<Cell col={12}>
					<RadioGroup value="checkout" name="kiosks">
					    <Radio value="checkout" className='mdl-color-text--grey-100' onClick={ this.handleClick }>Checkout Kiosks</Radio>
					    <Radio value="return" className='mdl-color-text--grey-100' onClick={ this.handleClick }>Return Kiosks</Radio>
					</RadioGroup>
				</Cell>
			</Grid>
		)
	}
}

export default SideBar;