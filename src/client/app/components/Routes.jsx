import React, { PropTypes } from 'react';

import { line } from 'd3-shape';
import { select } from 'd3-selection';

class Routes extends React.Component {

  componentDidMount() {
    this.props.onInitialize();
  }

  componentDidUpdate() {
    this.updatePlot(this.props.routes);
  }

  updatePlot(data) {
    this.svg = select('#map').select('svg');
    const map = this.props.map;

    const lineBuilder = line()
        .x(d => map.latLngToLayerPoint(d.LatLng).x)
        .y(d => map.latLngToLayerPoint(d.LatLng).y);

    const routes = this.svg.selectAll('path').data(data);

    // Enter section
    routes.enter().append('path')
        .attr('d', d => lineBuilder(d))
        .style('stroke', 'rgb(255, 87, 34)')
        .style('stroke-width', () => Math.random() * 2)
        .style('stroke-opacity', 0.75)
        .style('fill-opacity', 0);

    // Update section
    routes
      .attr('d', d => lineBuilder(d));

    // Exit section
    routes.exit().remove();
  }

  render() {
      // were picking up the maps svg, so dont render anything with react
    return null;
  }
}

Routes.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  map: PropTypes.object,
};

export default Routes;
