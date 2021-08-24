import {
	SET_START_DATE,
	SET_END_DATE,
	FETCH_DATE_FORECASTS,
	FETCH_LOCATION_FORECASTS,
} from '../constants/constants';
import { getDaysArray, convertToFormat } from '../utils/dateUtils';

export const initialState = {
	startDate: new Date(),
	endDate: new Date(),
	forecasts: [],
};

export const reducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case SET_START_DATE:
			const { newStartDate } = action;
			return {
				...state,
				startDate: newStartDate,
			};
		case SET_END_DATE:
			const { newEndDate } = action;
			return {
				...state,
				endDate: newEndDate,
			};
		case FETCH_DATE_FORECASTS:
			const { startDate, endDate, dateData } = action;
			const daylist = getDaysArray(startDate, endDate);
			convertToFormat(daylist);
			return {
				...state,
				forecasts: dateData.data.filter((item) =>
					daylist.includes(item.date.substr(0, 10))
				),
			};
		case FETCH_LOCATION_FORECASTS:
			const { location } = action;
			const { data } = action.data;
			return {
				...state,
				forecasts: data.filter((item) => item.town === location),
			};
		default:
			return;
	}
};
