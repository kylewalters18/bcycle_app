import React, { PropTypes } from 'react';

import { select } from 'd3-selection';

class Destinations extends React.Component {

  componentDidUpdate() {
    this.updatePlot([1, 2, 3, 4, 5]);
  }

  updatePlot(data) {
    const svg = select(this.node).append('g');
    const bars = svg.selectAll('rect').data(data, d => d);

    // Enter section
    bars.enter().append('rect')
      .attr('x', (d, i) => i * 20)
      .attr('y', 0)
      .attr('width', 18)
      .attr('height', d => 50 + Math.floor(Math.random() * 10))
      .attr('fill', 'rgb(255, 87, 34)');

    // Update section

    // Exit section
    bars.exit()
        .remove();
  }

  render() {
    return (
      <div>
        <div
          className="
            mdl-typography--title
            mdl-typography--text-center
            mdl-color-text--grey-100
          "
        >Popular Times</div>
        <br />
        <svg ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}


Destinations.propTypes = {
};


export default Destinations;
