import React from 'react';

import { select } from "d3-selection";

class Kiosks extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:5000/trip')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let checkoutKiosksTally = new Map();
      let returnKiosksTally = new Map();

      for (let trip of json) {
        let checkoutKioskName = trip.checkout_kiosk.name;

        if(!checkoutKiosksTally.has(checkoutKioskName)) {
          let lat = trip.checkout_kiosk.lat;
          let lon = trip.checkout_kiosk.lon;
          checkoutKiosksTally.set(checkoutKioskName, {'tally': 0, 'lat': lat, 'lon': lon});
        }

        let kiosk = checkoutKiosksTally.get(checkoutKioskName);
        kiosk.tally++;
        checkoutKiosksTally.set(checkoutKioskName, kiosk);
      }

      /* Add a LatLng object to each item in the dataset */
      let values = Array.from(checkoutKiosksTally.values());
      for (let d of values) {
        d.LatLng = new L.LatLng(d.lat, d.lon);
      }
      this._create(values);

      this.forceUpdate();
    });
  }

  _create(dataset) {
    /* We simply pick up the SVG from the map object */
    var svg = select("#map").select("svg");

    const points = svg.selectAll("circle")
      .data(dataset);

    this.feature = points
      .enter().append("circle")
        .style("opacity", .6)
        .style("fill", "#00e6e6")
        .attr("r", function(d) { return d.tally; });

  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    let map = this.props.map;
    if (this.feature) {
      this.feature.attr("transform", function(d) {
          return "translate("+ map.latLngToLayerPoint(d.LatLng).x + ","+ map.latLngToLayerPoint(d.LatLng).y + ")";
      });
    }

    return (
      <div className="chart"></div>
    );
  }
}

export default Kiosks;