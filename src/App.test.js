import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { EditableSection } from '../src/EditableSection';
import App from './App';
import WeatherCard from './WeatherCard';
// import jest from 'jest'

jest.mock('axios');

const forecastOne = {
	date: '01/01/2020 12:00 AM',
	town: "Tyson's Corner",
	weather: 'Cloudy',
};

const forecastTwo = {
	date: '01/01/2020 12:00 AM',
	town: 'Reston',
	weather: 'Cloudy',
};

describe('API calls to the local json server', () => {
	it('Successfully retrieves data', async () => {
		const forecasts = [forecastOne, forecastTwo];

		const promise = Promise.resolve({
			forecasts: [forecastOne, forecastTwo],
		});

		axios.get.mockImplementationOnce(() => promise);

		let component;
		// Awaiting the call because the component will re-render when the promise resolves / rejects
		await renderer.act(async () => {
			component = renderer.create(<App />);
		});

		expect(component.root.findAllByType(WeatherCard[0]).props.date).toEqual(
			forecastOne.date
		);
	});
});
