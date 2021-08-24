import React from 'react';
import { useReducer } from 'react';
import './styles/App.css';
import { StoreContext } from './store';
import { reducer, initialState } from './store/reducer';
import EditableSection from './components/EditableSection';
import WeatherCard from './components/WeatherCard';
import lodashGet from 'lodash.get';

export const App = () => {
	// Global state and dispatch function to serve as our State Management
	const [globalState, dispatch] = useReducer(reducer, initialState);
	const forecasts = lodashGet(globalState, 'forecasts');
	
	return (
		<div className="App">
			<StoreContext.Provider value={[globalState, dispatch]}>
				<EditableSection />
				<div className="editable-section">
					{forecasts.map((item, index) => (
						<WeatherCard
							key={index}
							date={item.date}
							weather={item.weather}
							location={item.town}
						/>
					))}
				</div>
			</StoreContext.Provider>
		</div>
	);
};

export default App;
