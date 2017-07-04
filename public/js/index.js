import React from 'react';
// import { Route, IndexRoute, Router, Link, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import App from './app';

const router = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

render(router, document.getElementById('app'));
