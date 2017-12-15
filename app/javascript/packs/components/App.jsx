import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import {Root} from "./Root";
import {Home} from "./Home";
import {User} from "./User";

class App extends React.Component {
  render() {
    return (
        <Router>      
            <div>      
                <ul>
                    <li><Link to="/">Root</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>

                <Route exact path={"/"} component={Root} />
                <Route path={"/user"} component={User} />
                <Route path={"/home"} component={Home} />
            </div>
        </Router>
    );
  }
}

export default App;
