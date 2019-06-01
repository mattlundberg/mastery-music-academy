import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/External/Home";
import About from "../pages/External/About";
import Contact from "../pages/External/Contact";
import Application from "../pages/External/Application";
import NotFound from "../pages/External/NotFound";

import MemberProfile from "../pages/Authenticated/Profile/MemberProfle";

import Container from "react-bootstrap/Container";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Router>
            <Switch>
              {/* External URLS */}
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/application" component={Application} />

              {/* Authenticated URLs */}
              <Route
                path="/authenticated/profile/member"
                component={MemberProfile}
              />

              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default Routes;
