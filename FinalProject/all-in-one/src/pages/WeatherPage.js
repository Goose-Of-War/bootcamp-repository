import React from 'react';

import WeatherCard from '../components/WeatherCard';
import InputForm from '../components/InputForm';

const WeatherPage = () => {
	
	const api = {
		key: '4f8e795dcd6dbf7b9f5276bff095ffc1',
		base: 'https://api.openweathermap.org/data/2.5'
	};

	const [weather, setWeather] = React.useState({});

	const handleEvent = event => {
		if (event.key === 'Enter') {
			const query = event.target.value;
			fetch(`${api.base}/weather?q=${query}&appid=${api.key}&units=metric`)
				.then(res => res.json())
				.then(setWeather);
			event.target.value = '';
		}
	};


	return (
		<>
			<h1> Weather App </h1>
			<InputForm handleEvent={handleEvent} placeholder='Enter Location' />
			<WeatherCard weather={weather} />
		</>
	);
};

export default WeatherPage;
