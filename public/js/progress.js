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
    $('#details').modal('show');
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
              <i className="calendar outline icon"></i>
              { moment(data.fromDate).format('dddd, MMM DD, YYYY') }
              <div style={{fontWeight: 'normal', fontSize: '0.8em', marginTop: 10, marginLeft: 30}}>
                { data.fromTime } to { data.toTime }
              </div>

              <div style={{marginTop: '10px'}}>
                <i className="marker icon"></i>
                <span style={{fontSize: '0.75em'}}>{ data.room }</span>
              </div>
            </div>
          
            
            {/*{moment(data.fromDate).format('MMM DD, YYYY')}
            {
              (() => {
                if (moment(data.fromDate).isBefore(data.toDate)) {
                  return ` - ${data.toDate}`;
                }
              })()
            }*/}
          
          <div className="content">
            <div className="ui grid form">
              <div className="four wide column">
                <label>Purpose</label>
              </div>
              <div className="twelve wide column">
                <div>{ data.purpose }</div>
              </div>
              <div className="four wide column">
                <label>Invitees</label>
              </div>
              <div className="twelve wide column">
                <div>{ data.invitees }</div>
              </div>
              <div className="four wide column">
                <label>Chairperson</label>
              </div>
              <div className="twelve wide column">
                <div>{ data.chairperson }</div>
              </div>
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
