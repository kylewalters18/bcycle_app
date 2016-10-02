import React from 'react';

import { Grid, Cell } from 'react-mdl';

import KiosksSelectorContainer from 'containers/KiosksSelectorContainer';
import TimelineContainer from 'containers/TimelineContainer';

function SideBar() {
  return (
    <Grid>
      <Cell col={12}>
        <div className="mdl-typography--display-2 mdl-color--black mdl-typography--text-center mdl-color-text--grey-100">
          Denver B-Cycle
        </div>
      </Cell>
      <Cell col={12} className="mdl-layout-spacer" />
      <Cell col={12}>
        <TimelineContainer />
        <br />
        <br />
        <KiosksSelectorContainer />
      </Cell>
    </Grid>
    );
}


export default SideBar;
