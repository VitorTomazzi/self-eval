import React, { Component } from 'react';
import Question from './question';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstral/Button';

export default class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			repo: '',
			URL: '',
			displayed: '',
			emailSent: '',
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
			<Container>
				<Row>
					<Form onSubmit={this.handleSubmit} style={{ padding: '1rem' }} className="lfont">
						<Form.Group>
							<Form.Label htmlFor="full-name">Name</Form.Label>
							<Form.Control
								id="full-name"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								id="email"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control
								id="message"
								name="message"
								as="textarea"
								rows="4"
								value={this.state.message}
								onChange={this.handleChange}
							/>
						</Form.Group>

						{this.makeQuestions(this.state.questions)}
						<Button
							style={{ backgroundColor: '#2B96B7', border: '#2B96B7' }}
							type="submit"
							variant="primary"
							className="d-inline-block"
							disabled={this.state.disabled}>
							Send
						</Button>

						{this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
						{this.state.emailSent === false && <p className="d-inline error-msg">Hmm, try again</p>}
					</Form>
				</Row>
			</Container>
		);
	}
}

// onClick={(e) => this.handleCardClick(question.id, e)}
