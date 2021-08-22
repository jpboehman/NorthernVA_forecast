import axios from 'axios';

// Mention data pagination here
export const forecastRequest = async () => {
	try {
        const forecasts = await axios.get('http://localhost:5000/forecasts?_limit=5')
        return forecasts
	} catch (e) {
        console.error(e)
    }
};
