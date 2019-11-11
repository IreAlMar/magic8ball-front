import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from '../static/images/logo.png';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <img src={Logo} alt="Logo" style={{ width: 70 }} />
    <h1 className="h1 inline-block mr2">
      My site
    </h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/aboutus">About us</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
