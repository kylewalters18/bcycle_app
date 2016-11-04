import React, { PropTypes } from 'react';

import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

class Destinations extends React.Component {

  componentDidMount() {
    this.svg = select(this.node).append('g');
    this.x = scaleLinear()
      .range([0, this.node.getBoundingClientRect().width]);
  }
  componentDidUpdate() {
    const randomNumbers = Array.from(
      { length: 5 },
      () => 10 + Math.floor(Math.random() * 10)
    );
    randomNumbers.sort();
    randomNumbers.reverse();
    const data = randomNumbers.map((d, i) => ({ value: d, name: i }));

    this.updatePlot(data);
  }

  updatePlot(data) {
    this.x
      .domain([0, max(data.map(d => d.value))]);

    const bars = this.svg.selectAll('rect').data(data, d => d.name);

    // Enter section
    bars.enter().append('rect')
      .attr('x', 0)
      .attr('y', (d, i) => i * 20)
      .attr('width', d => this.x(d.value))
      .attr('height', 18)
      .attr('fill', 'rgb(255, 87, 34)');

    // Update section
    bars.transition().duration(300)
      .attr('width', d => this.x(d.value));

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
        >Top Destinations</div>
        <br />
        <svg width={150} ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}


Destinations.propTypes = {
  destinations: PropTypes.array.isRequired,
};


export default Destinations;
