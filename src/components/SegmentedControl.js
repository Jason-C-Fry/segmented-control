import React from "react";
import "./SegmentedControl.css";

class SegmentedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };

    this.listItems = props.data.options.map((item) => (
      <label className="radioButton" key={item.value}>
        <input type="radio" name={props.data.name} value={item.value} onChange={this.handleOptionChange} />
        <span className="label">{item.label}</span>
      </label>
    ));
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    this.props.update(changeEvent.target.value);
  };

  render() {
    return (
      <div className="segmented-control" id={this.props.data.name}>
        <h4>{this.props.data.title}</h4>
        <div className="list-wrapper">{this.listItems}</div>
      </div>
    );
  }
}

export default SegmentedControl;
