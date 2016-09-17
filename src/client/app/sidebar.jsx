import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch, RadioGroup, Radio } from 'react-mdl';


class SideBar extends React.Component {

	constructor() {
		super();

		this.handleCheckout = this.handleCheckout.bind(this);
		this.handleReturn = this.handleReturn.bind(this);
	}

	handleCheckout() {
		this.props.handleCheckout();
	}

	handleReturn() {
		this.props.handleReturn();
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
					    <Radio value="checkout" className='mdl-color-text--grey-100' onClick={ this.handleCheckout }>Checkout Kiosks</Radio>
					    <Radio value="return" className='mdl-color-text--grey-100' onClick={ this.handleReturn }>Return Kiosks</Radio>
					</RadioGroup>
				</Cell>
			</Grid>
		)
	}
}

export default SideBar;