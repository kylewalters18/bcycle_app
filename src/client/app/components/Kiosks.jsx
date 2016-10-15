import React, { PropTypes } from 'react';

import { select } from 'd3-selection';
import { transition } from 'd3-transition';

class Kiosks extends React.Component {

  componentDidMount() {
    this.props.onInitialize();
  }

  componentDidUpdate() {
    if (this.props.toggle === 'checkout') {
      this.updatePlot(this.props.checkoutKiosks);
    } else if (this.props.toggle === 'return') {
      this.updatePlot(this.props.returnKiosks);
    }
  }

  updatePlot(data) {
    this.svg = select('#map').select('svg');
    const map = this.props.map;

    const points = this.svg.selectAll('circle').data(data, d => d.name);

    // Enter section
    points.enter().append('circle')
        .style('opacity', 0)
        .attr('r', 0)
        .attr('transform', d =>
          `translate(${
              map.latLngToLayerPoint(d.LatLng).x},${
              map.latLngToLayerPoint(d.LatLng).y})`
        )
      .transition()
      .duration(500)
        .style('opacity', 0.6)
        .style('fill', 'rgb(255, 87, 34)')
        .attr('r', d => d.tally);

    // Update section
    points
        .attr('transform', d =>
          `translate(
            ${map.latLngToLayerPoint(d.LatLng).x},
            ${map.latLngToLayerPoint(d.LatLng).y}
          )`
        )
      .transition().duration(500)
        .style('opacity', 0.6)
        .style('fill', 'rgb(255, 87, 34)')
        .attr('r', d => d.tally);

    // Exit section
    points.exit()
      .transition().duration(500)
        .style('opacity', 0)
        .attr('r', 0)
        .remove();
  }

  render() {
      // were picking up the maps svg, so dont render anything with react
    return null;
  }
}

Kiosks.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  checkoutKiosks: PropTypes.array.isRequired,
  returnKiosks: PropTypes.array.isRequired,
  toggle: PropTypes.string.isRequired,
  map: PropTypes.object,
};

export default Kiosks;