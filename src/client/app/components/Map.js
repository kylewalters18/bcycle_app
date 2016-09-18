import React from 'react';

import L from 'leaflet';
import { select } from 'd3-selection';

import KiosksContainer from 'containers/KiosksContainer';

class Map extends React.Component {

  componentDidMount() {
    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    );

    var map = L.map('map', { scrollWheelZoom: false, center: [39.7392, -104.9903], zoom: this.props.zoom });
    map.addLayer(layer);

    /* Initialize the SVG layer */
    map._initPathRoot()
    map.on("viewreset", () => this.props.onZoom(map.getZoom()));

    this.map = map;
    this.forceUpdate();
  }

  render() {
    return (
      <div id="map" style={{height: 'calc(100% - 32px)'}}>
        <KiosksContainer map={ this.map } />
      </div>
    );
  }
}

export default Map;