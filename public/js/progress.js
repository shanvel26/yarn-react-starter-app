import React, { Component } from 'react'
import '../css/home.css';
import moment from 'moment';

export default class Progress extends Component {
	constructor(props) {
		super(props);
  }

  showDetails(e) {
    e.stopPropagation();
    console.log('props...', this.props.data._id);
    let id = this.props.data._id;
    $(`#${id}`).modal('show');
  }

  render() {
    let swiftLeft = this.props.swiftLeft;
    let diff = this.props.diff;
    let data = this.props.data;

    console.log("DATA", data)

    return (
      <div style={{display: 'inline'}}>
        <span className='timeline' onClick={this.showDetails.bind(this)} style={{background: '#3F51B5', width: diff, position: 'absolute', left: swiftLeft}}>
        </span>
        <div id={data._id} className="ui modal">
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
              <div className="sixteen wide column">
                <div style={styles.row}>
                  <label style={styles.label}>Purpose</label>
                  <span>{ data.purpose }</span>
                </div>
                <div style={styles.row}>
                  <label style={styles.label}>Invitees</label>
                  <span>{ data.invitees }</span>
                </div>
                <div style={styles.row}>
                  <label style={styles.label}>Chairperson</label>
                  <span>{ data.chairperson }</span>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="ui cancel button">Okay</div>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  row: {
    margin: 10
  },
  label: {
    marginRight: 20,
    fontWeight: 'bold',
    minWidth: 100,
    display: 'inline-block'
  }
}