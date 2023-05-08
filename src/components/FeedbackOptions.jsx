import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onButtonClick }) {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button type="button" onClick={() => onButtonClick(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onButtonClick: PropTypes.func,
};
