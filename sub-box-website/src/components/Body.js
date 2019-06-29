import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <body>
        <p>This is Emilie's website for the subscription box.</p>
      </body>
    );
  }
}

class HomeBody extends Component {
  render() {
    return (
      <body>
        <p>This is the home page content</p>
      </body>
    );
  }
}

class SubBody extends Component {
  render() {
    return (
      <body>
        <p>This is the sub information page content</p>
      </body>
    );
  }
}

class AboutUsBody extends Component {
  render() {
    return (
      <body>
        <p>This is the about us page content</p>
      </body>
    );
  }
}

export { Body, HomeBody, AboutUsBody, SubBody };
