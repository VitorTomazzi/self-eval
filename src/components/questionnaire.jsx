import React, { Component } from 'react';
import Question from './question';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			repo: '',
			URL: '',
			displayed: false,
			emailSent: null,
			//score: '',
			questions: [
				{
					id: 0,
					evaluation: 'Using best practices OOP',
					score: ''
				},
				{
					id: 1,
					evaluation: 'Modular Development',
					score: ''
				},
				{
					id: 2,
					evaluation: 'Full-stack workflow understanding',
					score: ''
				},
				{
					id: 3,
					evaluation: 'Testing',
					score: ''
				},
				{
					id: 4,
					evaluation: 'Database knowledge',
					score: ''
				},
				{
					id: 5,
					evaluation: 'Debugging',
					score: ''
				},
				{
					id: 6,
					evaluation: 'Problem solving skills',
					score: ''
				},
				{
					id: 7,
					evaluation: 'Javascript',
					score: ''
				},
				{
					id: 8,
					evaluation: 'HTML',
					score: ''
				},
				{
					id: 9,
					evaluation: 'CSS',
					score: ''
				},
				{
					id: 10,
					evaluation: 'Working on a team',
					score: ''
				},
				{
					id: 11,
					evaluation: 'Self motivation',
					score: ''
				},
				{
					id: 12,
					evaluation: 'Communication skills',
					score: ''
				},
				{
					id: 13,
					evaluation: 'Your own energy level',
					score: ''
				},
				{
					id: 14,
					evaluation: 'Intelligence Aptitude',
					score: ''
				}
			]
		};
	}

	makeQuestions = (questions) => {
		return questions.map((question) => {
			return <Question question={question} key={question.id} onChange={this.handleChange} />;
		});
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { fullname, email, repo, URL } = this.state;

		const data = {
			fullname,
			email,
			repo,
			URL
		};

		axios.post('api/sendMail', data);

		// this.setState({
		// 	disabled: true
		// });
	};

	render() {
		return (
			<Container
				fluid
				style={{
					//border: '.2rem solid purple',
					//height: '100vh',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					backgroundColor: '#114B5F'
				}}>
				<Form
					onSubmit={this.handleSubmit}
					style={{
						//marginTop: '5rem',
						//marginLeft: '1rem',
						margin: '1rem',
						padding: '1.5rem',
						backgroundColor: '#446990'
						//border: '.1rem solid black'
					}}
					className="font">
					<div>
						<input
							id="fullname"
							name="fullname"
							type="text"
							placeholder="FULL NAME"
							value={this.state.fullname}
							onChange={this.handleChange}
							style={{
								backgroundColor: '#E4FDE0',
								color: '#114B5F',
								borderStyle: 'none',
								marginBottom: '1rem',
								width: '100%',
								padding: '.5rem 1rem'
							}}
							className="font"
						/>
					</div>
					<div>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="EMAIL"
							value={this.state.email}
							onChange={this.handleChange}
							style={{
								backgroundColor: '#E4FDE0',
								color: '#114B5F',
								borderStyle: 'none',
								marginBottom: '1rem',
								width: '100%',
								padding: '.5rem 1rem'
							}}
							className="font"
						/>
					</div>
					<div>
						<input
							id="repo"
							name="repo"
							type="text"
							placeholder="PROJECT REPO"
							value={this.state.repo}
							onChange={this.handleChange}
							style={{
								backgroundColor: '#E4FDE0',
								color: '#114B5F',
								borderStyle: 'none',
								marginBottom: '1rem',
								width: '100%',
								padding: '.5rem 1rem'
							}}
						/>
					</div>
					<div>
						<input
							id="URL"
							name="URL"
							type="text"
							placeholder="PROJECT URL"
							value={this.state.URL}
							onChange={this.handleChange}
							style={{
								backgroundColor: '#E4FDE0',
								color: '#114B5F',
								borderStyle: 'none',
								marginBottom: '1rem',
								width: '100%',
								padding: '.5rem 1rem'
							}}
						/>
					</div>

					<p className="font" style={{ padding: '1rem' }}>
						Each category scores from 1 to 5. Total of 50 pts can be used
					</p>
					<hr />

					{/* {this.makeQuestions(this.state.questions)} */}

					<button
						style={{
							color: '#E4FDE0',
							backgroundColor: '#F45B69',
							border: '#F45B69',
							width: '100%',
							padding: '.5rem',
							letterSpacing: '.2rem'
						}}
						type="submit"
						disabled={this.state.disabled}>
						Submit
					</button>

					{/* {this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
					{this.state.emailSent === false && <p className="d-inline error-msg">Hmm, try again</p>} */}
				</Form>
			</Container>
		);
	}
}

// onClick={(e) => this.handleCardClick(question.id, e)}
