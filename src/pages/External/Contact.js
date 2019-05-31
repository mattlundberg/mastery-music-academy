import React, { Component } from "react";
import "../../css/App.css";
import { Col, Row, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";
import { TextField, EmailField } from "../../components/InputFields";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        firstName: "",
        lastName: "",
        email: ""
      },

      genderOptions: ["Male", "Female", "Others"]
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          userInfo: {
            ...prevState.userInfo,
            [name]: value
          }
        };
      },
      () => console.log(this.state.userInfo)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navigation />
        <Header username="Matt Lundberg" />
        <br />
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <TextField
                labeltext="First Name"
                fieldname="firstName"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.firstName}
                placeholdertext="First Name"
              />
            </Col>
            <Col>
              <TextField
                labeltext="Last Name"
                fieldname="lastName"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.lastName}
                placeholdertext="Last Name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <EmailField
                labeltext="Email"
                fieldname="email"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.email}
                placeholdertext="example@email.com"
              />
            </Col>
            <Col />
          </Row>
          <br />
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
