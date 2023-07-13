import React from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

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
			<TodoForm handleEvent={handleEvent}/>
			<TodoList list={list} removeTodo={removeTodo} checkTodo={checkTodo} />
		</>
	);
};

export default TodoPage;
