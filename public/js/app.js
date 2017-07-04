import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<header className="navbar navbar-inverse bg-primary" style={{ "marginBottom": 50 }}>
					<nav className="container">
						<a className="navbar-brand" href="/">
							Book a meeting
					  </a>
					</nav>
				</header>
				Home page... finally made it!!!
				{this.props.children}
			</div>
		)
	}
}
