import React from 'react';

import Weather from './components/Weather';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
		return (
		<div className='app'>
			<h1 className='text-center'> Weather App </h1>
			<Weather />
		</div>
	);
};

export default App;
