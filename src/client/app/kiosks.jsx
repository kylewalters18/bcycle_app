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
      let checkoutKiosksTally = this._tallyKiosks(json, function(d) { return d.checkout_kiosk; });
      let returnKiosksTally = this._tallyKiosks(json, function(d) { return d.return_kiosk; });

      this.svg = select("#map").select("svg");
      this._updatePlot(checkoutKiosksTally);

      this.setState({
        checkoutKiosks: checkoutKiosksTally,
        returnKiosks: returnKiosksTally
      });
    });
  }

  _tallyKiosks(trips, extractKiosk) {
    let map = new Map();
    for (let trip of trips) {
      let kiosk = extractKiosk(trip);
      let kioskName = kiosk.name;

      if(!map.has(kioskName)) {
        map.set(kioskName, {
          'tally': 0,
          'LatLng': new L.LatLng(kiosk.lat, kiosk.lon),
          'name': kiosk.name
        });
      }

      map.get(kioskName).tally++;
    }
    return Array.from(map.values());
  }

  _updatePlot(data) {
    let map = this.props.map;

    let points = this.svg.selectAll("circle").data(data, function(d) { return d.name; });

    // Enter section
    points.enter().append("circle")
        .style("opacity", 0)
        .attr("r", 0)
        .attr("transform", function(d) {
            return "translate("+ map.latLngToLayerPoint(d.LatLng).x + ","+ map.latLngToLayerPoint(d.LatLng).y + ")";
          })
      .transition().duration(500)
        .style("opacity", .6)
        .style("fill", "rgb(255, 87, 34)")
        .attr("r", function(d) { return d.tally; });

    // Update section
    points
        .attr("transform", function(d) {
            return "translate("+ map.latLngToLayerPoint(d.LatLng).x + ","+ map.latLngToLayerPoint(d.LatLng).y + ")";
        })
        .on('click', function(d) { select(this).style("fill", "rgb(33, 150, 243)"); })
      .transition().duration(500)
        .style("opacity", .6)
        .style("fill", "rgb(255, 87, 34)")
        .attr("r", function(d) { return d.tally; })

    // Exit section
    points.exit()
      .transition().duration(500)
        .style("opacity", 0)
        .attr("r", 0)
        .remove();
  }

  render() {
    if (!this.state) { return null; }

    if (this.props.toggle) {
      this._updatePlot(this.state.checkoutKiosks);
    } else {
      this._updatePlot(this.state.returnKiosks);
    }

    return null;
  }
}

export default Kiosks;