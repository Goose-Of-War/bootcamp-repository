import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormTodo = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		console.log(value);
		setValue('');
	};

	return (
		<Form onSubmit={ handleSubmit }>
			<Form.Group>
				<Form.Label> <b> Add Todo </b> </Form.Label>
				<Form.Control type='text' className='input' value={ value } onChange={ e => setValue(e.target.value) } placeholder='Add new todo'/>
			</Form.Group>
			<br />
			<Button variant='primary mb-3' type='submit'> Submit </Button>
		</Form>
	)
};

export default FormTodo;
