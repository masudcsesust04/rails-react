import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Root from './Root';
import User from './User';
import UserDetails from './UserDetails';
import Game from './Game';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/users" component={User} />
            <Route exact path="/users/:id/:name" component={UserDetails} />
            <Route exact path="/games" component={Game} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
