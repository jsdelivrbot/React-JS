//state argument is not application state,
//only the state this reducer is reponsible for


//state = null  means if state is undefined, set it to 'null'
export default function (state = null, action) {
	switch (action.type) {
		case: 'BOOK_SELECTED':
		return action.payload;
	}

	return state;
}