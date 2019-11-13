import React from 'react';
import FortuneTeller from './FortuneTeller';

const Home = () => (
  <div className="center">
    <h2>
      Those who ask will receive an answer
    </h2>
    {/* <h3>Even though the choice is already made.</h3> */}
    <FortuneTeller />
  </div>
);

export default Home;
