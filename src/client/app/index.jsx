import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import SideBar from 'sidebar';
import Map from 'map';


class App extends React.Component {
   	render () {
	    return (
			<div className='mdl-color--grey-900' style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={4}>
						<SideBar />
					</Cell>
					<Cell col={8}>
						<Map />
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

render(<App/>, document.getElementById('app'));