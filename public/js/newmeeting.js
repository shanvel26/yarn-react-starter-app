import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';
import { 
  StartDate, 
  StartTime, 
  EndDate, 
  EndTime,
  Floor,
  Room,
} from './Components';

import '../dist/semantic.css';
// import '../dist/semantic.min.js';

export default class NewMeeting extends Component {

  constructor(props) {
		super(props);
    this.state = {
      floor: [],
      room: [],
      boardInfo: []
    }
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown();

    axios({
      method: 'get',
      url: '/getNewMeetingConfig',
    })
    .then((resp) => {
      console.log(resp);
      let data = resp.data;
      let floor = _.pluck(data, 'floor');
      console.log(floor)
      this.setState({
        floor,
        boardInfo: data
      })
    });


    $('.ui.form')
  .form({
    inline: true,
    on: 'blur',
    fields: {
      fromDate : 'empty',
      fromTime: 'empty',
      toDate: 'empty',
      toTime: 'empty',
      floor: 'empty',
    }
  });
  }

  onChangeFloor(value) {
    console.log("ON Change floor....", value);

    let self = this;
    let selectedFloor = value;
    let floors = this.state.floor;
    let boardInfo = this.state.boardInfo;
    console.log('floors', floors);
    console.log('board info', this.state.boardInfo);
    _.find(boardInfo, board => {
      if (board.floor === selectedFloor) {
        console.log('rooms---', board.rooms);
        self.setState({
          rooms: board.rooms
        });
        return board.rooms;
      }
    });
  }

  submit(e) {
    e.preventDefault();
		let $form = $('#myForm');
		let allValues = $form.form('get values');
		console.log(allValues);

    // $('.ui.form').form('error', 'i am a error...');

    $('.ui.form').form('add errors', {invitees: "im a error"});

    // $('.ui.form').form('add prompt', 'invitees', 'Invitees required...');

    // $('.ui.form').form('remove prompt', 'invitees');


		axios({
			method: 'post',
			url: '/new',
			data: allValues
		})
		.then((resp) => {
			console.log(resp.data);
		});
	}

  createNew(e) {
    e.stopPropagation();
		$('#new_modal').modal('show');
	}

  render() {
    return (
      <div>
        <div className="sixteen wide column">
          <button className="ui large primary indigo basic button" onClick={this.createNew.bind(this)}>
            Schedule a Meeting
          </button>
        </div>
        <div className="ui modal" id="new_modal">
          <i className="close icon"></i>
          <div className="header">
            New Meeting
          </div>


          




          <div className="content">
            <form id="myForm" className="ui form segment">
              <div className="field">
                <label>Start Date</label>
                <div className="two fields">
                  <div className="field">
                    <StartDate />
                  </div>
                  <div className="field">
                    <StartTime />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>End Date</label>
                <div className="two fields">
                  <div className="field">
                    <EndDate />
                  </div>
                  <div className="field">
                    <EndTime />
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Location</label>
                <div className="three fields">
                  <div className="field">
                    <Floor floors={this.state.floor} callback={this.onChangeFloor.bind(this)} />
                  </div>
                  <div className="field">
                    <Room rooms={this.state.rooms} />
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

              <div className="actions" style={{marginTop: 20}}>
                <div className="ui deny button">
                  Cancel
                </div>
                <div className="ui primary submit indigo right labeled icon button" onClick={this.submit}>
                  Schedule Now
                  <i className="checkmark icon"></i>
                </div>
                <div className="ui error message"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
