import React, { Component } from 'react';
import Statistics from './FeedbackOptions';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
      <div className="Feedback">
        <Section>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onButtonClick={this.handleButtonClick}
          />
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sum}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
