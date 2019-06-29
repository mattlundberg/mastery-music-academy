import React, { Component } from "react";
import "../../css/App.css";
import { SubBody } from "../../components/Body";
import { SubHeader } from "../../components/Header";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";

class About extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <SubHeader username="Matt Lundberg" />
        <SubBody />
        <Footer />
      </div>
    );
  }
}

export default About;
