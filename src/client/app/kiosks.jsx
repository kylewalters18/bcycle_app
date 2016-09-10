import React from 'react';

import { select } from "d3-selection";

class Kiosks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'kiosks': []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/kiosk')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        'kiosks': json
      });

      /* Add a LatLng object to each item in the dataset */
      json.forEach(function(d) {
        d.LatLng = new L.LatLng(d.lat, d.lon);
      })

      this._create(json);

      this.forceUpdate();
    });
  }

  _create(dataset) {
    /* We simply pick up the SVG from the map object */
    var svg = select("#map").select("svg");

    const points = svg.selectAll("circle")
      .data(dataset);

    let that = this;
    this.feature = points
      .enter().append("circle")
        .style("opacity", .6)
        .style("fill", "#00e6e6")
        .attr("r", function(d) { return that._getRandomInt(5,30); });

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