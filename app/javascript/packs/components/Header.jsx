import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">React Demo</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/users" href>Users</Link></li>
          <li><Link to="/diamonds" href>Diamonds</Link></li>
          <li><Link to="/games" href>Game</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
