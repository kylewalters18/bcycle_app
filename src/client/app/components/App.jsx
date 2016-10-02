import React from 'react';

import { Grid, Cell } from 'react-mdl';

import SideBar from 'components/SideBar';
import MapContainer from 'containers/MapContainer';


function App() {
  return (
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
}

export default App;
