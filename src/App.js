import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		);
	}
}

// width: '100%', height: '100vh'
