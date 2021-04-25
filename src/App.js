import React, { Component } from "react";
import "./Components/Calculator.css";
import Screen from "./Components/Screen";
import Button from "./Components/Button";
import ClearButton from "./Components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  state = {
    result: ""
  };

  addToScreen = value => {
    const lastValue = this.state.result[this.state.result.length - 1];
    if (this.state.result.length === 20) {
      return;
    }
    if (value === "." && lastValue === ".") {
      return;
    }

    this.setState({
      result: this.state.result + value
    });
  };

  handleEqual = () => {
    if (
      this.state.result === "" ||
      this.state.result[this.state.result.length - 1] === "."
    ) {
      return;
    }
    this.setState({
      result: math.evaluate(this.state.result)
    });
  };

  render() {
    return (
      <div className="App">
        <Screen value={this.state.result}></Screen>
        <div className="panel">
          <Button handleClick={this.addToScreen}>7</Button>
          <Button handleClick={this.addToScreen}>8</Button>
          <Button handleClick={this.addToScreen}>9</Button>
          <Button handleClick={this.addToScreen}>+</Button>
          <Button handleClick={this.addToScreen}>4</Button>
          <Button handleClick={this.addToScreen}>5</Button>
          <Button handleClick={this.addToScreen}>6</Button>
          <Button handleClick={this.addToScreen}>-</Button>
          <Button handleClick={this.addToScreen}>1</Button>
          <Button handleClick={this.addToScreen}>2</Button>
          <Button handleClick={this.addToScreen}>3</Button>
          <Button handleClick={this.addToScreen}>/</Button>
          <Button handleClick={this.addToScreen}>.</Button>
          <Button handleClick={this.addToScreen}>0</Button>
          <ClearButton handleClear={() => this.setState({ result: "" })} />
          <Button handleClick={this.addToScreen}>*</Button>
          <Button handleClick={this.handleEqual}>=</Button>
        </div>
      </div>
    );
  }
}

export default App;
