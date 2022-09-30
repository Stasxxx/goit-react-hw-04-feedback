import { Component } from "react";
import { Statistics } from "./statistics/Statistics";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivFeedback: 0,
  }

  countFeedback = (type) => {
    // console.log(type);
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad
      };
    });
  };

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      return {
        positivFeedback: Math.round(prevState.good / prevState.total * 100)
      }
    })
  }


  render() {
    return (
      <>
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={() => this.countFeedback("good")} name="Good">Good</button>
      <button type="button" onClick={() => this.countFeedback("neutral")} name="Neutral">Neutral</button>
      <button type="button" onClick={() => this.countFeedback("bad")} name="Bad">Bad</button>
   
    </div>
    <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivFeedback={this.state.positivFeedback}
        />
      </>
  );
  }
};
