import React from 'react';
import renderer from 'react-test-renderer';
import { reducer } from './store/reducer';
import { TextField } from './components/TextField';

jest.mock('axios');

describe('The reducer function', () => {
	let state;
	beforeEach(() => {
		state = {
			startDate: new Date(),
			endDate: new Date(),
			forecasts: [],
		};
	});
	it('Sets the start date', () => {
		const action = {
			newStartDate: '2021-08-12T22:52:22.409Z',
			type: 'SET_START_DATE',
		};

		const expectedState = {
			startDate: '2021-08-12T22:52:22.409Z',
			endDate: new Date(),
			forecasts: [],
		};

		const newState = reducer(state, action);
		expect(newState).toStrictEqual(expectedState);
	});
	it('Sets the end date', () => {
		state = {
			startDate: new Date(),
			endDate: new Date(),
			forecasts: [],
		};
		const action = {
			newEndDate: '2021-08-12T22:52:22.409Z',
			type: 'SET_END_DATE',
		};

		const expectedState = {
			startDate: new Date(),
			endDate: '2021-08-12T22:52:22.409Z',
			forecasts: [],
		};

		const newState = reducer(state, action);
		expect(newState).toStrictEqual(expectedState);
	});
	it('Sets the forecasts', () => {
		const locationData = {
			data: [
				{
					date: '01/01/2020 12:00 AM',
					town: "Tyson's Corner",
					weather: 'Cloudy',
				},
				{
					date: '01/01/2020 12:00 AM',
					town: 'Reston',
					weather: 'Cloudy',
				},
				{
					date: '01/01/2020 12:00 AM',
					town: 'Arlington',
					weather: 'Partly Cloudy',
				},
				{
					date: '01/01/2020 12:00 AM',
					town: "Fall's Church",
					weather: 'Sunny',
				},
				{
					date: '01/01/2020 01:00 AM',
					town: "Tyson's Corner",
					weather: 'Cloudy',
				},
			],
		};

		state = {
			startDate: new Date(),
			endDate: new Date(),
			forecasts: [],
		};
		const action = {
			location: 'Arlington',
			data: locationData,
			type: 'FETCH_LOCATION_FORECASTS',
		};

		const expectedState = {
			startDate: new Date(),
			endDate: new Date(),
			forecasts: [
				{
					date: '01/01/2020 12:00 AM',
					town: 'Arlington',
					weather: 'Partly Cloudy',
				},
			],
		};
		const newState = reducer(state, action);
		expect(newState).toStrictEqual(expectedState);
	});
});

describe('The TextField component', () => {
	let component;
	let onChange = jest.fn();
	beforeEach(() => {
		component = renderer.create(<TextField />);
	});
	it('Renders all properties', () => {
		// expect(component.root.findAllByType('span')[2].props.children).toEqual(3);
		expect(component.root.findByType('p').props.children).toEqual('Location');
		expect(
			component.root.findByType('button').props.children[0].props.children[1]
		).toEqual('Search by location');
	});
});
