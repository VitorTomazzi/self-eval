import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import HomePage from './pages/homepage';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Container
					fluid={true}
					className="p-0"
					style={{ backgroundColor: '#114B5F', width: '100%', height: '100vh' }}>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
					</Switch>
				</Container>
			</Router>
		);
	}
}
