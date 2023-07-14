import React from 'react';

import TodoList from '../components/TodoList';
import InputForm from '../components/InputForm';

const TodoPage = () => {
	const [list, setList] = React.useState([
		{ value: 'Say hello', checked: true },
		{ value: 'Work on React', checked: true },
		{ value: 'Get stuff done', checked: false }
	]);
	const handleEvent = event => {
		if (event.key === 'Enter') {
			if (!event.target.value?.trim()) return;
			setList([...list, { value: event.target.value , checked: false }]);
			event.target.value = '';
		}
	};
	const checkTodo = (index) => setList(list.map(({ value, checked }, i) => ({ value, checked: i === index ? !checked : checked })));
	const removeTodo = (index) => setList(list.filter((_, i) => i !== index));

	return (
		<>
			<h1> To-Do App </h1>
			<InputForm handleEvent={handleEvent} placeholder='Add To-Do' />
			<TodoList list={list} removeTodo={removeTodo} checkTodo={checkTodo} />
		</>
	);
};

export default TodoPage;
