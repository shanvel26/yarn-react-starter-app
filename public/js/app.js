import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header';
import Main from './main';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}
