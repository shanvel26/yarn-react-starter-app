import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse bg-primary" style={{ "marginBottom": 50 }}>
        <nav className="container">
          <a className="navbar-brand" href="/">
            myMeeting
          </a>
        </nav>
      </header>
    )
  }
}
