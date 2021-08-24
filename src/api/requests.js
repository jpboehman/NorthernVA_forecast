import axios from 'axios';
import { API_ENDPOINT } from '../constants/constants';

// Mention data pagination here
export const forecastRequest = async () => {
	try {
        const forecasts = await axios.get(API_ENDPOINT)
        return forecasts
	} catch (e) {
        console.error(e)
    }
};
