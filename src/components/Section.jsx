import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './FeedbackOptions';

export default class Section extends Component{
    render(){
        const {
            title,
            secondTitle,
            onButtonClick,
            good,
            neutral,
            bad,
            sum,
            positiveFeedback,
          } = this.props;
        //   console.log(this.props);
        return (
            <section>
              <h1>{title}</h1>
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onButtonClick={onButtonClick}
              />
              <h2>{secondTitle}</h2>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                sum={sum}
                positiveFeedback={positiveFeedback}
              />
            </section>
          );
    }
} 
  

