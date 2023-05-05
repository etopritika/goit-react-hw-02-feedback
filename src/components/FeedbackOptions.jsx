import React from 'react';

export default function FeedbackOptions({ options, onButtonClick }) {
  // console.log(options);
  return (
    <>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button type="button" onClick={() => onButtonClick(index)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
