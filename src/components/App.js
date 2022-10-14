import { useState } from "react";
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedback/Feedback";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";
import { Container } from "./App.styled";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);
  

  const countFeedback = (type) => {
    switch (type) {
      case 'good':
      setGood(prevType => {
        return  prevType + 1
        });
        break;
      case 'neutral':
      setNeutral(prevType => {
         return prevType + 1
        });
        break;
      case 'bad':
      setBed(prevType => {
         return prevType + 1
        });
        break;
      default:
        return;
    }
  };


    let countTotalFeedback = good + neutral + bad;
    let countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)
    

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys({good,neutral,bad})} onLeaveFeedback={countFeedback}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivFeedback={countPositiveFeedbackPercentage}/>
          : <Notification message="There is no feedback"/>}
        </Section>
      </Container>
  );

};
