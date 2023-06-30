import React, { useState } from 'react';

import SearchBox from './SearchBox';
import WeatherInfo from './WeatherInfo';

const api = {
	key: '4f8e795dcd6dbf7b9f5276bff095ffc1',
	base: 'https://api.openweathermap.org/data/2.5'
};

function Weather () {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = event => {
		if (event.key === 'Enter') fetch(`${api.base}/weather?q=${query}&appid=${api.key}&units=metric`)
			.then(response => response.json())
			.then(result => {
				setWeather(result);
				setQuery('');
				console.log(result);
			});
	};

	const dateBuilder = dateObject => {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const { day, date, month, year } = {
			date: dateObject.getDate(),
			day: days[dateObject.getDay()],
			month: months[dateObject.getMonth()],
			year: dateObject.getYear() + 1900
		};

		return `${day}, ${date} ${month} ${year}`;
	};

	return (
		<div className={ weather.main ? (weather.main.temp > 16 ? 'app-warm' : 'app') : 'app' }>
			<main>
				<SearchBox query={ query } setQuery={ setQuery } search={ search } />
				{ weather.main ? <WeatherInfo weather={ weather } dateBuilder={ dateBuilder }/> : <br /> }
			</main>
		</div>
	);
};

export default Weather;
