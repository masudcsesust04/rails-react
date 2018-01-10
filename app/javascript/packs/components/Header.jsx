import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li><Link to="/" href>Home</Link></li>
          <li><Link to="/users" href>User</Link></li>
          <li><Link to="/games" href>Game</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
