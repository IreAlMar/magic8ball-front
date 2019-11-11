import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import Logo from '../static/images/billiard-ball.png';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="App-nav-item"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="App-header">
    <img src={Logo} alt="Magic 8 ball" className="App-logo" />
    <h1>
      Magic 8 ball
    </h1>
    <nav className="App-nav">
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
