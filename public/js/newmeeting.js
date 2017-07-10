import React, { Component } from 'react';
import axios from 'axios';

export default class NewMeeting extends Component {

  submit() {

		let $form = $('#myForm');
		let allValues = $form.form('get values');
		console.log(allValues);

		axios({
			method: 'post',
			url: '/new',
			data: allValues
		})
		.then((resp) => {
			console.log(resp.data);
		});
	}

  createNew() {
		$('.ui.modal')
			.modal('show')
		;
	}


  render() {
    return (
      <div>
        <div className="sixteen wide column">
          <button className="ui large primary indigo basic button" onClick={this.createNew.bind(this)}>
            Schedule a Meeting
          </button>
        </div>
        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            New Meeting
          </div>
          <div className="content">
            <form id="myForm" className="ui form">
              <div className="field">
                <label>Start Date</label>	
                <div className="two fields">
                  <div className="field">
                    <div className="ui calendar" id="start_date">
                      <div className="ui input left icon">
                        <i className="calendar icon"></i>
                        <input type="text" name="fromDate" placeholder="Date" style={{width: 'auto'}} />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui calendar" id="start_time">
                      <div className="ui input left icon">
                        <i className="time icon"></i>
                        <input type="text" name="fromTime" placeholder="Starts at..." style={{width: 'auto'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>End Date</label>
                <div className="two fields">
                  <div className="field">
                    <div className="ui calendar" id="end_date">
                      <div className="ui input left icon">
                        <i className="calendar icon"></i>
                        <input type="text" name="toDate" placeholder="Date" style={{width: 'auto'}} />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui calendar" id="end_time">
                      <div className="ui input left icon">
                        <i className="time icon"></i>
                        <input type="text" name="toTime" placeholder="Ends at..." style={{width: 'auto'}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Location</label>
                <div className="three fields">
                  <div className="field">
                    <select className="ui dropdown" name="floor">
                      <option value="">Floor</option>
                      <option value="1">F1</option>
                      <option value="2">F2</option>
                    </select>
                  </div>
                  <div className="field">
                    <select className="ui dropdown" name="room">
                      <option value="">Room</option>
                      <option value="1">CABIN-1</option>
                      <option value="2">CABIN-2</option>
                    </select>
                  </div>
                  <div className="field">
                    <input type="text" name="capacity" placeholder="Capacity in seats" />
                  </div>
                </div>
              </div>

              <div className='field'>
                <label>Purpose</label>
                <textarea rows="2" name="purpose" placeholder="Agenda/Purpose of the meeting ..."></textarea>
              </div>
              
              <div className='field'>
                <label>Invitees</label>
                <textarea rows="2" name="invitees" placeholder="Email id's of the invitees (seperate emails by comma)"></textarea>
              </div>

              <div className='ui column two grid'>
                <div className='column'>
                  <div className='field'>
                    <label>Chairperson</label>
                    <input type="text" name="chairperson" placeholder="Email/name of the chairperson" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="actions">
            <div className="ui deny button">
              Cancel
            </div>
            <div className="ui primary indigo right labeled icon button" onClick={this.submit}>
              Schedule Now
              <i className="checkmark icon"></i>
            </div>
          </div>

        </div>
      </div>
    )
  }
}