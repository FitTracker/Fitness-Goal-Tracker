import React, { Component } from "react";

class TimerConfig extends Component {
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
      <div>
        <h2 className="text-primary">Set Timer</h2>
        <div>
          <div className="time-row">
            <div>
              <label htmlFor="hours">Hours</label>
            </div>
            <div>
              <input
                id="hours"
                type="number"
                min="0"
                defaultValue={this.props.baseTime.get("hours")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="time-row">
            <div>
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div>
              <input
                id="minutes"
                type="number"
                min="0"
                defaultValue={this.props.baseTime.get("minutes")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="time-row">
            <div>
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div>
              <input
                id="seconds"
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

export default TimerConfig;
