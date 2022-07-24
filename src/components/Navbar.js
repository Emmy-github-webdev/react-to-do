/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <button>{navbarOpen ? 'Close' : 'Open'}</button>
      <ul>
        {links.map((link) => <li key={link.id}><NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
