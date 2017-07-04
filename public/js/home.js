import React, { Component } from 'react'
import '../css/home.css';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			meeting: [
				{
					room: 'CABIN-01',
					details: [
						{
							dt: '2017-06-04',
							from: '10:30',
							to: '11:30',
							floor: 'F2',
							purpose: 'Interview with external candidate',
							invitees: ['shanvel26@gmail.com', 'devakarthik@gmail.com'],
							phone: '9994480379',
							chairperson: 'Nirmal',
							organiser: 'Shanmugavel'
						},
						{
							dt: '2017-06-04',
							from: '17:00',
							to: '18:00',
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
							dt: '2017-06-04',
							from: '13:00',
							to: '14:30',
							floor: 'F1',
							purpose: 'General discussion',
							invitees: ['shanvel26@gmail.com', 'nitesh@xyz.com'],
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
		$('#example2').calendar({
			type: 'date'
		});

		$('#example3').calendar({
			type: 'time'
		});
	}

	render() {
		let meeting = this.state.meeting;
		meeting.map((data) => {
			console.log(data);
			let details = data['details'];
			<span style={{background: '#0275D8', height: 20, left: 60, width: 60, position: 'absolute'}}></span>
		})






		return (
			<div className='container'>
				<div className='col-6'>
					<form>

						<div className="ui calendar" id="example3">
							<div className="ui input left icon">
								<i className="time icon"></i>
								<input type="text" placeholder="Time" />
							</div>
						</div>


						<div className="ui calendar" id="example2">
							<div className="ui input left icon">
								<i className="calendar icon"></i>
								<input type="text" placeholder="Date" />
							</div>
						</div>
					</form>
				</div>

				<div>
					<div>
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
					</div>
					<div style={{position: 'relative'}}>
						<span style={{background: '#0275D8', height: 20, left: 60, width: 60, position: 'absolute'}}></span>
						<span style={{background: '#0275D8', height: 20, left: 120, width: 60, position: 'absolute'}}></span>
						<div style={{background: '#0275D8', height: 20, left: 240, width: 60, position: 'absolute'}}></div>
					</div>
				</div>
			</div>
		)
	}
}
