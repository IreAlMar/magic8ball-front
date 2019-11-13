import React from 'react';
import FortuneTeller from './FortuneTeller';

const Home = () => (
  <div className="center">
    <h2>
      If you want the answer, ask the question.
    </h2>
    {/* <h3>Even though the choice is already made.</h3> */}
    <FortuneTeller />
  </div>
);

export default Home;
