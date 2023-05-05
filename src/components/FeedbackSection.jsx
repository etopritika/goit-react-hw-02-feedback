import React from 'react';
import FeedbackOptions from './FeedbackOptions';

export default function FeedbackSection({ title, onButtonClick }) {
  return (
    <>
      <section>
        <h1 className="title">{title}</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onButtonClick={onButtonClick}
        />
      </section>
    </>
  );
}
