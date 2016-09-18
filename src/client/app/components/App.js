import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import SideBar from 'components/SideBar';
import Map from 'components/Map';


class App extends React.Component {
   	render () {
	    return (
			<div className='mdl-color--grey-900' style={{width: '100%', height: '100%', margin: 'auto'}}>
				<Grid>
					<Cell col={5}>
						<SideBar />
					</Cell>
					<Cell col={7}>
						<Map />
					</Cell>
				</Grid>
			</div>
	    );
  	}
}

export default App