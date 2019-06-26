import React, { Component } from "react";
import "../../css/App.css";
import Header from "../../components/Header";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";
import { ContactForm } from "../../components/FormSelection";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header username="Matt Lundberg" />
        <br />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default Contact;
