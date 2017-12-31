import React, { Component } from "react";

class IntervalConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newBaseTime = this.props.baseTime;

    if (e.target.id === "hours" && e.target.value[0] !== "-")
      newBaseTime
        .subtract(newBaseTime.get("hour"), "hours")
        .add(parseInt(e.target.value, 10), "hours");
    if (e.target.id === "minutes" && e.target.value[0] !== "-")
      newBaseTime
        .subtract(newBaseTime.get("minutes"), "minutes")
        .add(parseInt(e.target.value, 10), "minutes");
    if (e.target.id === "seconds" && e.target.value[0] !== "-")
      newBaseTime
        .subtract(newBaseTime.get("seconds"), "seconds")
        .add(parseInt(e.target.value, 10), "seconds");

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="row">
        <h2 className="text-primary">Set Timer</h2>
        <div className="row control-row">
          <div className="time-row">
            <div className="col-sm-3">
              <label htmlFor="hours">Hours</label>
            </div>
            <div className="col-sm-9">
              <input
                id="hours"
                className="form-control"
                type="number"
                min="0"
                defaultValue={this.props.baseTime.get("hours")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="time-row">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input
                id="minutes"
                className="form-control"
                type="number"
                min="0"
                defaultValue={this.props.baseTime.get("minutes")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="time-row">
            <div className="col-sm-3">
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div className="col-sm-9">
              <input
                id="seconds"
                className="form-control"
                type="number"
                min="0"
                defaultValue={this.props.baseTime.get("seconds")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntervalConfig;
