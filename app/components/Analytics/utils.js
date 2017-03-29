import * as d3 from 'd3'

export let generateWordCloud = function(wordMap) {

  const canvasWidth = 910,
      canvasHeight = 500,
      padding = { top: 20, right: 20, bottom: 20, left: 20 },
      //CHANGES SIZE OF CANVAS
      maxRadius = 45

  const width = canvasWidth - padding.left - padding.right;
  const height = canvasHeight - padding.top - padding.bottom;

  var rScale = d3.scaleSqrt().range([0, maxRadius])

  const count = (topic) => +topic.count
  const wordId = (topic) => topic.word
  const textContent = (topic) => topic.word.charAt(0).toUpperCase() + topic.word.slice(1)

  var label,
      countLabel,
      container,
      words,
      node

  var chartData = [];

  for (var key in wordMap) {
    chartData.push({
      word: key,
      count: wordMap[key],
      re: new RegExp("\\b(" + key.toLowerCase() + ")\\b", "gi"),
      x: canvasWidth/2,
      y: canvasHeight/2
    })
  }

  var xMax = d3.max(chartData.map(word => word.count))

  var force = d3.forceSimulation()
      .force('y', d3.forceY().strength(0.5).y(canvasHeight/2))
      .force('x', d3.forceX().strength(0.1).x(canvasWidth/2))
      .force('charge', d3.forceManyBody().strength(-0.3))
      .force('collide', d3.forceCollide(function(d) {
              return rScale(count(d)) + 3
          })
          .iterations(8)
          .strength(1)
      )
      .alphaTarget(0)
      .on('tick', tick)


  draw()


  function draw() {

      rScale.domain([0, xMax])

      d3.select('#word-cloud')
              .selectAll('g.container')
              .data([chartData])
              .enter().append('g')
              .attr('class', 'container')
              .attr('transform', `translate( 0 , -30 )`)

      container = d3.select('g.container')

      redraw()
  }

  function redraw() {

      force.nodes(chartData)

      node = container.selectAll('.node')
          .data(chartData, wordId)

      node.exit().remove()

      var nodeEnter = node.enter()
          .append('g')
          .attr('class', 'node')
          .on('mouseover', mouseover)
          .on('mouseout', mouseout)
          .call(d3.drag()
              .on('start', dragstarted)
              .on('drag', dragged)
              .on('end', dragended));

      node = container.selectAll('.node')

      nodeEnter
          .append('circle')
          .attr('r', (d) => rScale(count(d)))
          .style('cursor', 'pointer')

      nodeEnter.append('text')
          .attr('class', 'word-cloud-label')
          .text(textContent)
          .style('font-size', (d) => Math.max(8, rScale(count(d) / 4.5)) + 'px')
          .style('cursor', 'pointer')
          .attr('transform', function(d) {
              var w = ( this.getBBox ? this.getBBox() : this.getBoundingClientRect() ).width
              return `translate( ${ -w/2 } , ${ rScale(count(d)) - Math.max(8, rScale(count(d)))/1.25 } )`
          })
          .style('width', (d) => 2.5 * rScale(count(d)) + 'px')

      label = container.selectAll('text.label')

      nodeEnter.append('text', 'count')
          .attr('class', 'count')
          .text(count)
          .style('cursor', 'pointer')


      countLabel = container.selectAll('text.count')

      countLabel
          .style('font-size', 10)
          .attr('transform', function(d) {
              var w = ( this.getBBox ? this.getBBox() : this.getBoundingClientRect() ).width
              return `translate( ${ -w/2 } , ${ Math.max(8, rScale(count(d)))/1.25 } )`
          })

  }

  function dragstarted(d) {
      if (!d3.event.active) force.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
  }

  function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
  }

  function dragended(d) {
      if (!d3.event.active) force.alphaTarget(0);
      d.fx = null;
      d.fy = null;
  }

  function mouseover(d) {
      node.classed('hover', (n) => wordId(n) == wordId(d))
  }

  function mouseout(d) {
      node.classed('hover', false)
  }

  function tick(e) {
      container.selectAll('.node')
          .attr('transform', (d) => `translate( ${ d.x }, ${ d.y } )`)
  }

}
