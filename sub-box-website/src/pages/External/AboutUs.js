import React, { Component } from "react";
import "../../css/App.css";
import { AboutUsHeader } from "../../components/Header";
import { AboutUsBody } from "../../components/Body";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutUsHeader username="Matt Lundberg" />
        <br />
        <AboutUsBody />
        <Footer />
      </div>
    );
  }
}

export default Contact;
