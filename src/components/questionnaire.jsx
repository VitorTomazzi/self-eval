import React, { Component } from 'react';
import Question from './question';

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
			score: '',
			questions: [
				{
					id: 0,
					evaluation: 'Using best practices OOP'
				},
				{
					id: 1,
					evaluation: 'Modular Development'
				},
				{
					id: 2,
					evaluation: 'Full-stack workflow understanding'
				},
				{
					id: 3,
					evaluation: 'Testing'
				},
				{
					id: 4,
					evaluation: 'Database knowledge'
				},
				{
					id: 5,
					evaluation: 'Debugging'
				},
				{
					id: 6,
					evaluation: 'Problem solving skills'
				},
				{
					id: 7,
					evaluation: 'Javascript'
				},
				{
					id: 8,
					evaluation: 'HTML'
				},
				{
					id: 9,
					evaluation: 'CSS'
				},
				{
					id: 10,
					evaluation: 'Working on a team'
				},
				{
					id: 11,
					evaluation: 'Self motivation'
				},
				{
					id: 12,
					evaluation: 'Communication skills'
				},
				{
					id: 13,
					evaluation: 'Your own energy level'
				},
				{
					id: 14,
					evaluation: 'Intelligence/Aptitude'
				}
			]
		};
	}

	makeQuestions = (questions) => {
		return questions.map((question) => {
			return (
				<Question question={question} key={question.id} value={this.state.score} onChange={this.handleChange} />
			);
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

		this.setState({
			disabled: true
		});
	};

	render() {
		return (
			<Container
				fluid
				style={{
					border: '.2rem solid purple',
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
						width: '30vw',
						padding: '1.5rem',
						backgroundColor: '#446990',
						border: '.1rem solid black'
					}}
					className="font">
					<Form.Group>
						<Form.Control
							id="fullname"
							name="fullname"
							type="text"
							placeholder="FULL NAME"
							value={this.state.fullname}
							onChange={this.handleChange}
							style={{ backgroundColor: '#E4FDE0', color: '#114B5F' }}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							id="email"
							name="email"
							type="email"
							placeholder="EMAIL"
							value={this.state.email}
							onChange={this.handleChange}
							style={{ backgroundColor: '#E4FDE0', color: '#114B5F' }}
							className="form-control font"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							id="repo"
							name="repo"
							type="text"
							placeholder="PROJECT REPOSITORY"
							value={this.state.repo}
							onChange={this.handleChange}
							style={{ backgroundColor: '#E4FDE0', color: '#114B5F' }}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							id="URL"
							name="URL"
							type="text"
							placeholder="PROJECT URL"
							value={this.state.URL}
							onChange={this.handleChange}
							style={{ backgroundColor: '#E4FDE0', color: '#114B5F' }}
						/>
					</Form.Group>

					{this.makeQuestions(this.state.questions)}

					<button
						style={{
							color: '#E4FDE0',
							backgroundColor: '#F45B69',
							border: '#F45B69',
							width: '100%',
							padding: '.5rem'
						}}
						type="submit"
						//variant="primary"
						//className="d-inline-block"
						disabled={this.state.disabled}>
						Submit
					</button>

					{this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
					{this.state.emailSent === false && <p className="d-inline error-msg">Hmm, try again</p>}
				</Form>
			</Container>
		);
	}
}

// onClick={(e) => this.handleCardClick(question.id, e)}
