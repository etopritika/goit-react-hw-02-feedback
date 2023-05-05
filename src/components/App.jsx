// import Feedback from './Feedback';
import React, { Component } from 'react';
import Section from './Section';

export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 1,
  };
  handleButtonClick = buttonIndex => {
    switch (buttonIndex) {
      case 0:
        this.setState({
          good: this.state.good + 1,
        });
        break;
      case 1:
        this.setState({
          neutral: this.state.neutral + 1,
        });
        break;
      case 2:
        this.setState({
          bad: this.state.bad + 1,
        });
        break;
      default:
        break;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    if (sum === 0) {
      return 0;
    }
    return ((this.state.good / sum) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback();
    const positiveFeedback = parseInt(this.countPositiveFeedbackPercentage());
    return (
      <>
        <Section
          title="Please leave feedback"
          secondTitle="Statistics"
          onButtonClick={this.handleButtonClick}
          good={good}
          neutral={neutral}
          bad={bad}
          total={sum}
          positivePercentage={positiveFeedback}
        />
      </>
    );
  }
}
