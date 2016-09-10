import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch, Slider } from 'react-mdl';


class SideBar extends React.Component {

	constructor() {
		super();
		this.state = {
			kiosksEnabled: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({kiosksEnabled: !this.state.kiosksEnabled});
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
					<div className='mdl-typography--title mdl-typography--text-center mdl-color-text--grey-100'>
						Show by Time Period
					</div>
					<Slider min={0} max={100} defaultValue={25} />
				</Cell>
				<Cell col={12}>
					<Switch onClick={this.handleClick}
							className='mdl-color-text--grey-100'>
						Show by Checkout Locations
					</Switch>
				</Cell>
				<Cell col={12}>
					<Switch onClick={this.handleClick}
							className='mdl-color-text--grey-100'>
						Show by Return Locations
					</Switch>
				</Cell>
			</Grid>
		)
	}
}

export default SideBar;