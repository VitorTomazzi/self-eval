import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class Question extends Component {
	render() {
		const { id, evaluation } = this.props.question;

		return (
			<Form.Group
				className="font"
				style={{
					//border: '1px solid black',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					color: '#E4FDE0',
					paddingLeft: '.5rem'
				}}>
				<Form.Label htmlFor="score">{evaluation}</Form.Label>
				<Form.Control id="score" name="score" type="number" min="0" max="5" style={{ width: '20%' }} />
			</Form.Group>
		);
	}
}
