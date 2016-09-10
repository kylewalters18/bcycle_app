import React from 'react';

import L from 'leaflet';

import Kiosks from 'kiosks';

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
    this.map = map;

    let that = this;
    this.map.on("viewreset", function() {
      that.setState({reset: true});
    })

    this.forceUpdate();
  }

  render() {
    let reset = false;
    if (this.state) {
        reset = this.state.reset;
    }

    return (
      <div id="map" style={{height: 'calc(100% - 32px)'}}>
        <Kiosks map={this.map} enabled={this.props.enabled} viewreset={reset} />
      </div>
    );
  }
}

export default Map;