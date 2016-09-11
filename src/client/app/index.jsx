import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import SideBar from 'sidebar';
import Map from 'map';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
	      checkoutKiosksEnabled: true,
	      returnKiosksEnabled: false
	    };

	    this.onCheckoutEnabled = this.onCheckoutEnabled.bind(this);
	   	this.onReturnEnabled = this.onReturnEnabled.bind(this);
	}

	onCheckoutEnabled() {
		this.setState({ checkoutKiosksEnabled: !this.state.checkoutKiosksEnabled });
	}

	onReturnEnabled() {
		this.setState({ returnKiosksEnabled: !this.state.returnKiosksEnabled });
	}

   	render () {
	    return (
			<div className='mdl-color--grey-900' style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={4}>
						<SideBar onCheckoutEnabled={ this.onCheckoutEnabled }
							 	 onReturnEnabled = { this.onReturnEnabled } />
					</Cell>
					<Cell col={8}>
						<Map checkoutKiosksEnabled={ this.state.checkoutKiosksEnabled }
							 returnKiosksEnabled = { this.state.returnKiosksEnabled } />
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

render(<App/>, document.getElementById('app'));