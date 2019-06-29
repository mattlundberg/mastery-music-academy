import React, { Component } from "react";
import "../../css/App.css";
import { HomeBody } from "../../components/Body";
import { HomeHeader } from "../../components/Header";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HomeHeader username="Matt Lundberg" />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Home;
