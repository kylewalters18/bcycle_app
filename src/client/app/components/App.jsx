import { Cell, Grid } from 'react-mdl';

import MapContainer from 'containers/MapContainer';
import React from 'react';
import SideBar from 'components/SideBar';

const App = () =>
(
  <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
    <Grid>
      <Cell col={5}>
        <SideBar />
      </Cell>
      <Cell col={7}>
        <MapContainer />
      </Cell>
    </Grid>
  </div>
);

export default App;
