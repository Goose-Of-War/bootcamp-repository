import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const WeatherCard = ({weather}) => {
	if (!Object.keys(weather.main || []).some(Boolean)) return (<></>);
	let cardBackground;
	cardBackground = weather.main.temp > 32 ? '#ff8e8e' : (weather.main.temp > 16 ? '#ffde8e' : '#8e8eff')
	return (
		<Card sx={{ width: '450px', margin: '40px auto', borderRadius: '10px' }}>
			<CardMedia sx={{ backgroundColor: cardBackground, height: '165px' }} />
			<CardContent sx={{ backgroundColor: '#2d2a33', color: '#dedede' }}>
				<Typography variant='h2'>{ weather?.name || 'Location' }</Typography>
				<Typography variant='body1'><b>Current Temperature: </b>{ weather?.main?.temp }°C</Typography>
				<Typography variant='body2'><i>Feels like { weather?.main?.feels_like }°C</i></Typography>
			</CardContent>
		</Card>
	);
};

export default WeatherCard;
