import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const routes = [{path: '/', name: 'Home'}, { path: '/places', name: 'Places', }];

function Navbar() {
    const items = routes.map((route, i) => <li key={i}><NavLink exact to={route.path}>{route.name}</NavLink></li>);

    return (
      <nav className='navbar'>
          <ul>
              {items}
          </ul>
      </nav>
    );
}

export default Navbar;
