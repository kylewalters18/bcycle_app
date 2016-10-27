import { Cell, Grid } from 'react-mdl';

import MapContainer from 'containers/MapContainer';
import React from 'react';
import TopDestinations from 'containers/TopDestinationsContainer';

const App = () =>
(
  <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
    <Grid>
      <Cell col={12}>
        <div
          className="
            mdl-typography--display-2
            mdl-typography--text-center
            mdl-color-text--grey-100
          "
        >
          Denver B-Cycle
        </div>
      </Cell>
      <Cell col={9}>
        <MapContainer />
      </Cell>
      <Cell col={3}>
        <TopDestinations />
      </Cell>
    </Grid>
  </div>
);

export default App;
