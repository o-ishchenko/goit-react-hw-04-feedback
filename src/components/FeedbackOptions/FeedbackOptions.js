import React from "react";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
          {options.map(option => (
              <button className={s.button} key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
          ))}
        </div>
    )
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired
        }


export default FeedbackOptions 