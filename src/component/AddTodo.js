import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers'; /****HERE****Added Imports******/
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

class AddTodo extends Component {
  // Create a local react state of the this component with both content date property set to nothing.
  constructor() {
    super();
    this.state = {
      due : null, /****HERE****added a new variable to store the due date and set to null*******/
      content: "",
      date: ""
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user and the current date/time.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: Date().toLocaleString('en-US')
    });
  };
  //****HERE*****Create a new handleChange function for the datepicker to set the value of your due date.*****
  handleChanges = (event) => {
    this.setState({
      due: new Date(event).toLocaleDateString() /****HERE****Set the due date variable******/
    });
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input and current date/time) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date: "",
        due: null   /****HERE****reset the value of the duedate to null in the onSubmit function******/
      });
    }
  };
  render() {
    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>      
        <DesktopDatePicker
          id="new-item-date"
          label="Due Date"
          value={this.state.due}   /****HERE*****make new state variable*****/
          onChange={this.handleChanges}   /****HERE*****make new handle function that was created*****/
          renderInput={(params) => <TextField {...params} />}
         />
        </LocalizationProvider>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
