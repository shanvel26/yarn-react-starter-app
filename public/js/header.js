import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <div className="ui top fixed indigo inverted segment menu">
          <div className="item" style={{padding: 0}}>
            <img src="/images/logo.png" style={{width: 120}}/>
          </div>
          <div className="right menu">
            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
    )
  }
}
