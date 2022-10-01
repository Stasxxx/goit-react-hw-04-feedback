import { Component } from "react";
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedback/Feedback";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countFeedback = (type) => {
    // console.log(type);
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };


  render() {
    const {good, neutral, bad } = this.state
    let countTotalFeedback = good + neutral + bad;
    let countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)
    

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback}
            positivFeedback={countPositiveFeedbackPercentage} />
            : <Notification message="There is no feedback"/>}
          
          
        </Section>
      </>
  );
  }
};
