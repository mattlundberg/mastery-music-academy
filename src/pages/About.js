import React, { Component } from "react";
import "../css/App.css";
import Body from "../components/Body";
import Header from "../components/Header";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

class About extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header username="Matt Lundberg" />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default About;
