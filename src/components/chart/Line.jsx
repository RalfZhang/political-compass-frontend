import React from 'react';
import * as d3 from 'd3';
import * as config from './config';
import { pipeProps, getTextWidth } from './util';

console.log('----------', config.colors);

export default class SvgMultipleLines extends React.Component {
  constructor(props) {
    super(props);
    // const parseTime = d3.timeParse('%Y');
    this.state = {
      data: pipeProps(
        props.option.data,
        props.option.xAxis,
      ),
    };
    console.log('old', this.state.data);
  }

  componentDidMount() {
    // TODO: add margins to display axis nicer
    const lengthObj = {
      legend: {
        height: 36,
      },
      chart: {
        height: 300, // 仅中心区域大小
        width: 500, // 仅中心区域大小
        pl: 40, // padding-left
        pr: 10, // padding-right
        pt: 10, // padding-top
        pb: 30, // padding-bottom
      },
    };


    const legendTextArr = this.state.data.map(e => e.key);

    const width = lengthObj.chart.width + lengthObj.chart.pl + lengthObj.chart.pr;
    const height = lengthObj.legend.height + lengthObj.chart.height + lengthObj.chart.pt + lengthObj.chart.pb;

    const box = d3.select(this.chartRef)
      .attr('width', width)
      .attr('height', height); // 200 for legend

    box.append('path')
      .attr('d', `M0 0 H ${width} V ${height} H 0 Z`)
      .attr('fill', 'transparent')
      .attr('stroke', 'black');

    const chart = box.append('g')
      .attr('transform', `translate(${lengthObj.chart.pl}, ${lengthObj.legend.height})`);

    const x = d3.scaleLinear()
      .domain([d3.min(this.state.data[0].values.map(e => e.position)),
        d3.max(this.state.data[0].values.map(e => e.position))]) // min max dates
      .range([0, lengthObj.chart.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(Array.prototype.concat.apply([], this.state.data.map(e => e.values.map(el => el.value))))]) // max value
      .range([lengthObj.chart.height, 0]);

    const colors = d3.scaleOrdinal()
      .domain(legendTextArr)
      .range(config.colors);

    const graph = chart.selectAll('.graph')
      .data(this.state.data)
      .enter()
      .append('g')
      .attr('class', 'graph');

    graph
      .append('path')
      .attr('fill', 'transparent')
      .attr('class', 'line')
      .style('stroke', d => colors(d.key))
      .attr('d', parentData => (d3.line()
        .curve(d3.curveBasis) // make points round, not sharp
        .x(d => x(d.position))
        .y(d => y(d.value))
      )(parentData.values));

    chart.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${y(0) - 0})`)
      .call(d3.axisBottom(x));

    chart.append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', 'translate(0,0)')
      .call(d3.axisLeft(y));

    const legendContainer = box
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(0,${lengthObj.chart.pt})`);

    const legendG = legendContainer.selectAll('g')
      .data(legendTextArr)
      .enter()
      .append('g')
      .attr('x', '10');


    const legendIconWidth = 15;
    const legendGap = 30;
    const legendWidth = legendTextArr.length * (legendIconWidth + legendGap) + getTextWidth(legendTextArr.join('')) - legendGap;
    // 居中时确定偏移量
    const legendOffset = (lengthObj.chart.width - legendWidth) / 2 + lengthObj.chart.pl;

    legendG.append('rect')
      .attr('width', legendIconWidth)
      .attr('height', legendIconWidth)
      .attr('x', (d, i) => legendOffset + (getTextWidth(legendTextArr.slice(0, i).join(''))) + i * (legendIconWidth + legendGap))
      .attr('fill', colors);

    legendG.append('text')
      .attr('x', (d, i) => legendOffset + (getTextWidth(legendTextArr.slice(0, i).join(''))) + (i + 1) * legendIconWidth + i * legendGap + 4)
      .attr('y', 13)
      .text(d => d);
  }

  render() {
    return (
      <svg className="line-chart--multiple" ref={(r) => { this.chartRef = r; }} />
    );
  }
}
