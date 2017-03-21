import { FETCH_WEATHER } from '../actions/index';


// reducers are function which returns state

//set the initial state to an array instead of null
export default function (state=[], action) { 
	// console.log('Action received', action);
	switch(action.type) {
		case FETCH_WEATHER: 
		
		// return state.push(action.payload.data) // wrong approach, it manipulates existing array

		return state.concat([action.payload.data])
		// ; OR we can also write like -
		// return [action.payload.data, ...state]; //[city,city,city] NOT [city, [city,city]]
	}
	return state;
}

// Avoiding State mutation in reducers-

// Concat doesn't change the old array
// it makes a new array with old and new stuff added
// we arenot mutating state, we are creating new version of state 