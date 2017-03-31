import axios from 'axios';

export function fetchUsers() {
	const request = axios.get('http://jsonplaceholder.typicode.com/users')

	//Vanilla redux expects us to return an action

//thunk enable to return a JS function with dispatch method instead of object 
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({type: 'FETCH_PROFILES', payload: data})
		});
	};
}