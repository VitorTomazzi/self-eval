import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class Question extends Component {
	render() {
		const { id, evaluation } = this.props.question;

		return (
			<Col>
				<Form.Group>
					<Form.Label htmlFor="score">{evaluation}</Form.Label>
					<Form.Control id="score" name="score" type="number" min="0" max="5" />
				</Form.Group>
			</Col>
		);
	}
}
