import React, { Component } from 'react'
import '../css/home.css';
import Progress from './progress';
import axios from 'axios';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			meeting: [
				{
					room: 'CABIN-01',
					details: [
						{
							_id: '_id1',
							fromDate: '2017-06-04',
							toDate: '2017-06-04',
							fromTime: '10:00 AM',
							toTime: '11:00 AM',
							floor: 'F2',
							purpose: 'Interview with external candidate',
							invitees: ['shanvel26@gmail.com', 'devakarthik@gmail.com'],
							phone: '9994480379',
							chairperson: 'Nirmal',
							organiser: 'Shanmugavel'
						},
						{
							_id: '_id3',
							fromDate: '2017-06-04',
							toDate: '2017-06-04',
							fromTime: '12:00 PM',
							toTime: '12:20 PM',
							floor: 'F2',
							purpose: 'HR round',
							invitees: ['shanvel26@gmail.com', 'devakarthik@gmail.com'],
							phone: '9994480379',
							chairperson: 'Nirmal',
							organiser: 'Shanmugavel'
						}
					]
				},
				{
					room: 'CABIN-02',
					details: [
						{
							_id: '_id4',
							fromDate: '2017-06-04',
							toDate: '2017-06-04',
							fromTime: '09:00 AM',
							toTime: '10:00 AM',
							floor: 'F1',
							purpose: 'General discussion',
							invitees: ['shanvel26@gmail.com', 'ritesh@xyz.com'],
							phone: '9994480379',
							chairperson: 'surya',
							organiser: 'Surya'
						}
					]
				},
			]
		}
	}

	componentDidMount() {
		$('.ui.modal')
			.modal('hide')
		;

		$('#start_date').calendar({
			type: 'date'
		});

		$('#end_date').calendar({
			type: 'date'
		});

		$('#start_time').calendar({
			type: 'time'
		});

		$('#end_time').calendar({
			type: 'time'
		});

		$('.ui.dropdown')
			.dropdown()
		;
	}

	createNew() {
		$('.ui.modal')
			.modal('show')
			.modal({
				autofocus: false,
				closable: true
			});
		;
	}

	showDetails(e) {
		let value = e.target.dataset.value;
		// console.log("hello")
	}

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

	render() {
		let meeting = this.state.meeting;
		let all_meeting = meeting.map((data) => {
			console.log(data);
			let details = data['details'];

			let rooms = details.map((d, index) => {
				let { fromDate, fromTime, toDate, toTime } = d;
				let from = new Date(`${fromDate} ${fromTime}`);
				let to = new Date(`${toDate} ${toTime}`);

				let from_moment = moment(from);
				let to_moment = moment(to)
				let diff = to_moment.diff(from_moment, 'minutes');
				console.log(diff)

				let dt = new Date(from);
				dt = dt.setHours(9, 0, 0, 0);
				let first_moment = moment(dt);

				console.log('from_moment', from_moment);
				console.log('first_moment', first_moment);

				let swiftLeft = from_moment.diff(first_moment, 'minutes');
				console.log('SWIFTLEFT', swiftLeft);

				return (
					<Progress data={d} diff={diff} swiftLeft={swiftLeft+100} />
				);
			})

			return (
				<div style={{padding: '10px 0'}}>
					<span>{data.room}</span>
					{ rooms }
				</div>
			)
		})

		return (
			<div className="ui grid container">

					<div className="sixteen wide column">
						<button className="ui large primary basic button" onClick={this.createNew.bind(this)}>New Meeting</button>
					</div>
				
				<div className="timeline sixteen wide column" id="timeline">
					<span style={{width: 100}}>Room</span>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span>12</span>
					<span>13</span>
					<span>14</span>
					<span>15</span>
					<span>16</span>
					<span>17</span>
					<span>18</span>
					<span>19</span>
					<span>20</span>
					{ all_meeting }

					<div className="ui modal">
						<i className="close icon"></i>
						<div className="header">
							New Meeting
						</div>
						<div className="content">
							<form id="myForm" className="ui large form">
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
							<div className="ui black deny button">
								Cancel
							</div>
							<div className="ui primary right labeled icon button" onClick={this.submit}>
								Schedule Now
								<i className="checkmark icon"></i>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}
