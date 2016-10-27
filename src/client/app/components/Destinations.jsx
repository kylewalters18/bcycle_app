import React, { PropTypes } from 'react';

const Destinations = props =>
(
  <div>
    {props.destinations.map((d, i) => <div key={i}>{d}</div>)}
  </div>
);


Destinations.propTypes = {
  destinations: PropTypes.array.isRequired,
};


export default Destinations;
