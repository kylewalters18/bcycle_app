import React, { PropTypes } from 'react';

import { line } from 'd3-shape';
import { select } from 'd3-selection';

class Routes extends React.Component {

  componentDidUpdate() {
    this.updatePlot(this.props.routes);
  }

  updatePlot(data) {
    this.svg = select('#map').select('svg');
    const map = this.props.map;

    const lineBuilder = line()
        .x(d => map.latLngToLayerPoint(d.LatLng).x)
        .y(d => map.latLngToLayerPoint(d.LatLng).y);

    const routes = this.svg.selectAll('path').data(data, d => d.id);

    // Enter section
    routes.enter().append('path')
        .attr('d', d => lineBuilder(d.route))
        .style('stroke', 'rgb(255, 87, 34)')
        .style('stroke-width', 1)
        .style('stroke-opacity', 0)
        .style('fill-opacity', 0)
      .transition()
      .duration(5000)
        .style('stroke-opacity', 0.75);

    // Update section
    const that = this;
    routes
      .attr('d', d => lineBuilder(d.route))
      .style('stroke', function (d) {
        if (d.name === that.props.highlightedKiosk) {
          select(this).lower();
          return 'white';
        }
        return 'rgb(255, 87, 34)';
      })
      .style('stroke-width', d => d.name === this.props.highlightedKiosk ? 3 : 1);

    // Exit section
    routes.exit()
      .remove();

    // Ensure that routes are rendered behind anything else
    this.svg.selectAll('path').lower();
  }

  render() {
      // were picking up the maps svg, so dont render anything with react
    return null;
  }
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  highlightedKiosk: PropTypes.string.isRequired,
  map: PropTypes.object,
};

export default Routes;
