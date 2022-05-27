import React, { useState } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherCard from './WeatherCard';
import '../css/WidgetContainer.css';

export default function WidgetContainer() {
	const [data, setData] = useState(0);

	const onApiSuccess = {
		dataCall: (incomingData: number) => setData(incomingData),
	};

	return (
		<div className="widget-container">
			<h2>Weather API</h2>
			<p>To get weather data, type in a city and click search.</p>
			<WeatherSearch {...onApiSuccess} />
			{true && <WeatherCard weatherData={data} />}
		</div>
	) 
}
