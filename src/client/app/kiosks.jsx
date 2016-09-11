import React from 'react';

import { select } from "d3-selection";
import { transition } from "d3-transition";

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
      let checkoutKiosksTally = this._tallyKiosks(json);
      //let returnKiosksTally = this._tallyKiosks(json);


      /* Add a LatLng object to each item in the dataset */
      let values = Array.from(checkoutKiosksTally.values());
      for (let d of values) {
        d.LatLng = new L.LatLng(d.lat, d.lon);
      }

      this.svg = select("#map").select("svg");
      this._updatePlot(values);

      this.setState({checkoutKiosks: values});
    });
  }

  _tallyKiosks(trips) {
    let map = new Map();
    for (let trip of trips) {
      let kioskName = trip.checkout_kiosk.name;

      if(!map.has(kioskName)) {
        map.set(kioskName, {
          'tally': 0,
          'lat': trip.checkout_kiosk.lat,
          'lon': trip.checkout_kiosk.lon
        });
      }

      map.get(kioskName).tally++;
    }
    return map;
  }

  _updatePlot(data) {
    let map = this.props.map;

    let points = this.svg.selectAll("circle").data(data);

    // Enter section
    points.enter().append("circle")
        .style("opacity", 0)
        .attr("r", 0)
        .attr("transform", function(d) {
            return "translate("+ map.latLngToLayerPoint(d.LatLng).x + ","+ map.latLngToLayerPoint(d.LatLng).y + ")";
          })
      .transition().duration(500)
        .style("opacity", .6)
        .style("fill", "#00e6e6")
        .attr("r", function(d) { return d.tally; });

    // Update section
    points
      .attr("transform", function(d) {
          return "translate("+ map.latLngToLayerPoint(d.LatLng).x + ","+ map.latLngToLayerPoint(d.LatLng).y + ")";
        });

    // Exit section
    points.exit()
      .transition().duration(500)
        .style("opacity", 0)
        .attr("r", 0)
        .remove();
  }


  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    if (this.props.checkoutKiosksEnabled) {
      if (this.state) {
        this._updatePlot(this.state.checkoutKiosks);
      }
    } else {
      this._updatePlot([]);
    }

    return null;
  }
}

export default Kiosks;