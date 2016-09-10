import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch } from 'react-mdl';

import Map from 'map';

class Layout extends React.Component {
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

  	render () {
	    return (
			<div className='mdl-color--grey-900' style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={4}>
						<Grid>
							<Cell col={12}>
								<h3 className='mdl-shadow--8dp mdl-color--black mdl-typography--text-center mdl-color-text--grey-100'>
									Denver B-Cycle
								</h3>
							</Cell>
							<Cell col={12}>
								<h6 className='mdl-shadow--8dp mdl-color--black mdl-typography--text-center mdl-color-text--grey-100'>
									Controls
								</h6>
							</Cell>
							<Cell col={12}>
								<Switch onClick={this.handleClick}
										className='mdl-color-text--grey-100'>
									Kiosk Locations
								</Switch>
							</Cell>
						</Grid>
					</Cell>
					<Cell col={8}>
						<Map enabled={this.state.kiosksEnabled}/>
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

export default Layout;