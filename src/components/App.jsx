import React, { Component, useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options =  ['good', 'neutral', 'bad'];

  const incrementFunc = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return good ? ((good / total) * 100).toFixed(0) : 0;
  };
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={incrementFunc}
      ></FeedbackOptions>
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
}

export default App;
