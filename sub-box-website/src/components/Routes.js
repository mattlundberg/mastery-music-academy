import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/External/Home";
import SubscriptionBox from "../pages/External/SubscriptionBox";
import AboutUs from "../pages/External/AboutUs";
import Buy from "../pages/External/Buy";
import NotFound from "../pages/External/NotFound";

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
              <Route path="/subscriptionbox" component={SubscriptionBox} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/buy" component={Buy} />

              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default Routes;
