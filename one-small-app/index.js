window.onload = () => {
	document.querySelector('#push').onclick = () => {
		const task = document.querySelector('#newtask input').value.trim();
		if (!task) return alert('Kindly enter some task!') && false;
		document.querySelector('#tasks').innerHTML += `
		<div class="task">
			<span class="taskname"> ${ task } </span> <button onclick="this.parentElement.parentElement.removeChild(this.parentElement)"> X </button>
		</div>
		`;
		document.querySelector('#newtask input').value = '';
	}
};
