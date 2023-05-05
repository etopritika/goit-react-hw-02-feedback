import React, { Component } from 'react';

export default class Statistics extends Component {
 
  render(){
    const {
      good,
      neutral,
      bad,
      sum,
      positiveFeedback,
    } = this.props;
    console.log(this.props);
    return (
      <ul>
        <li>
          Good:<span>{good}</span>
        </li>
        <li>
          Neutral:<span>{neutral}</span>
        </li>
        <li>
          Bad:<span>{bad}</span>
        </li>
        <li>
          Total:<span>{sum}</span>
        </li>
        <li>
          Positive feedback:<span>{positiveFeedback}%</span>
        </li>
      </ul>
    );
  }
}
