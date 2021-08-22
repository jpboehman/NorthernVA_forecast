import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from './store';
import './styles/TextField.css';
import { Button } from '@material-ui/core';
import { forecastRequest } from './api/requests';
import lodashGet from 'lodash.get';

export const TextField = () => {
	const [location, setLocation] = useState('');
	const [globalState, dispatch] = useContext(StoreContext);
	const forecasts = lodashGet(globalState, 'forecasts');

	// Effect to alert the user if no locations are found
	useEffect(() => {
		if (location && forecasts.length === 0) {
			alert('No results found. Please try another location.');
		}
	}, [forecasts]);

	const onLocationChange = (event) => {
		event.preventDefault();
		setLocation(event.target.value);
	};

	const fetchLocationForecast = async (event) => {
		event.preventDefault();
		try {
			await forecastRequest().then((data) =>
				dispatch({
					location,
					data,
					type: 'FETCH_LOCATION_FORECASTS',
				})
			);
		} catch (e) {
			console.error(e) && alert(e);
		}
	};

	return (
		<div className="inputWrapper">
			<p>Location</p>
			<input
				className="textField"
				type="text"
				onChange={onLocationChange}
				value={location}
			/>
			<Button
				variant="contained"
				type="button"
				onClick={fetchLocationForecast}
				disabled={!location}
			>
				Search by Location
			</Button>{' '}
		</div>
	);
};

export default TextField;
