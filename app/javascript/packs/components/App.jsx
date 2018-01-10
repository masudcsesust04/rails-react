import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Root from './Root';
import Home from './Home';
import User from './User';
import UserDetails from './UserDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Root} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/users" component={User} />
          <Route exact path="/users/:id/:name" component={UserDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
