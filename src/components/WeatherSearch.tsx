import React, { useState } from 'react';
import '../css/WeatherSearch.css';

export default function WeatherSearch(props: {dataCall: (incomingData: number) => void}) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [weatherData, setWeatherData] = useState(0);
	const [error, setError] = useState('');

	const apiCall = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoaded(false);
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=95ecee35a85ba80473ff7c9c307045bc`, 
		{ method: 'GET' })
		.then(response => response.json())
		.then(data => {
			const { temp } = data.main
			const tempF = Math.round(1.8 * (temp - 273) + 32);
			setWeatherData(tempF);
			props.dataCall(weatherData);
		})
		.catch(error => {
			setError(error);
			setIsLoaded(false);
		});
	};

	return (
		<div className="search-container">
			<form action="">
				<input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Search for a city' />
				<button onClick={e => apiCall(e)}>Search</button>
			</form>
		</div>
	)
}