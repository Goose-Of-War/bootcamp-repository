import React from 'react';

import '../styles/Task.css';

class Task extends React.Component {
	render () {
		return (
			<div className='task'>
				<span> { this.props.value } </span> <button onClick={ this.props.click }> X </button>
			</div>
		);
	}
}

export default Task;
