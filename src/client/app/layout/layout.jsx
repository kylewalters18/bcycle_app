import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import Map from 'map';

class Layout extends React.Component {
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
					</Grid>
				</Cell>
				<Cell col={8}>
					<Map />
				</Cell>
			</Grid>
		</div>
    );
  }
}

export default Layout;