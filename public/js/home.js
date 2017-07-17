import React, { Component } from 'react';
import '../css/home.css';
import Progress from './progress';
import axios from 'axios';
import NewMeeting from './newmeeting';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			meeting: [],
			currentDate: ''
		}
	}

	instantiateCalendar() {
		let self = this;
		
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

		$('#scheduledDate').calendar({
			type: 'date',
			onChange: function (date, text, mode) {
				self.loadSchedule(text);
				console.log("date changed.....", date, text, mode)
			},
		});
	}

	getCurrentDate() {
		let self = this;
		axios({
			method: 'get',
			url: '/getCurrentDate',
		})
		.then(resp => {
			console.log(resp.data);
			let currentDate = resp.data;
			this.loadSchedule(currentDate)
			self.setState({
				currentDate
			})
		});
	}

	componentDidMount() {
		let self = this;
		$('.ui.modal').modal('hide');
		this.instantiateCalendar();
		this.getCurrentDate();


		
	}

	
	loadSchedule(date) {
		var self = this;
		axios({
			method: 'get',
			url: '/find',
			params: {
				date: date
			}
		})
		.then(resp => {
			console.log("GOT THE DAT", resp.data);
			let meeting = resp.data;
			console.log("meeting &&&&&&&&&&&&&", meeting);
			self.setState({
				meeting: meeting,
				currentDate: date
			})
		});
	}

	showDetails(e) {
		let value = e.target.dataset.value;
		// console.log("hello")
	}

	render() {
		let meeting = this.state.meeting;
		let all_meeting = meeting.map((data, index) => {
			console.log(data);
			let details = data['details'];

			let rooms = details.map((d, index) => {
				let { fromDate, fromTime, toDate, toTime } = d;
				let from = new Date(`${fromDate} ${fromTime}`);
				let to = new Date(`${toDate} ${toTime}`);

				let from_moment = moment(from);
				let to_moment = moment(to);

				let from_minutes = from_moment.format('H') * 60;
				from_minutes = Number(from_moment.format('m')) + from_minutes;

				let to_minutes = to_moment.format('H') * 60;
				to_minutes = Number(to_moment.format('m')) + to_minutes;

				console.log('from_minutes', from_minutes);
				console.log('to_minutes', to_minutes);

				let minutes = to_minutes - from_minutes;

				let dt = new Date(from);
				dt = dt.setHours(9, 0, 0, 0);
				let first_moment = moment(dt);

				console.log('from_moment', from_moment);
				console.log('first_moment', first_moment);

				let swiftLeft = from_moment.diff(first_moment, 'minutes');
				console.log('SWIFTLEFT', swiftLeft);

				return (
					<Progress key={index} data={d} diff={minutes} swiftLeft={swiftLeft+200} />
				);
			})

			return (
				<div key={index} style={{padding: '10px 0'}}>
					<span>{data.room}</span>
					{ rooms }
				</div>
			)
		})

		return (
			<div className="ui grid container" style={{marginTop: 80}}>
				<NewMeeting />
				<div className="timeline sixteen wide column" id="timeline">
					<div className="ui large form" style={{marginBottom: '20px'}}>
							<div className="ui calendar" id="scheduledDate">
								<label>Select a date: </label>
								<div className="ui input left icon">
									<i className="time icon"></i>
									<input type="text" id="scheduledDate1" name="scheduledDate" style={{width: 'auto'}} value={this.state.currentDate}/>
								</div>
							</div>
					</div>

					<span style={{width: 200}}>Room</span>
					<span>9 am</span>
					<span>10 am</span>
					<span>11 am</span>
					<span>12 am</span>
					<span>1 pm</span>
					<span>2 pm</span>
					<span>3 pm</span>
					<span>4 pm</span>
					<span>5 pm</span>
					<span>6 pm</span>
					<span>7 pm</span>
					<span>8 pm</span>
					<span>9 pm</span>
					<span>10 pm</span>
					{ all_meeting.length > 0 ? all_meeting : <div>No meetings scheduled</div> }
				</div>
			</div>
		)
	}
}
