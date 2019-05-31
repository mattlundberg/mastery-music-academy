import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Container from "react-bootstrap/Container";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default Routes;
