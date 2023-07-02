import React, { Component } from 'react';

const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const formValid = ({isError, ...rest}) => {
	let isValid = true;
	Object.values(isError).forEach(val => {
		isValid =  isValid && !(val.length > 0);
	});
	Object.values(rest).forEach(val => {
		isValid = isValid && Boolean(val);
	});
	return isValid;
};

class UserForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			isError: {
				name: '',
				email: '',
				password: ''
			}
		};
	}

	onSubmit = event => {
		event.preventDefault();
		console.log(formValid(this.state) ? this.state : 'Form is invalid!');
	};

	formValChange = event => {
		const { name, value } = event.target;
		let isError = { ...this.state.isError };
		switch (name) {
			case 'name': {
				isError[name] = value.length < 4 ? 'At least 4 characters required.' : '';
				break;
			}
			case 'email': {
				isError[name] = regExp.test(value) ? '' : 'Email Address is invalid';
				break;
			}
			case 'password': {
				isError[name] = value.length < 6 ? 'At least 6 characters required.' : '';
				break;
			}
			default: break;
		}
		this.setState({
			isError,
			[name]: value
		});
	};

	render () {
		const { isError } = this.state;
		return (
			<form onSubmit={ this.onSubmit }>
				<div className='form-group'>
					<label> Name </label>
					<input 
						type='text'
						className={ isError.name.length ? 'form-control' : 'form-control' }
						name='name'
						onChange={ this.formValChange }
					/>
					{ isError.name.length > 0 ? (<span className='invalid-feedback'> { isError.name } </span>) : <br /> }
				</div>
				<div className='form-group'>
					<label> Email </label>
					<input 
						type='text'
						className={ isError.email.length ? 'form-control' : 'form-control' }
						name='email'
						onChange={ this.formValChange }
					/>
					{ isError.email.length > 0 ? (<span className='invalid-feedback'> { isError.email } </span>) : <br /> }
				</div>
				<div className='form-group'>
					<label> Password </label>
					<input 
						type='password'
						className={ isError.password.length ? 'form-control' : 'form-control' }
						name='password'
						onChange={ this.formValChange }
					/>
					{ isError.password.length > 0 ? (<span className='invalid-feedback'> { isError.password } </span>) : <br /> }
				</div>
				<button type='submit' className='btn btn-block btn-danger'> Create User </button>
			</form>
		);
	}
}

export default UserForm;
