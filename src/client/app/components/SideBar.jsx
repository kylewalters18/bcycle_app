import { Cell, Grid } from 'react-mdl';

import KiosksSelectorContainer from 'containers/KiosksSelectorContainer';
import React from 'react';
import TimelineContainer from 'containers/TimelineContainer';

const SideBar = () =>
(
  <Grid>
    <Cell col={12} className="mdl-layout-spacer" />
    <Cell col={12}>
      <TimelineContainer />
      <br />
      <br />
      <KiosksSelectorContainer />
    </Cell>
  </Grid>
);

export default SideBar;
