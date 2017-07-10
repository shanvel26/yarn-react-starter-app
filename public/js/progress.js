import React, { Component } from 'react'
import '../css/home.css';

export default class Progress extends Component {
	constructor(props) {
		super(props);
  }

  showDetails() {
    console.log('props...', this.props.data);
  }

  render() {
    let swiftLeft = this.props.swiftLeft;
    let diff = this.props.diff;
    return (
      <span className='timeline' onClick={this.showDetails.bind(this)} style={{background: '#3F51B5', width: diff, position: 'absolute', left: swiftLeft}}></span>
    );
  }
}
