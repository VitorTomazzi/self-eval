import React, { Component } from 'react';
import Question from '../components/question';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			return <Question question={question} key={question.id} />;
		});
	};

	render() {
		return (
			<Container>
				<Row>
					<Col>{this.makeQuestions(this.state.questions)}</Col>
				</Row>
			</Container>
		);
	}
}

// onClick={(e) => this.handleCardClick(question.id, e)}
