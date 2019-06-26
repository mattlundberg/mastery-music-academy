import React, { Component } from "react";
import "../css/App.css";
import { Col, Row, Button } from "react-bootstrap";
import {
  TextField,
  EmailField,
  SelectField,
  PhoneField,
  inputValidation
} from "./InputFields";

class ContactForm extends Component {
  //Initialixing the State
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        firstName: "",
        lastName: "",
        email: ""
      },

      errors: {
        firstName: false,
        lastName: false,
        email: false
      },

      genderOptions: ["Male", "Female", "Others"]
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Handling the state update for input fields
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

  //Submit Handling
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <TextField
                title="First Name"
                fieldname="firstName"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.firstName}
                placeholdertext="First Name"
              />
            </Col>
            <Col>
              <TextField
                title="Last Name"
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
                title="Email"
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
      </div>
    );
  }
}

class ApplicationForm extends Component {
  //Initialixing the State
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        mailingstreet: "",
        mailingcity: "",
        mailingstate: "",
        mailingcountry: "",
        mailingpostal: "",
        gender: "",
        skills: []
      },

      genderOptions: ["Male", "Female", "Other"]
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  //Handling the state update for input fields
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

  //Handling for checkbox inputs
  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.userInfo.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.userInfo.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.userInfo.skills, newSelection];
    }

    this.setState(prevState => ({
      userInfo: { ...prevState.userInfo, skills: newSelectionArray }
    }));
  }

  //Submit Handling
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  //Clears the form
  handleClearForm(e) {
    e.preventDefault();
    this.setState(
      {
        userInfo: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          mailingstreet: "",
          mailingcity: "",
          mailingstate: "",
          mailingcountry: "",
          mailingpostal: "",
          gender: "",
          skills: []
        }
      },
      () => console.log(this.state.userInfo)
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs sm={12} md={5}>
              <TextField
                title="First Name"
                fieldname="firstName"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.firstName}
                placeholdertext="First Name"
              />
            </Col>
            <Col xs sm={12} md={5}>
              <TextField
                title="Last Name"
                fieldname="lastName"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.lastName}
                placeholdertext="Last Name"
              />
            </Col>
            <Col xs sm={12} md={2}>
              <SelectField
                title="Gender"
                fieldname="gender"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.gender}
                placeholdertext="Gender"
                options={this.state.genderOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <EmailField
                title="Email"
                fieldname="email"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.email}
                placeholdertext="example@email.com"
              />
            </Col>
            <Col>
              <PhoneField
                title="Phone Number"
                fieldname="phone"
                handler={this.handleUpdate}
                fieldvalue={this.state.userInfo.phone}
                placeholdertext="(999)999-999"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={1}>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Col>
            <Col xs={2}>
              <Button variant="dark" onClick={this.handleClearForm}>
                Clear Form
              </Button>
            </Col>
          </Row>
          <br />
        </form>
      </div>
    );
  }
}

export { ContactForm, ApplicationForm };
