import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import {Root} from "./Root";
import {Home} from "./Home";
import {User} from "./User";
import {UserDetails} from "./UserDetails";

class App extends React.Component {
  render() {
    return (
        <Router>      
            <div>      
                <ul>
                    <li><Link to="/">Root</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/users">User</Link></li>
                    <li><Link to="/users/1/masud">User 1</Link></li>
                </ul>

                <Route exact path={"/"} component={Root} />
                <Route exact path={"/home"} component={Home} />
                <Route exact path={"/users"} component={User} />
                <Route exact path={"/users/:id/:name"} component={UserDetails} />
            </div>
        </Router>
    );
  }
}

export default App;
