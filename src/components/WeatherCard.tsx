import React from 'react';
import '../css/WeatherCard.css';

export default function WeatherCard({ weatherData }: {weatherData: number}) {
	return (
		<div className="card-container">
			<div className="temp">{weatherData}</div>
		</div>
	)
}
