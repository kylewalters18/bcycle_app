import React, { PropTypes } from 'react';

import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

class Destinations extends React.Component {

  componentDidMount() {
    this.barHeight = 25;

    this.svg = select(this.node).append('g');
    this.x = scaleLinear()
      .range([0, this.node.getBoundingClientRect().width]);
  }
  componentDidUpdate() {
    this.updatePlot(this.props.destinations);
  }

  updatePlot(data) {
    this.x
      .domain([0, max(data.map(d => d.value))]);

    // const bars = this.svg.selectAll('rect').data(data, d => d.name);
    const bars = this.svg.selectAll('g')
        .data(data, d => d.name);

    const barsEnter = bars.enter().append('g')
        .attr('transform', (d, i) => `translate(0,${i * this.barHeight})`);

    // Enter section
    barsEnter.append('rect')
      .attr('width', d => this.x(d.value))
      .attr('height', this.barHeight - 2)
      .attr('fill', 'rgb(255, 87, 34)');

    barsEnter.append('text')
      .attr('x', 3)
      .attr('y', this.barHeight / 2)
      .attr('dy', '.35em')
      .attr('fill', 'white')
      .text(d => d.name);

    // Update section
    bars.select('rect').transition().duration(300)
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
        <svg width={'100%'} ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}


Destinations.propTypes = {
  destinations: PropTypes.array.isRequired,
};


export default Destinations;
