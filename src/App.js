import React from "react";
import "./App.css";
import SegmentedControl from "./components/SegmentedControl";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedServicer: "",
      selectedGender: "",
      servicer: {
        name: "servicer",
        title: "Paid for by",
        options: [
          {
            label: "Client",
            value: "client"
          },
          {
            label: "Valassis Digital",
            value: "valassis_digital"
          }
        ]
      },
      gender: {
        name: "gender",
        title: "Gender",
        options: [
          {
            label: "All",
            value: "all"
          },
          {
            label: "Female",
            value: "female"
          },
          {
            label: "Male",
            value: "male"
          }
        ]
      }
    };
  }

  updateServicer = (value) => {
    this.setState({
      selectedServicer: value
    });
  };

  updateGender = (gender) => {
    this.setState({
      selectedGender: gender
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SegmentedControl data={this.state.servicer} update={this.updateServicer} />
          <SegmentedControl data={this.state.gender} update={this.updateGender} />
          <br />
          Paid for By: {this.state.selectedServicer}
          <br />
          Gender: {this.state.selectedGender}
        </header>
      </div>
    );
  }
}

export default App;
