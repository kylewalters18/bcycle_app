import React from 'react';

import { select } from "d3-selection";
import { transition } from "d3-transition";

class Kiosks extends React.Component {

  componentDidMount() {
    this.props.onInitialize();
  }

  updatePlot(data) {
    this.svg = select("#map").select("svg");
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
      if (this.props.toggle === 'checkout') {
        this.updatePlot(this.props.checkoutKiosks)
      } else if (this.props.toggle === 'return') {
        this.updatePlot(this.props.returnKiosks)
      }

      return null;
  }
}

export default Kiosks;