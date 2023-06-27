import React from 'react';

import Task from './Task';

import '../styles/TaskList.css';

class TaskList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			tasks: [],
			input: ''
		};
	}

	addTask = () => {
		if (!this.state.input.trim()) return alert('Enter a valid task.');
		this.setState(currentState => ({
			tasks: [...currentState.tasks, currentState.input],
			input: ''
		}));
	};

	removeTask = (index) => {
		// if (!confirm('Are you sure you want to delete this task?'))
		this.setState(currentState => ({
			tasks: [...currentState.tasks].filter((_, i) => i !== index)
		}));
	};

	checkForEnter = (event) => {
		if (event.key !== 'Enter') return;
		this.addTask();
		event.target.value = '';
	};

	updateInput = (event) => {
		this.setState(() => ({
			input: event.target.value
		}));
	}

	render () {
		return (
			<div className='container'>
				<div id='add-task'>
					<label for='add-task-input'> Add Task </label>
					<input id='add-task-input' type='text' onChange={ this.updateInput } onKeyDown={ this.checkForEnter } />
					<button onClick={ this.addTask }> Submit </button>
				</div>
				<div id='tasks'>
					{
						this.state.tasks.map((task, index) => (<Task value={task} click={() => this.removeTask(index)} key={index}/>))
					}
				</div>
			</div>
		);
	}
}

export default TaskList;
