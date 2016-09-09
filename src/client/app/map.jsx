import React from 'react';

import L from 'leaflet';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    );

    var map = L.map('map', { scrollWheelZoom: false, center: [39.7392, -104.9903], zoom: 13 });
    map.addLayer(layer);

    /* Initialize the SVG layer */
    map._initPathRoot()
  }

  render() {
    return (
      <div id="map" style={{height: 'calc(100% - 32px)'}}></div>
    );
  }
}

export default Map;