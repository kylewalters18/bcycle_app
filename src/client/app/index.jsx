import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import SideBar from 'sidebar';
import Map from 'map';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
	      toggle: true
	    };

	    this.handleCheckout = this.handleCheckout.bind(this);
	   	this.handleReturn = this.handleReturn.bind(this);
	}

	handleCheckout() {
		this.setState({ toggle: true });
	}

	handleReturn() {
		this.setState({ toggle: false });
	}

   	render () {
	    return (
			<div className='mdl-color--grey-900' style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={5}>
						<SideBar handleCheckout={ this.handleCheckout }
								 handleReturn={ this.handleReturn } />
					</Cell>
					<Cell col={7}>
						<Map toggle={ this.state.toggle } />
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

render(<App/>, document.getElementById('app'));