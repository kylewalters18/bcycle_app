import React, { PropTypes } from 'react';

import KiosksContainer from 'containers/KiosksContainer';
import L from 'leaflet';
import RoutesContainer from 'containers/RoutesContainer';

class Map extends React.Component {

  componentDidMount() {
    const layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    const map = L.map('map', {
      scrollWheelZoom: false,
      center: [39.7392, -104.9903],
      zoom: this.props.zoom,
      zoomControl: true,
    });
    map.addLayer(layer);

    /* Initialize the SVG layer */
    map._initPathRoot();
    map.on('viewreset', () => this.props.onZoom(map.getZoom()));

    this.map = map;
    this.forceUpdate();
  }

  render() {
    return (
      <div id="map" style={{ height: 'calc(100% - 32px - 64px)' }}>
        <RoutesContainer map={this.map} />
        <KiosksContainer map={this.map} />
      </div>
    );
  }
}

Map.propTypes = {
  zoom: PropTypes.number.isRequired,
  onZoom: PropTypes.func.isRequired,
};


export default Map;
