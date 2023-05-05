import React from 'react';
import Statistics from './FeedbackOptions';

export default function StatisticsSection({
  title,
  good,
  neutral,
  bad,
  sum,
  positiveFeedback,
}) {
  return (
    <>
      <section>
        <h2 className="title">{title}</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={sum}
          positivePercentage={positiveFeedback}
        />
      </section>
    </>
  );
}
