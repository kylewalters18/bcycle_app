import React from 'react';
import { render } from 'react-dom';

import { Grid, Cell } from 'react-mdl';

import KioskRadio from 'containers/KioskRadio';

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
					<KioskRadio />
				</Cell>
			</Grid>
		)
	}
}

export default SideBar;