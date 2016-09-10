import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell, Switch, Slider } from 'react-mdl';

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
						<SideBar />
					</Cell>
					<Cell col={8}>
						<Map enabled={this.state.kiosksEnabled}/>
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

class SideBar extends React.Component {

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

export default Layout;