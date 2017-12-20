import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import DatePicker from "material-ui/DatePicker";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear());
minDate.setHours(0, 0, 0, 0);

class AddGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalType: "steps",
      open: false,
      minDate: minDate,
      goalStartDate: moment(minDate).format("L"),
      goalEndDate: moment(minDate).format("L"),
      goalAmount: null,
      amountError: ""
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/goals", {
        goalType: this.state.goalType,
        goalStartDate: this.state.goalStartDate,
        goalEndDate: this.state.goalEndDate,
        goalAmount: Number(this.state.goalAmount)
      })
      .then(response => {
        console.log(response);
        this.setState({ open: false });
      })
      .catch(console.log);
  };
  handleChange = (event, index, value) => {
    this.setState({ goalType: value });
  };

  handleDate = (obj, newDate) => {
    this.setState({ goalEndDate: moment(newDate).format("L") }, () =>
      console.log(this.state)
    );
  };

  handleAmount = event => {
    this.setState({ goalAmount: event.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const actions = [
      <FlatButton
        id="goal-submit"
        label="Set Goal!"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div>
        <FloatingActionButton id="goal-add" onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Setting Goals Is The First Step To Achieving Them"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>Select a metric:</p>
          <DropDownMenu
            value={this.state.goalType}
            onChange={this.handleChange}
          >
            <MenuItem value={"steps"} primaryText="Steps" />
            <MenuItem value={"distance"} primaryText="Distance" />
          </DropDownMenu>
          <p>Select an Amount of Steps or Kms:</p>
          <TextField
            hintText={`700000`}
            floatingLabelText="(Steps/Km)"
            onChange={this.handleAmount}
            value={this.state.goalAmount}
            errorText={this.state.errorMessage}
          />
          <p>Select your target date!</p>
          <DatePicker
            minDate={this.state.minDate}
            autoOk={true}
            defaultDate={this.state.minDate}
            style={{ textFieldStyle: "visible" }}
            okLabel="Save"
            onChange={(obj, date) => this.handleDate(obj, date)}
            id="12340"
          />
        </Dialog>
      </div>
    );
  }
}

export default AddGoal;
