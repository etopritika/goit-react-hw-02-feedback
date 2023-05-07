import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function Section({
  title,
  secondTitle,
  onButtonClick,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onButtonClick={onButtonClick}
      />
      <h2>{secondTitle}</h2>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  onButtonClick: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
