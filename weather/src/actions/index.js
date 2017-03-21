import axios from 'axios';

const API_KEY = '74ea675c1ee96d1fd78e364093eefb49';

// const ROOT_URL ='http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// Or in ES6 we can also write in this manner

const ROOT_URL =`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER'; //declared a constant variable which holds action.type

//creating an action creator which return action
export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); //ajax request with axios

	return {
		type: FETCH_WEATHER,
		payload: request //also k/a promise
	};
}

//middleware stops the payload promise at first, unwraps and resolve it, 
//and proceed it further as 'request' to reducers