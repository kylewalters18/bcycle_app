import React, { PropTypes } from 'react';
import { select, selectAll } from 'd3-selection';

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
        .attr('r', (d) => {
          return d.name === '10th & Osage' ? 8 : 3;
        })
        .attr('transform', d =>
          `translate(${
              map.latLngToLayerPoint(d.LatLng).x},${
              map.latLngToLayerPoint(d.LatLng).y})`
        )
        .style('opacity', 0.75)
        .style('fill', 'rgb(255, 87, 34)')
        .on('mouseover', function (d) {
          select(that.selection).attr('r', 3);
          select(this).attr('r', 8);
          that.selection = this;
          that.props.updateSelectedKiosk(d.id);
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
