import React, { Component } from "react";

class HomeHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Welcome to Subscription Box</h1>
        <h3>Bringing music to you and your kids</h3>
      </header>
    );
  }
}

class SubHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Welcome {this.props.username}</div>
      </header>
    );
  }
}

class AboutUsHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Welcome {this.props.username}</div>
      </header>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Welcome {this.props.username}</div>
      </header>
    );
  }
}

export { HomeHeader, Header, AboutUsHeader, SubHeader };
