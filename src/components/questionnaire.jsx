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
				className="d-flex flex-column"
				style={{
					paddingTop: '5rem',
					marginBottom: '.5rem',
					border: '.2rem solid purple'
				}}>
				<Form
					onSubmit={this.handleSubmit}
					style={{ padding: '1rem', backgroundColor: '#446990', border: '.1rem solid black' }}
					className="font">
					<Form.Group>
						<Form.Control
							id="fullname"
							name="name"
							type="text"
							placeholder="FULL NAME"
							value={this.state.fullname}
							onChange={this.handleChange}
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
						/>
					</Form.Group>

					{this.makeQuestions(this.state.questions)}

					<Button
						style={{ backgroundColor: '#F45B69', border: '#F45B69' }}
						type="submit"
						variant="primary"
						className="d-inline-block"
						disabled={this.state.disabled}>
						Send
					</Button>

					{this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
					{this.state.emailSent === false && <p className="d-inline error-msg">Hmm, try again</p>}
				</Form>
			</Container>
		);
	}
}

// onClick={(e) => this.handleCardClick(question.id, e)}
