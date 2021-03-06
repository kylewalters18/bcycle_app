import React, { PropTypes } from 'react';

import { select } from 'd3-selection';
import { transition } from 'd3-transition';

class Kiosks extends React.Component {

  componentDidMount() {
    this.props.onInitialize();
  }

  componentDidUpdate() {
    this.updatePlot(this.props.kiosks);
  }

  updatePlot(data) {
    this.svg = select('#map').select('svg');
    const that = this;
    const map = this.props.map;
    const points = this.svg.selectAll('circle').data(data, d => d.name);

    // Enter section
    points.enter().append('circle')
        .attr('r', () => 4)
        .attr('transform', d =>
          `translate(${
              map.latLngToLayerPoint(d.LatLng).x},${
              map.latLngToLayerPoint(d.LatLng).y})`
        )
        .style('opacity', 0.75)
        .style('fill', 'rgb(255, 87, 34)')
        .on('click', function (d) {
          select(that.selection)
            .attr('r', 4)
            .style('fill', 'rgb(255, 87, 34)');
          select(this)
            .attr('r', 6)
            .style('fill', 'white');

          that.selection = this;
          that.props.selecteKiosk(d.id);
        });

    // Update section
    points
        .attr('transform', d =>
          `translate(
            ${map.latLngToLayerPoint(d.LatLng).x},
            ${map.latLngToLayerPoint(d.LatLng).y}
          )`
        );

    // Exit section
    points.exit()
        .remove();
  }

  render() {
      // were picking up the maps svg, so dont render anything with react
    return null;
  }
}

Kiosks.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  kiosks: PropTypes.array.isRequired,
  map: PropTypes.object,
};

export default Kiosks;
