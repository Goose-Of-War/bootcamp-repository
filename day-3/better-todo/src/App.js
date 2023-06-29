import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Todo from './components/Todo';
import FormTodo from './components/Formtodo';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
	const [todos, setTodos] = useState([
		{ text: 'I am a sample todo', isDone: false }
	]);
	// Setting the state to current todos plus the new one
	const addTodo = text => setTodos([...todos, { text }]);
	// Setting the state of todo at nth index to true
	const markTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	}
	// Removing a todo from the array
	const removeTodo = index => setTodos([...todos].filter((t, i) => i !== index));

	return (
		<div className='app'>
			<h1 className='text-center'> Todo List </h1>
			<FormTodo addTodo={addTodo} />
			<div className='container'>
				{ todos.map((todo, index) => (
					<Card key={index}>
						<Card.Body>
							<Todo index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
						</Card.Body>
					</Card>
				)) }
			</div>
		</div>
	);
};

export default App;
