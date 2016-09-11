import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch } from 'react-mdl';


class SideBar extends React.Component {

	constructor() {
		super();

		this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
		this.handleReturnClick = this.handleReturnClick.bind(this);
	}

	handleCheckoutClick() {
		this.props.onCheckoutEnabled();
	}

	handleReturnClick() {
		this.props.onReturnEnabled();
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
					<Switch defaultChecked onClick={this.handleCheckoutClick}
							className='mdl-color-text--grey-100'>
						Show by Checkout Locations
					</Switch>
				</Cell>
				<Cell col={12}>
					<Switch onClick={this.handleReturnClick}
							className='mdl-color-text--grey-100'>
						Show by Return Locations
					</Switch>
				</Cell>
			</Grid>
		)
	}
}

export default SideBar;