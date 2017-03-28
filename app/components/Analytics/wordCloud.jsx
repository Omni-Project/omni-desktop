import React from 'react'
import { Col } from 'react-bootstrap'
import { generateWordCloud } from './utils'
import { SelectField, MenuItem } from 'material-ui';

export default class extends React.Component {
  constructor(props) {
    super();
    this.state = {selected: '', dreams: props.dreams}
    this.createCountMap = this.createCountMap.bind(this)
    this.filterDreams = this.filterDreams.bind(this)
  }

  componentDidMount(){
    this.createCountMap()
  }

  filterDreams (e, i, selected) {
    let dreams = this.props.dreams;

    if (selected !== 'All') {
      dreams = this.props.dreams.filter(dream => dream.dreamType === selected)
    }
    this.setState({selected, dreams});
  }

  createCountMap () {
    let dreams = this.state.dreams
    let map = {};

    const dreamKeywords = dreams.reduce((acc, curr) => acc.concat(curr.keywords), [])

    dreamKeywords.forEach(word => {
        map[word] = map[word] ? map[word] += 1 : 1
    })
    generateWordCloud(map)
  }

  render() {
    if (this.state.dreams) {this.createCountMap();}

    return (
      <Col xs={12} md={12} className="analytics-box" >
          <h3>Word Cloud</h3>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <SelectField
            floatingLabelText="Filter by type"
            value={this.state.selected}
            onChange={this.filterDreams}
          >
          {
            ['All', 'Daydream', 'Lucid Dream', 'Nightmare', 'Normal Dream', 'Recurring Dream'].map((type, i) => <MenuItem value={type} primaryText={type} key={i} />)
          }
          </SelectField>
          </div>

          <svg id="word-cloud"></svg>
      </Col>
    )
    }
}
