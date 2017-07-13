import React, { Component } from 'react'
import '../css/home.css';
import moment from 'moment';

export default class Progress extends Component {
	constructor(props) {
		super(props);
  }

  showDetails(e) {
    e.stopPropagation();
    console.log('props...', this.props.data);
    $('#details').modal('toggle');
  }

  render() {
    let swiftLeft = this.props.swiftLeft;
    let diff = this.props.diff;
    let data = this.props.data;
    return (
      <div style={{display: 'inline'}}>
        <span className='timeline' onClick={this.showDetails.bind(this)} style={{background: '#3F51B5', width: diff, position: 'absolute', left: swiftLeft}}>
        </span>
        <div id="details" className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            {moment(data.fromDate).format('MMM DD, YYYY')}
            {
              (() => {
                if (moment(data.fromDate).isBefore(data.toDate)) {
                  return ` - ${data.toDate}`;
                }
              })()
            }
          </div>
          <div className="image content">
            <div className="image">
              An image can appear on left or an icon
            </div>
            <div className="description">
              A description can appear on the right
            </div>
          </div>
          <div className="actions">
            <div className="ui button">Cancel</div>
            <div className="ui button">OK</div>
          </div>
        </div>
      </div>
    );
  }
}
