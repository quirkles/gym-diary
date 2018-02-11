import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/link" />
      </li>
      <li>
        <NavLink to="/home" />
      </li>
    </ul>
    <div>{children}</div>
  </div>
);

App.propTypes = {
  children: propTypes.arrayOf(propTypes.node).isRequired,
};

export default App;
