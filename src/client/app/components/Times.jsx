import React, { PropTypes } from 'react';
import { axisBottom, axisLeft } from 'd3-axis';
import { curveCardinal, line } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

import { max } from 'd3-array';
import { select } from 'd3-selection';

class Times extends React.Component {
  componentDidMount() {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = this.node.getBoundingClientRect().width - margin.left - margin.right;
    const height = this.node.getBoundingClientRect().height - margin.top - margin.bottom;

    this.svg = select(this.node).append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    this.x = scaleTime()
      .domain([new Date(2015, 0), new Date(2015, 11)])
      .range([0, width]);
    this.y = scaleLinear()
      .range([height, 0]);

    this.xAxis = axisBottom(this.x)
      .tickArguments([5]);

    this.yAxis = axisLeft(this.y)
      .tickSizeInner(-width)
      .tickArguments([5]);

    const xAxisGroup = this.svg.append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0,${height})`)
      .call(this.xAxis);
    xAxisGroup.selectAll('line').style('stroke', 'white');
    xAxisGroup.selectAll('path').style('stroke', 'white');
    xAxisGroup.selectAll('text').style('fill', 'white');

    const yAxisGroup = this.svg.append('g')
      .attr('class', 'axis y')
      .call(this.yAxis);
    yAxisGroup.selectAll('line').style('stroke', 'white').style('stroke-dasharray', '5,10');
    yAxisGroup.selectAll('path').style('stroke', 'white');
    yAxisGroup.selectAll('text').style('fill', 'white');

    this.l = line()
      .x(d => this.x(d.x))
      .y(d => this.y(d.y))
      .curve(curveCardinal);
  }

  componentDidUpdate() {
    const randomNumbers = Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * 150)
    );
    const data = randomNumbers.map((d, i) => ({
      x: new Date(2015, i),
      y: d,
    }));

    this.updateChart(data);
  }

  updateChart(data) {
    this.y.domain([0, max(data.map(d => d.y))]);

    const yAxisGroup = this.svg.select('.y.axis')
          .transition()
          .duration(1000)
          .call(this.yAxis);
    yAxisGroup.selectAll('line').style('stroke', 'white').style('stroke-dasharray', '5,10');
    yAxisGroup.selectAll('path').style('stroke', 'white');
    yAxisGroup.selectAll('text').style('fill', 'white');

    const paths = this.svg.selectAll('.line')
        .data([data]);

    const points = this.svg.selectAll('.dot')
        .data(data.filter(d => d));

    // Enter section
    paths
      .enter().append('path')
        .attr('class', 'line')
        .attr('stroke', 'rgb(255, 87, 34)')
        .attr('stroke-width', '2px')
        .attr('fill', 'none')
        .attr('d', d => this.l(d));

    points
      .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', this.l.x())
        .attr('cy', this.l.y())
        .attr('r', 5)
        .style('stroke', '#212121')
        .style('stroke-width', 3)
        .style('fill', 'rgb(255, 87, 34)');

    // Update section
    paths
      .transition()
      .duration(1000)
        .attr('d', d => this.l(d));

    points
      .transition()
      .duration(1000)
        .attr('cx', this.l.x())
        .attr('cy', this.l.y());

    // Exit section
    paths
      .exit()
      .remove();

    points
      .exit()
      .remove();
  }

  render() {
    return (
      <div>
        <div
          className="
            mdl-typography--header
            mdl-color-text--grey-100
          "
        >Popular Times</div>
        <svg width={'100%'} height={250} ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}


Times.propTypes = {
};


export default Times;
