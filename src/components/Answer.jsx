import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer }) => {
  if (answer === '') {
    return (
      <h2>Your answer will appear here.</h2>
    );
  }
  return (
    <>
      <h2>The answer</h2>
      <h3>
        {answer}
      </h3>
    </>
  );
};

Answer.propTypes = {
  answer: PropTypes.string,
};

export default Answer;
