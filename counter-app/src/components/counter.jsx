import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
  };

  //constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </li>
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
