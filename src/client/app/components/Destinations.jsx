import React, { PropTypes } from 'react';

import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

class Destinations extends React.Component {
  constructor() {
    super();
    this.barHeight = 25;
  }

  componentDidMount() {
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
        .data(data);

    const barsEnter = bars.enter().append('g')
        .attr('transform', (d, i) => `translate(0,${i * this.barHeight})`)
        .on('mouseover', d => this.props.mouseoverKiosk(d.name))
        .on('mouseout', () => this.props.mouseoverKiosk(''));

    // Enter section
    barsEnter.append('rect')
        .attr('width', 0)
        .attr('height', this.barHeight - 2)
        .attr('fill', 'rgb(255, 87, 34)')
      .transition()
      .duration(1000)
        .attr('width', d => this.x(d.value));

    barsEnter.append('text')
        .attr('x', 3)
        .attr('y', this.barHeight / 2)
        .attr('dy', '.35em')
        .attr('fill', 'rgb(255, 87, 34)')
      .transition()
      .delay(500)
      .duration(500)
        .attr('fill', 'white')
        .text(d => d.name);

    // Update section
    bars.select('rect')
      .transition()
      .duration(1000)
        .attr('width', d => this.x(d.value));

    bars.select('text')
        .attr('fill', 'rgb(255, 87, 34)')
      .transition()
      .duration(1000)
        .attr('fill', 'white')
        .text(d => d.name);

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
        >{this.props.stationName}</div>
        <br />
        <div
          className="
            mdl-typography--header
            mdl-color-text--grey-100
          "
        >Top Destinations</div>
        <svg width={'100%'} height={this.barHeight * 5} ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}


Destinations.propTypes = {
  stationName: PropTypes.string.isRequired,
  destinations: PropTypes.array.isRequired,
  mouseoverKiosk: PropTypes.func.isRequired,
};


export default Destinations;
