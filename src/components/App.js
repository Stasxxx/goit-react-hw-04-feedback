import { Component } from "react";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedback = (type) => {
    console.log(type);
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={() => this.countFeedback("good")} name="Good">Good</button>
      <button type="button" onClick={() => this.countFeedback("neutral")} name="Neutral">Neutral</button>
      <button type="button" onClick={() => this.countFeedback("bad")} name="Bad">Bad</button>
      <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
    </div>
    
  );
  }
};
