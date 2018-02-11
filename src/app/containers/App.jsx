import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/home">home</NavLink>
      </li>
      <li>
        <NavLink to="/list">list</NavLink>
      </li>
    </ul>
    <div>{children}</div>
  </div>
);

App.propTypes = {
  children: propTypes.arrayOf(propTypes.node).isRequired,
};

export default App;
