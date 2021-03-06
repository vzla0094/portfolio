import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Main from "../../main";
class Index extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect exact from="/" to="/portfolio" />
            <Route exact path="/portfolio" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Index;
