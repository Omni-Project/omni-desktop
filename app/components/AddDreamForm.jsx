import React from 'react';
import { TextField, RaisedButton, SelectField, Checkbox, MenuItem, TimePicker, DatePicker } from 'material-ui';



export default class AddDreamForm extends React.Component {
  constructor(props) {
    super(props)
    //ADD DREAM FORM IS USED FOR EDITING AS WELL.
    //IF SELECTED DREAM IS PICKED FOR EDITING, THAT DREAM'S DATA PRE-POPULATES THE FORM
    this.state = {
      title: props.dreamToUpdate? props.dreamToUpdate.title : '',
      content: props.dreamToUpdate? props.dreamToUpdate.content : '',
      timeStart: props.dreamToUpdate? new Date(2017, 4, 3, props.dreamToUpdate.sleepStartHour, props.dreamToUpdate.sleepStartMinute) : null,
      timeEnd: props.dreamToUpdate? new Date(2017, 4, 3, props.dreamToUpdate.sleepEndHour, props.dreamToUpdate.sleepEndMinute) : null,
      dreamType: props.dreamToUpdate? props.dreamToUpdate.dreamType : null,
      isPublic: props.dreamToUpdate? props.dreamToUpdate.isPublic : false,
      date: props.dreamToUpdate? new Date(props.dreamToUpdate.date) : null,
      dreamId: props.dreamToUpdate? props.dreamToUpdate.id : null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleChange (e, field, v) {
    this.setState({[field]: e.target.value || v})
  }

  handleCheckChange(e) {
    this.setState({isPublic: !this.state.isPublic})
  }

  handleTimeChange (e, date, time) {
    console.log(date)
    this.setState({[time]: date});
  }

render () {
  return (

  <div style={{width: '600px'}}>
    <h1>Add a Dream</h1>
    <DatePicker
      floatingLabelText="Dream Date"
      hintText="Dream Date"
      value={this.state.date}
      onChange={(e, date) => this.handleTimeChange(e,date,'date')}
      mode='landscape'
    />
    <TextField
      floatingLabelText="Title"
      value={this.state.title}
      fullWidth={true}
      onChange={(e) => this.handleChange(e, 'title')}
    /><br />

    <TextField
      floatingLabelText="Content"
      value={this.state.content}
      multiLine={true}
      fullWidth={true}
      rows={3}
      onChange={(e) => this.handleChange(e, 'content')}
    />
    <br />
    <SelectField
      floatingLabelText="Type of Dream"
      value={this.state.dreamType}
      onChange={(e, i, v) => this.handleChange(e, 'dreamType', v)}
    >
      <MenuItem value="Daydream" primaryText="Daydream" />
      <MenuItem value="Lucid Dream" primaryText="Lucid Dream" />
      <MenuItem value="Nightmare" primaryText="Nightmare" />
      <MenuItem value="Normal Dream" primaryText="Normal Dream" />
      <MenuItem value="Recurring Dream" primaryText="Recurring Dream" />
    </SelectField>
    <br />
    <TimePicker
      floatingLabelText="Sleep Start"
      value={this.state.timeStart}
      format="ampm"
      hintText="Sleep Start"
      onChange={(e, date) => this.handleTimeChange(e, date, 'timeStart')}
    />
    <br />
    <TimePicker
      floatingLabelText="Sleep End"
      value={this.state.timeEnd}
      format="ampm"
      hintText="Sleep End"
      onChange={(e, date) => this.handleTimeChange(e, date, 'timeEnd')}
    />
    <br />
    <Checkbox
      label="Make this public?"
      checked={this.state.isPublic}
      labelPosition="left"
      onCheck={this.handleCheckChange}
    />
    <br />
    <RaisedButton label="Save" primary={true} onTouchTap={() => this.props.handleSubmit(this.state)} />
  </div>

  )
}
}


