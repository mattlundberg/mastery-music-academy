import React, { Component } from "react";
import "../../css/App.css";
import { Header } from "../../components/Header";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";
import { ApplicationForm } from "../../components/FormSelection";

class Application extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header username="Matt Lundberg" />
        <br />
        <ApplicationForm />
        <Footer />
      </div>
    );
  }
}

export default Application;
