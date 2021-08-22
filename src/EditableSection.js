import React, { useContext } from 'react';
import './styles/EditableSection.css';
import DatePicker from './DatePicker.js';
import TextField from './TextField.js';
import { StoreContext } from './store';
import lodashGet from 'lodash.get';
import { forecastRequest } from './api/requests';
import { Button } from '@material-ui/core';

export const EditableSection = () => {
	// Global context and dispatch function to update the global state
	const [globalState, dispatch] = useContext(StoreContext);

	// Lodash to safely access the properties of the globalState object
	const startDate = lodashGet(globalState, 'startDate');
	const endDate = lodashGet(globalState, 'endDate');

	const fetchDateForecasts = async (event) => {
		event.preventDefault();
		try {
			await forecastRequest().then((dateData) => {
				dispatch({
					startDate,
					endDate,
					dateData,
					type: 'FETCH_DATE_FORECASTS',
				});
			});
		} catch (e) {
			console.error(e) && alert(e);
		}
	};

	const onStartDateChange = (newStartDate) => {
		dispatch({ newStartDate, type: 'SET_START_DATE' });
	};

	const onEndDateChange = (newEndDate) => {
		dispatch({ newEndDate, type: 'SET_END_DATE' });
	};

	return (
		<div className="editable-section">
			<form onSubmit={fetchDateForecasts}>
				<DatePicker
					title="Start Date"
					onChange={onStartDateChange}
					value={startDate}
				/>
				<DatePicker
					title="End Date"
					onChange={onEndDateChange}
					value={endDate}
				/>
				<Button
					variant="contained"
					type="submit"
					disabled={!startDate || !endDate}
				>
					Search by Date / Time
				</Button>{' '}
			</form>
			<TextField />
		</div>
	);
};

export default EditableSection;
