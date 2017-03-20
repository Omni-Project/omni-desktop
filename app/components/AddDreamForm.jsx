import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TimePicker from 'material-ui/TimePicker'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class AddDreamForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      timeStart: null,
      timeEnd: null,
      dreamType: null,
      isPublic: false
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleTextChange (e, field, v) {
    this.setState({[field]: e.target.value})
  }

  handleChange(e, i, value) {
    this.setState({dreamType: value})
  }

  handleCheck(e) {
    this.setState({isPublic: !this.state.isPublic})
  }

  handleChangeTimePicker (e, date, time) {
    this.setState({[time]: date});
  }

render () {
  return (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <div>
    <h1>Add a Dream</h1>
    <TextField
      floatingLabelText="Title"
      fullWidth={true}
      onChange={(e) => this.handleTextChange(e, 'title')}
    /><br />

    <TextField
      floatingLabelText="Content"
      multiLine={true}
      fullWidth={true}
      rows={3}
      onChange={(e) => this.handleTextChange(e, 'content')}
    /><br />
    <SelectField
      floatingLabelText="Type of Dream"
      value={this.state.dreamType}
      onChange={this.handleChange}
    >
      <MenuItem value="Daydream" primaryText="Daydream" />
      <MenuItem value="Lucid Dream" primaryText="Lucid Dream" />
      <MenuItem value="Nightmare" primaryText="Nightmare" />
      <MenuItem value="Normal Dream" primaryText="Normal Dream" />
      <MenuItem value="Recurring Dream" primaryText="Recurring Dream" />
    </SelectField>
    <br />
    <TimePicker
      format="ampm"
      hintText="Sleep Start"
      onChange={(e, date) => this.handleChangeTimePicker(e, date, 'timeStart')}
    />
    <br />
    <TimePicker
      format="ampm"
      hintText="Sleep End"
      onChange={(e, date) => this.handleChangeTimePicker(e, date, 'timeEnd')}
    />
    <br />
    <Checkbox
      label="Make this public?"
      labelPosition="left"
      onCheck={this.handleCheck}
    />
    <br />
    <RaisedButton label="Save" primary={true} onTouchTap={() => this.props.handleSubmit(this.state)} />
  </div>
  </MuiThemeProvider>
  )
}
}


